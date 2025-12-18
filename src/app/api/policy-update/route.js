import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import PolicyUpdate from "@/models/PolicyUpdate";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Get the most recent policy update that is enabled
    const policy = await PolicyUpdate.findOne({ isEnabled: true }).sort({ updatedAt: -1 });
    
    if (!policy) {
      return NextResponse.json({ policy: null }, { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0' // No cache - always fresh
        }
      });
    }

    // Check if expired
    if (policy.expiryDate && new Date() > new Date(policy.expiryDate)) {
      // Expired - don't show to users
      return NextResponse.json({ policy: null }, { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0' // No cache - always fresh
        }
      });
    }

    // Return policy without pdfData (large), just metadata
    return NextResponse.json({ 
      policy: {
        title: policy.title,
        type: policy.type,
        url: policy.url, // For link type
        pdfName: policy.pdfName, // For PDF type
        hasPdf: !!policy.pdfData // Boolean indicator
      }
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0' // No cache - always fresh
      }
    });
  } catch (error) {
    console.error("Policy Update Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
