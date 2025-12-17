import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import Session from "@/models/Session";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { email, otp } = await req.json();

    if (!email || !otp) {
        return NextResponse.json({ error: "Please provide email and OTP" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.otp !== otp || user.otpExpiry < new Date()) {
        return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Clear OTP
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    // Create Session
    const sessionToken = uuidv4();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await Session.create({
        userId: user._id,
        token: sessionToken,
        expiresAt
    });

    const response = NextResponse.json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email, username: user.username, role: user.role } }, { status: 200 });

    response.cookies.set({
        name: "session_token",
        value: sessionToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: expiresAt,
        path: "/",
    });

    return response;

  } catch (error) {
    console.error("Login Verification Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
