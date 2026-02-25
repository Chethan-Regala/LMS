import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST() {
  try {
    const db = await getDb();

    const existingAdmin = await db.collection("users").findOne({
      email: "admin@ggu.edu.in",
      isAdmin: true,
    });

    if (existingAdmin) {
      return NextResponse.json({ ok: false, message: "Admin already exists" });
    }

    await db.collection("users").insertOne({
      email: "admin@ggu.edu.in",
      password: "admin123",
      fullName: "Admin",
      phoneNumber: "",
      currentSemester: 0,
      isAdmin: true,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, message: "Admin created successfully" });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
