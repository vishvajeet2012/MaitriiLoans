import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Contact from "@/models/Contact";
import Notification from "@/models/Notification";
import { sendPushNotification } from "@/lib/push";

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();

    // 1. Save Contact
    const newContact = await Contact.create(data);
    const message = `New Inquiry: ${data.name} for ${data.loanType}`;

    // 2. Create Database Notification
    await Notification.create({
      message: message,
      type: 'contact',
      targetPermissions: ['contact', 'superadmin'], 
      link: '/admin/dashboard/view/contact', 
    });

    // 3. Send Web Push Notification
    await sendPushNotification(
        { 
            title: 'New Contact Inquiry', 
            message: message, 
            url: `/admin/dashboard/view/contact` 
        }, 
        ['contact'] // Target permissions
    );

    return NextResponse.json({ message: "Inquiry received successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

