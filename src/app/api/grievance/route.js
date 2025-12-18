import connectToDatabase from "@/lib/db";
import Grievance from "@/models/Grievance";
import Notification from "@/models/Notification";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(req) {
  try {
    const { name, mobile, email, loanNumber, issue } = await req.json();

    if (!name || !mobile || !email || !issue) {
      return NextResponse.json(
        { message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingGrievance = await Grievance.findOne({
      $or: [{ email }, { mobile }],
      status: { $nin: ["Closed"] },
    });

    if (existingGrievance) {
      return NextResponse.json(
        {
          message: `A complaint is already active for this Email or Mobile number. Complaint ID: ${existingGrievance.complaintId}`,
        },
        { status: 429 }
      );
    }

    const latestGrievance = await Grievance.findOne().sort({ createdAt: -1 });
    
    let nextIdNumber = 1;
    if (latestGrievance && latestGrievance.complaintId) {
        // Extract number from formats like "COMPL-MFPL-00001" or old "Maitrii10001"
        const match = latestGrievance.complaintId.match(/(\d+)$/);
        if (match) {
            const currentNumber = parseInt(match[1], 10);
            if (!isNaN(currentNumber)) {
                nextIdNumber = currentNumber + 1;
            }
        }
    }
    
    // Format: COMPL-MFPL-00001 (5 digit padding)
    const newComplaintId = `COMPL-MFPL-${String(nextIdNumber).padStart(5, '0')}`;

    const grievance = await Grievance.create({
      name,
      mobile,
      email,
      loanNumber,
      issue,
      complaintId: newComplaintId,
      status: "Pending"
    });

    try {
      await Notification.create({
        message: `New Grievance Received: ${newComplaintId} from ${name}`,
        type: 'grievance',
        targetPermissions: ['admin', 'superadmin'],
        link: '/admin/dashboard?tab=grievance'
      });
    } catch (notifError) {
      console.error("Failed to create notification", notifError);
    }

    const recipientEmail = process.env.sendEmailId;
    if (recipientEmail) {
      const emailSubject = `New Grievance Submitted: ${newComplaintId}`;
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">
                  
                  <tr>
                    <td style="background: linear-gradient(135deg, #6D3078 0%, #8B4A9C 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Maitrii Loans</h1>
                      <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; font-size: 14px;">Grievance Notification</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 35px 40px;">
                      <div style="background: linear-gradient(135deg, #F47E4D 0%, #FF9A6C 100%); border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 30px;">
                        <p style="color: rgba(255,255,255,0.9); margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Complaint ID</p>
                        <h2 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 2px;">${newComplaintId}</h2>
                      </div>

                      <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Complainant Details</h3>
                      
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <span style="color: #888; font-size: 13px; display: block; margin-bottom: 3px;">Full Name</span>
                            <span style="color: #333; font-size: 15px; font-weight: 500;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <span style="color: #888; font-size: 13px; display: block; margin-bottom: 3px;">Mobile Number</span>
                            <span style="color: #333; font-size: 15px; font-weight: 500;">${mobile}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <span style="color: #888; font-size: 13px; display: block; margin-bottom: 3px;">Email Address</span>
                            <span style="color: #333; font-size: 15px; font-weight: 500;">${email}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                            <span style="color: #888; font-size: 13px; display: block; margin-bottom: 3px;">Loan Number</span>
                            <span style="color: #333; font-size: 15px; font-weight: 500;">${loanNumber || 'Not Provided'}</span>
                          </td>
                        </tr>
                      </table>

                      <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Issue Description</h3>
                      <div style="background-color: #f8f9fa; border-left: 4px solid #6D3078; padding: 15px 20px; border-radius: 0 8px 8px 0; margin-bottom: 30px;">
                        <p style="color: #555; margin: 0; font-size: 14px; line-height: 1.7;">${issue}</p>
                      </div>

                      <div style="text-align: center; margin-top: 30px;">
                        <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://maitrii.in'}/admin/dashboard?tab=grievance" style="display: inline-block; background: linear-gradient(135deg, #6D3078 0%, #8B4A9C 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 50px; font-size: 14px; font-weight: 600; box-shadow: 0 4px 15px rgba(109, 48, 120, 0.3);">View in Dashboard</a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 40px; text-align: center; border-top: 1px solid #eee;">
                      <p style="color: #888; margin: 0; font-size: 12px;">This is an automated notification from Maitrii Loans Grievance System.</p>
                      <p style="color: #aaa; margin: 8px 0 0 0; font-size: 11px;">© ${new Date().getFullYear()} Mentor Finmart Pvt. Ltd. All rights reserved.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      try {
        await sendEmail(recipientEmail, emailSubject, emailHtml);
      } catch (emailError) {
        console.error("Failed to send grievance email notification:", emailError);
      }
    }

    return NextResponse.json(
      {
        message: "Complaint submitted successfully.",
        complaintId: newComplaintId,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Grievance submission error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
