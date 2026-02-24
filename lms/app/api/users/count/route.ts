import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();

    const [count, users] = await Promise.all([
      db.collection("users").countDocuments({ isAdmin: false }),
      db
        .collection("users")
        .find({})
        .project({ email: 1, fullName: 1, isAdmin: 1, currentSemester: 1, _id: 0 })
        .toArray(),
    ]);

    return NextResponse.json({ ok: true, count, users });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
