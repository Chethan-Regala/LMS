import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const students = [
  "241uft0001@ggu.edu.in", "241uft0002@ggu.edu.in", "241uft0003@ggu.edu.in",
  "241uft0004@ggu.edu.in", "241uft0005@ggu.edu.in", "241uft0006@ggu.edu.in",
  "241uft0007@ggu.edu.in", "241uft0008@ggu.edu.in", "241uft0009@ggu.edu.in",
  "241uft0010@ggu.edu.in", "241uft0011@ggu.edu.in", "241uft0012@ggu.edu.in",
  "241uft0013@ggu.edu.in", "241uft0014@ggu.edu.in", "241uft0015@ggu.edu.in",
  "241uft0016@ggu.edu.in", "241uft0017@ggu.edu.in", "241uft0018@ggu.edu.in",
  "241uft0019@ggu.edu.in", "241uft0020@ggu.edu.in", "241uft0021@ggu.edu.in",
  "241uft0022@ggu.edu.in", "241uft0023@ggu.edu.in", "241uft0024@ggu.edu.in",
  "241uft0025@ggu.edu.in", "241uft0026@ggu.edu.in", "241uft0027@ggu.edu.in",
  "241uft0028@ggu.edu.in", "241uft0029@ggu.edu.in", "241uft0030@ggu.edu.in",
  "241uft0031@ggu.edu.in", "241uft0032@ggu.edu.in", "241uft0033@ggu.edu.in",
  "241uft0034@ggu.edu.in", "241uft0035@ggu.edu.in", "241uft0036@ggu.edu.in",
  "241uft0037@ggu.edu.in", "241uft0038@ggu.edu.in", "241uft0039@ggu.edu.in",
  "241uft0040@ggu.edu.in", "241uft0041@ggu.edu.in", "241uft0042@ggu.edu.in",
  "241uft0043@ggu.edu.in", "241uft0044@ggu.edu.in", "241uft0045@ggu.edu.in",
  "241uft0046@ggu.edu.in", "241uft0047@ggu.edu.in", "241uft0048@ggu.edu.in",
  "241uft0049@ggu.edu.in", "241uft0050@ggu.edu.in",
];

export async function POST() {
  try {
    const db = await getDb();

    // Get existing emails to avoid duplicates
    const existingUsers = await db
      .collection("users")
      .find({ isAdmin: false })
      .project({ email: 1, _id: 0 })
      .toArray();
    const existingEmails = new Set(existingUsers.map((u) => u.email));

    const newStudents = students
      .filter((email) => !existingEmails.has(email))
      .map((email) => ({
        email,
        fullName: "",
        phoneNumber: "",
        currentSemester: 4,
        isAdmin: false,
        createdAt: new Date(),
      }));

    if (newStudents.length === 0) {
      return NextResponse.json({
        ok: true,
        message: "All students already seeded",
        inserted: 0,
      });
    }

    const result = await db.collection("users").insertMany(newStudents);

    return NextResponse.json({
      ok: true,
      message: `${result.insertedCount} students seeded successfully`,
      inserted: result.insertedCount,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
