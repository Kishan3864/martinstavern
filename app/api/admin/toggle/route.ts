import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";
import { setSiteActive } from "@/lib/site-lock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const active = Boolean(body?.active);

  try {
    await setSiteActive(active);
    return NextResponse.json({ ok: true, active });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not update database" },
      { status: 500 }
    );
  }
}
