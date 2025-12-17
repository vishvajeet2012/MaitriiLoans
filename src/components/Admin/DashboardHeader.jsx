'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Menu, X, ExternalLink, Clock } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const DashboardHeader = ({ title = "Overview", toggleSidebar }) => {
    const router = useRouter();
    const [notifications, setNotifications] = useState([]);
    const [userId, setUserId] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Fetch User ID on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('/api/auth/me');
                if (data.user?._id) {
                    setUserId(data.user._id);
                }
            } catch (e) {
                console.error("User fetch error", e);
            }
        };
        fetchUser();
    }, []);

    // Fetch Notifications with POLLING (every 30 seconds)
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

        // Initial fetch
        fetchNotifications();

        // Poll every 30 seconds for new notifications
        const interval = setInterval(fetchNotifications, 30000);
        
        return () => clearInterval(interval);
    }, [userId]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleBellClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleMarkAsRead = async (notificationId) => {
        try {
            await axios.post('/api/admin/notifications/mark-read', { 
                notificationId, 
                userId 
            });
            setNotifications(prev => prev.filter(n => n._id !== notificationId));
        } catch (e) {
            console.error("Mark read error", e);
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            const promises = notifications.map(n => 
                axios.post('/api/admin/notifications/mark-read', { notificationId: n._id, userId })
            );
            await Promise.all(promises);
            setNotifications([]);
            setShowDropdown(false);
        } catch (e) {
            console.error("Mark all read error", e);
        }
    };

    const handleNotificationClick = async (notification) => {
        await handleMarkAsRead(notification._id);
        if (notification.link) {
            router.push(notification.link);
        }
        setShowDropdown(false);
    };

    const formatTime = (date) => {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
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

                {/* Notification Bell with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button 
                        onClick={handleBellClick} 
                        className="relative p-2 text-gray-400 hover:text-[#6D3078] hover:bg-purple-50 rounded-full transition-colors"
                    >
                        <Bell size={20} />
                        {notifications.length > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 flex items-center justify-center bg-[#F47E4D] text-white text-xs font-bold rounded-full px-1">
                                {notifications.length > 99 ? '99+' : notifications.length}
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {showDropdown && (
                        <div className="absolute right-0 top-12 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#6D3078] to-[#8B4D9B] text-white">
                                <h3 className="font-semibold">Notifications</h3>
                                {notifications.length > 0 && (
                                    <button 
                                        onClick={handleMarkAllAsRead}
                                        className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
                                    >
                                        Mark all read
                                    </button>
                                )}
                            </div>

                            {/* Notification List */}
                            <div className="max-h-80 overflow-y-auto">
                                {notifications.length === 0 ? (
                                    <div className="py-8 text-center text-gray-400">
                                        <Bell size={32} className="mx-auto mb-2 opacity-30" />
                                        <p className="text-sm">No new notifications</p>
                                    </div>
                                ) : (
                                    notifications.map((notification) => (
                                        <div 
                                            key={notification._id}
                                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer group transition-colors"
                                            onClick={() => handleNotificationClick(notification)}
                                        >
                                            {/* Notification Icon */}
                                            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                                                notification.type === 'contact' ? 'bg-blue-500' :
                                                notification.type === 'grievance' ? 'bg-red-500' :
                                                'bg-purple-500'
                                            }`}></div>
                                            
                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-gray-700 line-clamp-2">
                                                    {notification.message}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Clock size={12} className="text-gray-400" />
                                                    <span className="text-xs text-gray-400">
                                                        {formatTime(notification.createdAt)}
                                                    </span>
                                                    {notification.link && (
                                                        <ExternalLink size={12} className="text-gray-400" />
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Dismiss Button */}
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleMarkAsRead(notification._id);
                                                }}
                                                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-all"
                                            >
                                                <X size={14} className="text-gray-400" />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6D3078] to-[#F47E4D] border-2 border-white shadow-md"></div>
            </div>
        </header>
    );
};

export default DashboardHeader;
