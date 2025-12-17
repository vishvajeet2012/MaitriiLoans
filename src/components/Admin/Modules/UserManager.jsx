'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit2, Trash2, Check, X, Shield, ShieldAlert } from 'lucide-react';
import Notification from '@/components/Notification';

const UserManager = ({ currentUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState({ message: '', type: '' });
    
    // Edit Modal State
    const [editingUser, setEditingUser] = useState(null);
    const [permissions, setPermissions] = useState({
        contact: false,
        grievance: false
    });
    const [selectedRole, setSelectedRole] = useState('user');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('/api/admin/users');
            setUsers(data.users);
        } catch (error) {
            console.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this user?")) return;
        try {
            await axios.delete(`/api/admin/users/${id}`);
            setUsers(users.filter(u => u._id !== id));
            setNotification({ message: 'User deleted successfully', type: 'success' });
        } catch (error) {
            setNotification({ message: 'Failed to delete user', type: 'error' });
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setSelectedRole(user.role);
        setPermissions({
            contact: user.permissions?.includes('contact') || false,
            grievance: user.permissions?.includes('grievance') || false
        });
    };

    const handleSave = async () => {
        if (!editingUser) return;
        
        if (!confirm(`Are you sure you want to update permissions for ${editingUser.name}?`)) return;

        const newPermissions = Object.keys(permissions).filter(key => permissions[key]);

        try {
            const { data } = await axios.put(`/api/admin/users/${editingUser._id}`, {
                role: selectedRole,
                permissions: newPermissions
            });
            
            setUsers(users.map(u => u._id === editingUser._id ? data.user : u));
            setNotification({ message: 'User updated successfully', type: 'success' });
            setEditingUser(null);
        } catch (error) {
            setNotification({ message: 'Failed to update user', type: 'error' });
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Notification 
                message={notification.message} 
                type={notification.type} 
                onClose={() => setNotification({ message: '', type: '' })} 
            />

            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#6D3078]">User Management</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">Name</th>
                            <th className="px-6 py-4 font-medium">Username</th>
                            <th className="px-6 py-4 font-medium">Role</th>
                            <th className="px-6 py-4 font-medium">Permissions</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user._id} className={`hover:bg-gray-50/50 ${currentUser?._id === user._id ? 'bg-purple-50/50' : ''}`}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="font-medium text-gray-900">{user.name}</div>
                                        {currentUser?._id === user._id && (
                                            <span className="px-2 py-0.5 bg-[#6D3078] text-white text-[10px] rounded-full uppercase tracking-wider font-bold">You</span>
                                        )}
                                    </div>
                                    <div className="text-gray-400 text-xs">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">@{user.username}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        user.role === 'superadmin' ? 'bg-purple-100 text-[#6D3078]' : 
                                        user.role === 'admin' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {user.role === 'superadmin' && <ShieldAlert size={12} />}
                                        {user.role === 'admin' && <Shield size={12} />}
                                        {user.role.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {user.permissions?.map(p => (
                                            <span key={p} className="px-2 py-0.5 bg-orange-50 text-[#F47E4D] border border-orange-100 rounded text-xs">
                                                {p}
                                            </span>
                                        ))}
                                        {(!user.permissions || user.permissions.length === 0) && <span className="text-gray-400 text-xs">-</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {user.isVerified ? (
                                        <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs flex w-fit items-center gap-1"><Check size={12}/> Verified</span>
                                    ) : (
                                        <span className="text-yellow-600 bg-yellow-50 px-2 py-1 rounded text-xs flex w-fit items-center gap-1">Pending</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button 
                                            onClick={() => handleEditClick(user)} 
                                            className="p-1.5 text-gray-400 hover:text-[#6D3078] hover:bg-purple-50 rounded transition-colors"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        {user.role !== 'superadmin' && (
                                            <button 
                                                onClick={() => handleDelete(user._id)}
                                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {editingUser && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">Edit Permissions</h3>
                            <button onClick={() => setEditingUser(null)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                <select 
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6D3078] outline-none"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="superadmin">Super Admin</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Module Access</label>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input 
                                            type="checkbox"
                                            checked={permissions.contact}
                                            onChange={(e) => setPermissions({...permissions, contact: e.target.checked})}
                                            className="w-4 h-4 text-[#6D3078] rounded focus:ring-[#6D3078]"
                                        />
                                        <div>
                                            <span className="font-medium text-gray-900 block">Contact Inquiries</span>
                                            <span className="text-xs text-gray-500">View and manage contact messages</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input 
                                            type="checkbox"
                                            checked={permissions.grievance}
                                            onChange={(e) => setPermissions({...permissions, grievance: e.target.checked})}
                                            className="w-4 h-4 text-[#6D3078] rounded focus:ring-[#6D3078]"
                                        />
                                        <div>
                                            <span className="font-medium text-gray-900 block">Grievances Redressal</span>
                                            <span className="text-xs text-gray-500">Manage user complaints</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                            <button 
                                onClick={() => setEditingUser(null)}
                                className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSave}
                                className="px-4 py-2 bg-[#6D3078] text-white font-medium rounded-lg hover:bg-[#5a2763] transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManager;
