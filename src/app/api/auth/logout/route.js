import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Session from "@/models/Session";

export async function POST(req) {
  try {
    await connectToDatabase();
    const sessionToken = req.cookies.get("session_token")?.value;

    if (sessionToken) {
        await Session.deleteOne({ token: sessionToken });
    }

    const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

    response.cookies.set({
        name: "session_token",
        value: "",
        httpOnly: true,
        expires: new Date(0), 
        path: "/",
    });

    return response;

  } catch (error) {
    console.error("Logout Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
