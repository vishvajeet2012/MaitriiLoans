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

// GET - Fetch current policy settings (for admin view)
export async function GET() {
  try {
    await connectToDatabase();
    const user = await verifySuperadmin();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const policy = await PolicyUpdate.findOne().sort({ updatedAt: -1 });
    
    if (policy) {
      // Check if expired for admin display
      const isExpired = policy.expiryDate && new Date() > new Date(policy.expiryDate);
      return NextResponse.json({ 
        policy: {
          ...policy.toObject(),
          isExpired
        }
      }, { status: 200 });
    }
    
    return NextResponse.json({ policy: null }, { status: 200 });
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

    const { title, type, pdfData, pdfName, url, isEnabled, expiryDate } = await req.json();

    if (!type) {
      return NextResponse.json({ error: "Type is required" }, { status: 400 });
    }

    // Validate based on type
    if (type === 'pdf' && !pdfData) {
      return NextResponse.json({ error: "PDF file is required" }, { status: 400 });
    }
    if (type === 'link' && !url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Build update object
    const updateData = {
      title: title || 'Policy Update',
      type,
      isEnabled: isEnabled ?? false,
      expiryDate: expiryDate ? new Date(expiryDate) : null
    };

    if (type === 'pdf') {
      updateData.pdfData = pdfData;
      updateData.pdfName = pdfName || 'policy.pdf';
      updateData.url = null; // Clear URL if switching to PDF
    } else {
      updateData.url = url;
      updateData.pdfData = null; // Clear PDF data if switching to link
      updateData.pdfName = null;
    }

    // Upsert - only one policy record
    const policy = await PolicyUpdate.findOneAndUpdate(
      {},
      updateData,
      { upsert: true, new: true }
    );

    return NextResponse.json({ policy, message: "Policy updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Admin Policy Update Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
