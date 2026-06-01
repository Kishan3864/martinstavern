import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  checkPassword,
  createSessionToken,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const password = typeof body?.password === "string" ? body.password : "";

  if (!checkPassword(password)) {
    // Small delay to slow brute-force attempts.
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json(
      { ok: false, error: "Incorrect password" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
