import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET(req) {
  try {
    await connectToDatabase();
    // In real app, check permission here.
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error("Fetch Contacts Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
