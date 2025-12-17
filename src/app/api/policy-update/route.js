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
          'Cache-Control': 'public, s-maxage=43200, stale-while-revalidate=3600' // 12h cache
        }
      });
    }

    return NextResponse.json({ 
      policy: {
        title: policy.title,
        type: policy.type,
        url: policy.url
      }
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=43200, stale-while-revalidate=3600' // 12h cache
      }
    });
  } catch (error) {
    console.error("Policy Update Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
