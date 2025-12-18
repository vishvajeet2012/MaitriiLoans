
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  Calendar,
  Filter,
  Eye,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Clock,
  Inbox,
  X,
  User,
  Phone,
  Mail,
  FileText,
  CreditCard

} from "lucide-react";
import Loading from "@/components/Admin/Loading";
import { format } from "date-fns";

const GrievanceManager = () => {
    const [stats, setStats] = useState({
        today: 0,
        yesterday: 0,
        thisMonth: 0,
        total: 0
    });
    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        search: "",
        startDate: "",
        endDate: ""
    });
    const [pagination, setPagination] = useState({
        page: 1,
        pages: 1,
        total: 0
    });
    const [selectedGrievance, setSelectedGrievance] = useState(null);
    const [updating, setUpdating] = useState(false);

    const handleStatusUpdate = async (newStatus) => {
        if (!selectedGrievance || updating) return;
        
        setUpdating(true);
        try {
            const res = await axios.patch("/api/admin/grievance/update", {
                id: selectedGrievance._id,
                status: newStatus
            });
            
            // Update the selected grievance with new status
            setSelectedGrievance({ ...selectedGrievance, status: newStatus });
            
            // Update the grievance in the list
            setGrievances(prev => 
                prev.map(g => g._id === selectedGrievance._id ? { ...g, status: newStatus } : g)
            );
            
            // Refresh stats
            const statsRes = await axios.get("/api/admin/grievance/stats");
            setStats(statsRes.data);
            
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        } finally {
            setUpdating(false);
        }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const statsRes = await axios.get("/api/admin/grievance/stats");
            setStats(statsRes.data);

            const queryParams = new URLSearchParams({
                page: pagination.page,
                limit: 10,
                ...filters
            }).toString();

            const listRes = await axios.get(`/api/admin/grievance/all?${queryParams}`);
            setGrievances(listRes.data.grievances);
            setPagination(listRes.data.pagination);

        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [pagination.page, filters]); 

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
        setPagination({ ...pagination, page: 1 }); 
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Resolved": return "bg-green-100 text-green-700 border-green-200";
            case "Closed": return "bg-gray-100 text-gray-700 border-gray-200";
            default: return "bg-slate-100 text-slate-700 border-slate-200";
        }
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Complaints" 
                    value={stats.total} 
                    icon={<Inbox size={24} />} 
                    color="bg-purple-100 text-[#6D3078]" 
                />
                <StatCard 
                    title="Today's Complaints" 
                    value={stats.today} 
                    icon={<AlertCircle size={24} />} 
                    color="bg-orange-100 text-[#F47E4D]" 
                />
                <StatCard 
                    title="Yesterday" 
                    value={stats.yesterday} 
                    icon={<Clock size={24} />} 
                    color="bg-blue-100 text-blue-600" 
                />
                <StatCard 
                    title="This Month" 
                    value={stats.thisMonth} 
                    icon={<Calendar size={24} />} 
                    color="bg-green-100 text-green-600" 
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Grievance List</h3>
                    
                    <div className="flex flex-wrap gap-3 items-center">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input 
                                type="text"
                                name="search"
                                value={filters.search}
                                onChange={handleFilterChange}
                                placeholder="Search Name, Email, ID..."
                                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#6D3078]"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                             <input 
                                type="date"
                                name="startDate"
                                value={filters.startDate}
                                onChange={handleFilterChange}
                                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#6D3078]"
                            />
                            <span className="text-gray-400">-</span>
                             <input 
                                type="date"
                                name="endDate"
                                value={filters.endDate}
                                onChange={handleFilterChange}
                                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#6D3078]"
                            />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="p-12"><Loading /></div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Complaint ID</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Date</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Customer</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Mobile</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                                    <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {grievances.length > 0 ? (
                                    grievances.map((item) => (
                                        <tr key={item._id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 text-sm font-bold text-[#6D3078]">
                                                {item.complaintId || "N/A"}
                                            </td>
                                            <td className="p-4 text-sm text-gray-600">
                                                {format(new Date(item.createdAt), "dd MMM yyyy")}
                                            </td>
                                            <td className="p-4">
                                                <div className="text-sm font-bold text-gray-800">{item.name}</div>
                                                <div className="text-xs text-gray-500">{item.email}</div>
                                            </td>
                                            <td className="p-4 text-sm text-gray-600">{item.mobile}</td>
                                            <td className="p-4">
                                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button 
                                                    onClick={() => setSelectedGrievance(item)}
                                                    className="p-2 hover:bg-purple-50 text-[#6D3078] rounded-lg transition-colors"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="p-8 text-center text-gray-400 text-sm">
                                            No grievances found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {pagination.pages > 1 && (
                    <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                        <p className="text-xs text-gray-500">
                            Page {pagination.page} of {pagination.pages}
                        </p>
                        <div className="flex gap-2">
                             <button 
                                disabled={pagination.page === 1}
                                onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                                className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button 
                                disabled={pagination.page === pagination.pages}
                                onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                                className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Details Modal */}
            {selectedGrievance && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Complaint Details</h3>
                                <p className="text-xs text-[#6D3078] font-bold">{selectedGrievance.complaintId}</p>
                            </div>
                            <button onClick={() => setSelectedGrievance(null)} className="p-2 hover:bg-gray-200 rounded-full">
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078]">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{selectedGrievance.name}</h4>
                                    <p className="text-xs text-gray-500">Customer</p>
                                </div>
                                <div className="ml-auto text-right">
                                     <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${getStatusColor(selectedGrievance.status)}`}>
                                        {selectedGrievance.status}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Phone size={16} className="text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500">Mobile</p>
                                        <p className="text-sm font-medium text-gray-800">{selectedGrievance.mobile}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={16} className="text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-sm font-medium text-gray-800 break-all">{selectedGrievance.email}</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                    <CreditCard size={16} className="text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500">Loan Number</p>
                                        <p className="text-sm font-medium text-gray-800">{selectedGrievance.loanNumber || "N/A"}</p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-3">
                                    <Calendar size={16} className="text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500">Date</p>
                                        <p className="text-sm font-medium text-gray-800">{format(new Date(selectedGrievance.createdAt), "dd MMM yyyy, hh:mm a")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-start gap-3">
                                    <FileText size={16} className="text-gray-400 mt-0.5" />
                                    <div className="w-full">
                                        <p className="text-xs text-gray-500 mb-1">Issue Description</p>
                                        <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            {selectedGrievance.issue}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Status Update Section */}
                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-xs text-gray-500 mb-2">Update Status</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Pending", "In Progress", "Resolved", "Closed"].map((status) => (
                                        <button
                                            key={status}
                                            onClick={() => handleStatusUpdate(status)}
                                            disabled={updating || selectedGrievance.status === status}
                                            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all
                                                ${selectedGrievance.status === status 
                                                    ? "bg-[#6D3078] text-white border-[#6D3078] cursor-default" 
                                                    : "bg-white text-gray-700 border-gray-200 hover:border-[#6D3078] hover:text-[#6D3078]"
                                                }
                                                ${updating ? "opacity-50 cursor-not-allowed" : ""}
                                            `}
                                        >
                                            {updating && selectedGrievance.status !== status ? "..." : status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className={`p-3 rounded-lg ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <h4 className="text-2xl font-bold text-gray-800">{value}</h4>
        </div>
    </div>
);

export default GrievanceManager;

