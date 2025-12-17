import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import PolicyUpdate from "@/models/PolicyUpdate";
import User from "@/models/User";
import { cookies } from "next/headers";
import Session from "@/models/Session";

// Helper to verify superadmin
async function verifySuperadmin() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('session_token')?.value;
  if (!sessionToken) return null;

  const session = await Session.findOne({ token: sessionToken, expiresAt: { $gt: new Date() } });
  if (!session) return null;

  const user = await User.findById(session.userId);
  if (!user || user.role !== 'superadmin') return null;

  return user;
}

// GET - Fetch current policy settings
export async function GET() {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const policy = await PolicyUpdate.findOne().sort({ updatedAt: -1 });
    return NextResponse.json({ policy: policy || null }, { status: 200 });
  } catch (error) {
    console.error("Admin Policy Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST - Create or Update policy
export async function POST(req) {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, type, url, isEnabled } = await req.json();

    if (!type || !url) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Upsert - only one policy record
    const policy = await PolicyUpdate.findOneAndUpdate(
      {},
      { title: title || 'Policy Update', type, url, isEnabled: isEnabled ?? false },
      { upsert: true, new: true }
    );

    return NextResponse.json({ policy, message: "Policy updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Admin Policy Update Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
