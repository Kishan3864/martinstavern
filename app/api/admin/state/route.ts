import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";
import { getSiteActiveFresh } from "@/lib/site-lock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ authed: false });
  }

  try {
    const active = await getSiteActiveFresh();
    return NextResponse.json({ authed: true, active });
  } catch {
    return NextResponse.json({ authed: true, active: null, error: "db" });
  }
}
