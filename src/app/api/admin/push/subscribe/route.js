import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Subscription from "@/models/Subscription";
import User from "@/models/User"; // Ensure authentication
import { headers } from "next/headers";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { subscription, userId } = await req.json();

    if (!userId || !subscription) {
        return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // Save or update subscription
    // Using endpoint as unique identifier
    await Subscription.findOneAndUpdate(
        { endpoint: subscription.endpoint },
        { 
            userId,
            keys: subscription.keys,
            endpoint: subscription.endpoint
        },
        { upsert: true, new: true }
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Subscription Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
