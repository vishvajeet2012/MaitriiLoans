'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Link2, Save, ToggleLeft, ToggleRight } from 'lucide-react';
import axios from 'axios';

const PolicyManager = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: 'Policy Update',
        type: 'link',
        url: '',
        isEnabled: false
    });

    useEffect(() => {
        fetchPolicy();
    }, []);

    const fetchPolicy = async () => {
        try {
            const { data } = await axios.get('/api/admin/policy-update');
            if (data.policy) {
                setFormData({
                    title: data.policy.title || 'Policy Update',
                    type: data.policy.type || 'link',
                    url: data.policy.url || '',
                    isEnabled: data.policy.isEnabled || false
                });
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await axios.post('/api/admin/policy-update', formData);
            alert('Policy updated successfully!');
        } catch (error) {
            alert('Failed to update policy');
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-slate-500">Loading...</div>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#6D3078] to-[#F47E4D] p-6">
                    <h2 className="text-xl font-bold text-white">Policy Update Notification</h2>
                    <p className="text-white/70 text-sm mt-1">Manage the notification shown to all users</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Enable Toggle */}
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                            <h3 className="font-bold text-slate-800">Enable Notification</h3>
                            <p className="text-xs text-slate-500">Toggle to show/hide from users</p>
                        </div>
                        <button 
                            type="button"
                            onClick={() => setFormData({ ...formData, isEnabled: !formData.isEnabled })}
                            className={`p-2 rounded-lg transition-colors ${formData.isEnabled ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-500'}`}
                        >
                            {formData.isEnabled ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                        </button>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="e.g. New Policy Update"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                        />
                    </div>

                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'link' })}
                                className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                    formData.type === 'link' 
                                        ? 'border-[#6D3078] bg-purple-50 text-[#6D3078]' 
                                        : 'border-slate-200 text-slate-500'
                                }`}
                            >
                                <Link2 size={20} />
                                <span className="font-medium">Web Link</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, type: 'pdf' })}
                                className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                    formData.type === 'pdf' 
                                        ? 'border-[#F47E4D] bg-orange-50 text-[#F47E4D]' 
                                        : 'border-slate-200 text-slate-500'
                                }`}
                            >
                                <FileText size={20} />
                                <span className="font-medium">PDF Download</span>
                            </button>
                        </div>
                    </div>

                    {/* URL */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            {formData.type === 'pdf' ? 'PDF URL' : 'Page Link'}
                        </label>
                        <input
                            type="url"
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            placeholder={formData.type === 'pdf' ? 'https://example.com/policy.pdf' : 'https://example.com/policy-page'}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                            required
                        />
                        <p className="text-xs text-slate-400 mt-2">
                            {formData.type === 'pdf' 
                                ? 'Users will download this PDF when clicking the notification.' 
                                : 'Users will be redirected to this page when clicking the notification.'}
                        </p>
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        disabled={saving}
                        className="w-full bg-[#6D3078] hover:bg-[#5a2565] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                    >
                        <Save size={18} />
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PolicyManager;
