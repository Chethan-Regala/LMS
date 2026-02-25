import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function DELETE(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (email === "admin@ggu.edu.in") {
      return NextResponse.json(
        { ok: false, error: "Primary admin account cannot be deleted" },
        { status: 403 }
      );
    }

    const db = await getDb();
    const result = await db.collection("users").deleteOne({ email });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { ok: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
