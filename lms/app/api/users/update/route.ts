import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function PUT(req: Request) {
  try {
    const { email, fullName, phoneNumber, currentSemester } = await req.json();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const db = await getDb();

    await db.collection("users").updateOne(
      { email },
      { $set: { fullName, phoneNumber, currentSemester, updatedAt: new Date() } }
    );

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
