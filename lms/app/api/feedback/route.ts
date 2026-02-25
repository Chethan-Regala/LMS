import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const db = await getDb("lms");

    await db.collection("feedback").insertOne({
      message: message.trim(),
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await getDb("lms");

    // TTL index handles cleanup automatically, but also clean up manually as backup
    const feedback = await db
      .collection("feedback")
      .find({ expiresAt: { $gt: new Date() } })
      .sort({ createdAt: -1 })
      .project({ expiresAt: 0 }) // Don't send internal TTL field to client
      .toArray();

    return NextResponse.json(feedback);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch feedback" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Feedback ID is required" },
        { status: 400 }
      );
    }

    const db = await getDb("lms");
    const { ObjectId } = await import("mongodb");

    const result = await db
      .collection("feedback")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Feedback not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete feedback" },
      { status: 500 }
    );
  }
}

