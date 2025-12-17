import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Notification from "@/models/Notification";
import User from "@/models/User";
import { headers } from "next/headers";

// Helper to get user via simpler auth extraction or headers
// In prod, use real session validation middleware
async function getAuthUser() {
    // This part assumes client sends some ID or we interpret session.
    // For now, we will rely on a custom header from the client or basic session check if possible.
    // Simplification: We will accept a 'x-user-id' header for this polling (secure this in real prod).
    const headersList = headers();
    const userId = headersList.get('x-user-id');
    if (!userId) return null;
    return await User.findById(userId);
}

export async function GET(req) {
  try {
    await connectToDatabase();
    const user = await getAuthUser();

    if (!user) {
        return NextResponse.json({ notifications: [] }, { status: 200 }); // Or 401
    }

    // Find notifications that:
    // 1. Match user's permissions OR user's role (superadmin matches 'superadmin')
    // 2. Have NOT been read by this user yet
    
    // Permission check: if user has 'contact', they see 'contact' type notifs.
    // Superadmin sees 'superadmin' targeted ones (and maybe all, but logic below relies on targets).
    
    const userPermissions = user.permissions || [];
    if (user.role === 'superadmin') userPermissions.push('superadmin');

    // Find notifications where targetPermissions overlaps with userPermissions
    // AND user._id is NOT in readBy
    
    const notifications = await Notification.find({
        targetPermissions: { $in: userPermissions },
        readBy: { $ne: user._id }
    }).sort({ createdAt: -1 });

    return NextResponse.json({ notifications }, { status: 200 });
  } catch (error) {
    console.error("Notification Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
