import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { subject, moduleName, description, fileUrl } = await req.json();

    if (!subject || !moduleName) {
      return NextResponse.json(
        { ok: false, error: "subject and moduleName are required" },
        { status: 400 }
      );
    }

    const db = await getDb();

    await db.collection("modules").insertOne({
      subject,
      moduleName,
      description,
      fileUrl,
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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get("subject");

    const db = await getDb();
    const query = subject ? { subject } : {};
    const modules = await db.collection("modules").find(query).toArray();

    return NextResponse.json({ ok: true, data: modules });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
