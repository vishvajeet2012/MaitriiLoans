import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Notification from "@/models/Notification";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { notificationId, userId } = await req.json();

    await Notification.findByIdAndUpdate(
        notificationId,
        { $addToSet: { readBy: userId } }
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mark Read Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
