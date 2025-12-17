import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import Session from "@/models/Session";

export async function GET(req) {
  try {
    await connectToDatabase();
    const sessionToken = req.cookies.get("session_token")?.value;

    if (!sessionToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = await Session.findOne({ token: sessionToken });
    if (!session || session.expiresAt < new Date()) {
        return NextResponse.json({ error: "Session expired or invalid" }, { status: 401 });
    }

    const user = await User.findById(session.userId).select("-password -otp -otpExpiry");
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });

  } catch (error) {
    console.error("Auth Check Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
