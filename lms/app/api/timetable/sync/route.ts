import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

// Embedded default timetable — same as in timetable/route.ts
const DEFAULT_TIMETABLE = {
  MON: [
    { time: "09:30 - 10:30", subject: "Integrated Session" },
    { time: "10:30 - 11:30", subject: "Integrated Session" },
    { time: "11:30 - 12:30", subject: "ES" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "NSS" },
    { time: "02:15 - 03:15", subject: "OS" },
    { time: "03:15 - 04:15", subject: "Free session" },
  ],
  TUE: [
    { time: "09:30 - 10:30", subject: "Free Session" },
    { time: "10:30 - 11:30", subject: "LS: PPHC" },
    { time: "11:30 - 12:30", subject: "ES" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "LS: PPHC" },
    { time: "02:15 - 03:15", subject: "Practice Session (DS)" },
    { time: "03:15 - 04:15", subject: "Practice Session (DS)" },
  ],
  WED: [
    { time: "09:30 - 10:30", subject: "DS" },
    { time: "10:30 - 11:30", subject: "DS" },
    { time: "11:30 - 12:30", subject: "NSS" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "NSS" },
    { time: "02:15 - 03:15", subject: "Integrated Session" },
    { time: "03:15 - 04:15", subject: "Integrated Session" },
  ],
  THU: [
    { time: "09:30 - 10:30", subject: "LS: PPHC" },
    { time: "10:30 - 11:30", subject: "FLAT" },
    { time: "11:30 - 12:30", subject: "DS" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "FLAT" },
    { time: "02:15 - 03:15", subject: "Practice Session (DS)" },
    { time: "03:15 - 04:15", subject: "Practice Session (DS)" },
  ],
  FRI: [
    { time: "09:30 - 10:30", subject: "Practice Session (DS)" },
    { time: "10:30 - 11:30", subject: "Practice Session (DS)" },
    { time: "11:30 - 12:30", subject: "FLAT" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "LS: PPHC" },
    { time: "02:15 - 03:15", subject: "OS" },
    { time: "03:15 - 04:15", subject: "OS" },
  ],
  SAT: [
    { time: "09:30 - 10:30", subject: "Self Study" },
    { time: "10:30 - 11:30", subject: "Project Work" },
    { time: "11:30 - 12:30", subject: "Lab Practice" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "Extra Classes" },
    { time: "02:15 - 03:15", subject: "Sports/Activities" },
    { time: "03:15 - 04:15", subject: "Library" },
  ],
  SUN: [
    { time: "09:30 - 10:30", subject: "Revision" },
    { time: "10:30 - 11:30", subject: "Assignment Work" },
    { time: "11:30 - 12:30", subject: "Online Courses" },
    { time: "12:30 - 01:15", subject: "Lunch Break", description: "Time to refuel and rest." },
    { time: "01:15 - 02:15", subject: "Group Study" },
    { time: "02:15 - 03:15", subject: "Hobby/Recreation" },
    { time: "03:15 - 04:15", subject: "Free Time" },
  ],
};

export async function POST() {
  try {
    const db = await getDb();

    await db.collection("timetable").updateOne(
      { id: "main" },
      { $set: { schedule: DEFAULT_TIMETABLE, syncedAt: new Date() } },
      { upsert: true }
    );

    return NextResponse.json({ ok: true, message: "Timetable synced from default data" });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
