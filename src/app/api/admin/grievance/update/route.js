import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Grievance from "@/models/Grievance";

export async function PATCH(request) {
    try {
        await connectDB();
        
        const { id, status } = await request.json();

        if (!id || !status) {
            return NextResponse.json(
                { error: "Grievance ID and status are required" },
                { status: 400 }
            );
        }

        const validStatuses = ["Pending", "In Progress", "Resolved", "Closed"];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: "Invalid status value" },
                { status: 400 }
            );
        }

        const updatedGrievance = await Grievance.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedGrievance) {
            return NextResponse.json(
                { error: "Grievance not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Status updated successfully",
            grievance: updatedGrievance
        });

    } catch (error) {
        console.error("Error updating grievance status:", error);
        return NextResponse.json(
            { error: "Failed to update status" },
            { status: 500 }
        );
    }
}
