import clientPromise from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const timetable = await db.collection("timetable").findOne({ id: "main" });

    if (timetable?.schedule) {
      const schedule = timetable.schedule;
      let updated = false;

      // Ensure every day has a Lunch Break inserted at the correct slot
      Object.keys(schedule).forEach((day) => {
        const sessions = schedule[day];
        const hasLunch = sessions.some((p: any) => p.subject === "Lunch Break");
        if (!hasLunch && sessions.length >= 3) {
          // Insert Lunch Break after the 11:30 - 12:30 slot
          sessions.splice(3, 0, {
            "time": "12:30 - 01:15",
            "subject": "Lunch Break",
            "description": "Daily scheduled break for rest and lunch."
          });
          updated = true;
        }
      });

      if (updated) {
        await db.collection("timetable").updateOne(
          { id: "main" },
          { $set: { schedule } }
        );
      }
      return NextResponse.json({ ok: true, data: schedule });
    }

    // If no DB data, initialize from JSON
    const jsonPath = path.join(process.cwd(), "public", "timetable.json");
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    await db.collection("timetable").updateOne(
      { id: "main" },
      { $set: { schedule: jsonData } },
      { upsert: true }
    );

    return NextResponse.json({ ok: true, data: jsonData });
  } catch (err: any) {
    try {
      const fallbackPath = path.join(process.cwd(), "public", "timetable.json");
      const fallbackData = JSON.parse(fs.readFileSync(fallbackPath, "utf-8"));
      return NextResponse.json({ ok: true, data: fallbackData });
    } catch (fallbackErr: any) {
      return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
  }
}

export async function PUT(req: Request) {
  try {
    const { schedule } = await req.json();

    const client = await clientPromise;
    const db = client.db();

    await db.collection("timetable").updateOne(
      { id: "main" },
      { $set: { schedule } },
      { upsert: true }
    );

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
