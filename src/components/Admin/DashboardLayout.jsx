'use client';

import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = ({ children, user, username, title = "Dashboard" }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar user={user} username={username} />
      
      <main className="flex-1 ml-64 flex flex-col">
        <DashboardHeader title={title} />
        <div className="flex-1 p-8 overflow-y-auto">
            {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
