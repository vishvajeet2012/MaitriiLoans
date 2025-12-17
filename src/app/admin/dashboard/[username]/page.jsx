'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import DashboardLayout from '@/components/Admin/DashboardLayout';
import ContactManager from '@/components/Admin/Modules/ContactManager';
import GrievanceManager from '@/components/Admin/Modules/GrievanceManager';
import UserManager from '@/components/Admin/Modules/UserManager';
import PolicyManager from '@/components/Admin/Modules/PolicyManager';
import { Activity, Users, Clock, AlertCircle } from 'lucide-react';
import Loading from '@/components/Admin/Loading';

const DashboardHome = ({ user }) => (
    <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-purple-100 text-[#6D3078] rounded-lg">
                    <Users size={24} />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Total Users</p>
                    <h4 className="text-2xl font-bold">1,245</h4>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-orange-100 text-[#F47E4D] rounded-lg">
                    <Activity size={24} />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Active Loans</p>
                    <h4 className="text-2xl font-bold">384</h4>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Clock size={24} />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Pending</p>
                    <h4 className="text-2xl font-bold">56</h4>
                </div>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                     <AlertCircle size={24} />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Alerts</p>
                    <h4 className="text-2xl font-bold">12</h4>
                </div>
            </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Welcome back, {user?.name}!</h3>
            <p className="text-gray-600">
                You are logged in as <span className="font-semibold text-[#6D3078]">{user?.role}</span>. 
                Use the sidebar to navigate through your permitted modules.
            </p>
        </div>
    </div>
);


const DashboardPage = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await axios.get('/api/auth/me');
                setUser(data.user);
                
             
            } catch (error) {
                router.push('/admin/login');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [router, params.username]);

    if (loading) return <Loading />;

    if (!user) return null;

    // Render Content based on Tab
    let content;
    switch(tab) {
        case 'contact':
            content = <ContactManager />;
            break;
        case 'grievance':
            content = <GrievanceManager />;
            break;
        case 'users':
             content = <UserManager currentUser={user} />; 
            break;
        case 'policy':
            // Only superadmin can access
            content = user.role === 'superadmin' ? <PolicyManager /> : <DashboardHome user={user} />;
            break;
        default:
            content = <DashboardHome user={user} />;
    }

    // Dynamic Title based on Tab
    const title = tab ? tab.charAt(0).toUpperCase() + tab.slice(1) : 'Overview';

    return (
        <DashboardLayout user={user} username={user.username} title={title}>
            {content}
        </DashboardLayout>
    );
};

export default DashboardPage;
