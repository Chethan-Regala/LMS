import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { userName, userEmail, leaveType, startDate, endDate, reason } =
      await req.json();

    if (!userName || !userEmail || !leaveType || !startDate || !endDate || !reason) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await getDb("lms");

    await db.collection("leaves").insertOne({
      userName,
      userEmail,
      leaveType,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      reason,
      status: "pending",
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit leave" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await getDb("lms");

    const leaves = await db
      .collection("leaves")
      .find({ expiresAt: { $gt: new Date() } })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(leaves);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch leaves" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const { ObjectId } = await import("mongodb");
    const db = await getDb("lms");

    const result = await db
      .collection("leaves")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Leave not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete leave" },
      { status: 500 }
    );
  }
}
