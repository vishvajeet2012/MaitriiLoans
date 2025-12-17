'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import axios from 'axios';

const DashboardHeader = ({ title = "Overview", toggleSidebar }) => {
    const [notifications, setNotifications] = useState([]);
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        if (!userId) return;

        const fetchNotifications = async () => {
            try {
                const { data } = await axios.get('/api/admin/notifications', {
                    headers: { 'x-user-id': userId }
                });
                setNotifications(data.notifications || []);
            } catch (error) {
                console.error("Notification Fetch Error", error);
            }
        };

        fetchNotifications();
    }, [userId]);

    const handleBellClick = async () => {
        if (notifications.length === 0) return;
        
        // Mark all displayed as read (simple bulk read for demo)
        // Ideally show a dropdown, then click to read.
        // For now, simpler: Click bell -> clears notifications (client side) & marks read (server)
        try {
            const promises = notifications.map(n => 
                axios.post('/api/admin/notifications/mark-read', { notificationId: n._id, userId })
            );
            await Promise.all(promises);
            setNotifications([]); 
            alert(`You have ${notifications.length} new messages:\n` + notifications.map(n => `- ${n.message}`).join('\n'));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <header className="bg-white border-b border-gray-100 h-16 px-8 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleSidebar}
                    className="p-2 lg:hidden text-gray-500 hover:bg-gray-50 rounded-lg"
                >
                    <Menu size={20} />
                </button>
                <h2 className="text-xl font-bold text-gray-800 hidden sm:block">{title}</h2>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#6D3078] w-64 outline-none transition-all"
                    />
                </div>

                <button onClick={handleBellClick} className="relative p-2 text-gray-400 hover:text-[#6D3078] hover:bg-purple-50 rounded-full transition-colors">
                    <Bell size={20} />
                    {notifications.length > 0 && (
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#F47E4D] border-2 border-white rounded-full animate-pulse"></span>
                    )}
                </button>

                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6D3078] to-[#F47E4D] border-2 border-white shadow-md"></div>
            </div>
        </header>
    );
};

export default DashboardHeader;
