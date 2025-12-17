'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  LogOut 
} from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const MenuItem = ({ href, icon: Icon, label, active }) => (
  <Link 
    href={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-[#F47E4D] text-white font-medium shadow-md' 
        : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

const Sidebar = ({ user, username }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      router.push('/admin/login');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Base Menu
  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: LayoutDashboard, 
      href: `/admin/dashboard/${username}`,
      show: true 
    },
    { 
      label: 'Users', 
      icon: Users, 
      href: `/admin/dashboard/${username}?tab=users`,
      show: user?.role === 'superadmin' 
    },
    { 
      label: 'Contact Inquiries', 
      icon: MessageSquare, 
      href: `/admin/dashboard/${username}?tab=contact`,
      show: user?.permissions?.includes('contact') || user?.role === 'superadmin' 
    },
    { 
      label: 'Grievances Redressal', 
      icon: Briefcase, 
      href: `/admin/dashboard/${username}?tab=grievance`,
      show: user?.permissions?.includes('grievance') || user?.role === 'superadmin' 
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#6D3078] text-white flex flex-col p-6 z-40">
      {/* Brand */}
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold tracking-tight">Maitrii<span className="text-[#F47E4D]">Admin</span></h1>
        <p className="text-xs text-white/50 mt-1">Loan Management System</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.filter(item => item.show).map((item, index) => (
          <MenuItem 
            key={index} 
            {...item} 
            active={pathname === item.href || (pathname.includes(item.href) && item.label !== 'Dashboard')} 
          />
        ))}
      </nav>

      {/* User & Logout */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-[#F47E4D] flex items-center justify-center text-white font-bold">
                {user?.name?.[0] || 'U'}
            </div>
            <div>
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-white/50 capitalize">{user?.role}</p>
            </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
