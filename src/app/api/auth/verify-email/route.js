import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";

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

    user.isVerified = true;
    user.isActive = true;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return NextResponse.json({ message: "Email verified successfully. You can now login." }, { status: 200 });

  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
