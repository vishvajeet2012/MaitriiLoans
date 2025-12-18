
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  Send,
  User,
  MessageSquare,
  FileText,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import GrievanceHero from "./GrievanceHero";
import Notification from "@/components/Notification";

const GrievancesRedressal = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    loanNumber: "",
    issue: "",
  });

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const closeNotification = () => setNotification({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmittedId(null);
    closeNotification();

    try {
      const response = await fetch("/api/grievance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedId(data.complaintId);
        setNotification({
          message: "Complaint submitted successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          mobile: "",
          email: "",
          loanNumber: "",
          issue: "",
        });
      } else {
        setNotification({
          message: data.message || "Failed to submit complaint.",
          type: "error",
        });
      }
    } catch (error) {
      setNotification({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-50 pb-20">
      <GrievanceHero />
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
      
      <div className="container mx-auto px-4 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Steps 1 & 2 (Compact Timeline) */}
          <div className="lg:col-span-8 space-y-8">
            {/* STEP 1: Registration */}
            <div className="relative">
              {/* Vertical Line Connector down to Step 2 */}
              <div className="hidden lg:block absolute left-8 top-10 bottom-0 w-0.5 bg-slate-200 -z-10"></div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-8 border-[#6D3078] mb-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <span className="bg-[#6D3078] text-white text-xs font-bold px-2 py-1 rounded-full">
                    STEP 1
                  </span>
               Complain Registration
                </h2>
                <p className="text-slate-500 text-xs mt-1 ml-12">
                  Choose any channel to register complaint
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pl-0 lg:pl-16">
                {/* Node 1 */}
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm truncate">
                    Vist Nearest Branch
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-xs truncate">
                      Register Complaint  with branch Manager
                    </p>
                  </div>
                </div>
                {/* Node 2 */}
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm truncate">
                      Call Us
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-bold text-[#6D3078] truncate">
                     +91 8946 800600
                    </p>
                  </div>
                </div>
                {/* Node 3 */}
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all flex gap-3 items-center col-span-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center text-[#6D3078] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="flex justify-between w-full items-center gap-2">
                    <div>
                      <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                        Write Us
                      </h3>
                      <p className="text-slate-500 text-[10px] sm:text-xs truncate">
                        info@maitrii.in
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2: Escalation */}
            <div className="relative pt-8">
              {/* Connector from Step 1 */}
              <div className="hidden lg:block absolute left-8 -top-4 h-12 w-0.5 bg-slate-200 -z-10"></div>
              {/* Internal Timeline */}
              <div className="absolute left-8 lg:left-[34px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#F47E4D] to-slate-300 -z-10 opacity-30"></div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-8 border-[#F47E4D] mb-8 relative z-10">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <span className="bg-[#F47E4D] text-white text-xs font-bold px-2 py-1 rounded-full">
                    STEP 2
                  </span>
                  Escalation
                </h2>
                <p className="text-slate-500 text-xs mt-1 ml-12">
                  Hierarchy for unresolved issues
                </p>
              </div>

              <div className="pl-4 lg:pl-12 space-y-6">
                {/* Level 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-4 w-3 h-3 bg-[#6D3078] rounded-full ring-4 ring-slate-50"></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">
                          Grievance Redressal Officer
                        </h3>
                        <p className="text-sm font-bold text-[#6D3078]">
                          Mr. Utkarsh Goyal
                        </p>
                      </div>
                      <span className="bg-purple-100 text-[#6D3078] text-[10px] font-bold px-2 py-0.5 rounded">
                        Level 1
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex gap-4">
                      <span>+91 77910-77777</span>
                      <span>customercare@skfin.in</span>
                    </div>
                  </div>
                </div>

                {/* Timer */}
                <div className="pl-8 flex items-center gap-2">
                  <Clock size={14} className="text-[#F47E4D]" />
                  <span className="text-xs font-medium text-[#F47E4D]">
                    If u nresolved in 15 days
                  </span>
                  <div className="h-px bg-[#F47E4D]/20 flex-1"></div>
                </div>

                {/* Level 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-4 w-3 h-3 bg-[#F47E4D] rounded-full ring-4 ring-slate-50"></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">
                          Principal Nodal Officer
                        </h3>
                        <p className="text-sm font-bold text-[#6D3078]">
                          Mr. Kanishk Goyal
                        </p>
                      </div>
                      <span className="bg-orange-100 text-[#F47E4D] text-[10px] font-bold px-2 py-0.5 rounded">
                        Level 2
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex gap-4">
                      <span>11/70 Madhyam Marg, Mansarovar,
Jaipur - 302020</span>
                      <span>+91 77920-77777</span>
                    
                    </div>
                  </div>
                </div>

                {/* Timer */}
                <div className="pl-8 flex items-center gap-2">
                  <Clock size={14} className="text-slate-400" />
                  <span className="text-xs font-medium text-slate-500">
                    If unresolved in 1 Month
                  </span>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                {/* Level 3 (RBI) - Full Details */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-4 w-3 h-3 bg-slate-700 rounded-full ring-4 ring-slate-50"></div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border-2 border-slate-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-sm text-[#F47E4D]">
                         
                        </h3>
                        <p className="text-xs text-slate-700 font-bold mt-1">
                    
                        </p>
                        <p className="text-[10px] text-slate-500 leading-tight">
                      
                          <br />
                  
                        </p>
                      </div>
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">
                  Level 3
                      </span>
                    </div>

                    <div className="space-y-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {/* Address */}
                      <div className="flex gap-2.5 items-start">
                        <MapPin
                          size={14}
                          className="text-[#6D3078] shrink-0 mt-0.5"
                        />
                        <p className="text-[10px] text-slate-600 leading-relaxed">
                          <strong>Reserve Bank of India</strong>
                          <br />
                          4th Floor, Sector 17,
                          <br />
                          Chandigarh - 160017
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="flex gap-2.5 items-start">
                        <Phone
                          size={14}
                          className="text-[#6D3078] shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-[10px] text-slate-600 font-bold">
                            Toll Free: 14448
                          </p>
                          <p className="text-[9px] text-slate-400">
                            (9:30 am to 5:15 pm)
                          </p>
                        </div>
                      </div>

                      {/* Portal Link */}
                      <div className="flex gap-2.5 items-center pt-2 border-t border-slate-200">
                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#F47E4D] rounded-full"></div>
                        </div>
                        <a
                          href="/"
                          target="_blank"
                          className="text-[#F47E4D] text-[10px] font-bold hover:underline flex items-center gap-1"
                        >
                          Lodge Complaint on CMS Portal ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Complaint Form (Sticky) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#F47E4D]">
                    Quick Complaint
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Submit your grievance here.
                  </p>
                </div>

                {submittedId ? (
                   <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3"
                 >
                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                     <CheckCircle size={32} />
                   </div>
                   <h3 className="text-lg font-bold text-green-800">Complaint Submitted!</h3>
                   <div className="bg-white p-3 rounded-lg border border-green-100">
                     <p className="text-xs text-slate-500 mb-1">Your Complaint ID</p>
                     <p className="text-xl font-black text-[#6D3078] tracking-wider">{submittedId}</p>
                   </div>
                   <p className="text-xs text-slate-500">
                     Please save this ID to track your complaint status.
                   </p>
                   <button 
                     onClick={() => setSubmittedId(null)}
                     className="text-xs font-bold text-green-700 hover:text-green-800 underline mt-2"
                   >
                     Submit another complaint
                   </button>
                 </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none"
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none"
                      />
                    </div>

                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <input
                        type="text"
                        name="loanNumber"
                        value={formData.loanNumber}
                        onChange={handleChange}
                        placeholder="Loan Number (Optional)"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none"
                      />
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                      <textarea
                        rows="3"
                        name="issue"
                        required
                        value={formData.issue}
                        onChange={handleChange}
                        placeholder="Describe your issue..."
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 rounded-lg text-sm border border-slate-200 focus:border-[#F47E4D] outline-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full bg-[#6D3078] hover:bg-[#5a2565] disabled:opacity-70 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-900/10 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Complaint</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-4 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center">
                  By submitting, you agree to our privacy policy.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GrievancesRedressal;

