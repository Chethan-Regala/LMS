import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getModuleName } from "@/lib/moduleNames";

export const dynamic = "force-dynamic"; // Never cache progress data

export async function POST(req: NextRequest) {
  try {
    const {
      userEmail,
      subject,
      unitId,
      moduleId,
      score,
      totalQuestions,
      completed,
    } = await req.json();

    if (!userEmail || !subject || unitId === undefined || moduleId === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: userEmail, subject, unitId, moduleId" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const moduleName = getModuleName(subject, unitId, moduleId);
    const percentage =
      totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    await db.collection("progress").updateOne(
      { userEmail, subject, unitId, moduleId },
      {
        $set: {
          score,
          totalQuestions,
          moduleName,
          percentage,
          completed: completed || percentage >= 60,
          completedAt: new Date(),
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/progress error:", error);
    return NextResponse.json(
      { error: "Failed to save progress" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("userEmail");
    const subject = searchParams.get("subject");

    if (!userEmail) {
      return NextResponse.json(
        { error: "userEmail is required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const query: Record<string, string> = { userEmail };
    if (subject) query.subject = subject;

    const progress = await db
      .collection("progress")
      .find(query)
      .project({ _id: 0 }) // Don't serialize ObjectId — saves bandwidth
      .toArray();

    return NextResponse.json(
      { success: true, data: progress },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("GET /api/progress error:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}
