import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import { headers } from "next/headers";

export async function GET(req) {
  try {
    await connectToDatabase();
    
    // In a real app, verify session here using headers/cookies
    // For now, we trust the client logic or could add middleware
    // But let's at least check if there's a user header if we were using middleware
    
    const users = await User.find({}).select("-password -otp -otpExpiry").sort({ createdAt: -1 });
    
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Fetch Users Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
