import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, isAdmin } = await req.json();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const db = await getDb();

    // Check if user with this email and role already exists
    const existingUser = await db.collection("users").findOne({
      email,
      isAdmin: isAdmin || false,
    });

    if (existingUser) {
      return NextResponse.json(
        { ok: false, error: "User already exists" },
        { status: 400 }
      );
    }

    await db.collection("users").insertOne({
      email,
      fullName: "",
      phoneNumber: "",
      currentSemester: 1,
      isAdmin: isAdmin || false,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
