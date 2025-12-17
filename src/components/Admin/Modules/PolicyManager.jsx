'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, Link2, Save, ToggleLeft, ToggleRight, Upload, Calendar, AlertTriangle } from 'lucide-react';
import axios from 'axios';

const PolicyManager = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);
    
    const [formData, setFormData] = useState({
        title: 'Policy Update',
        type: 'link',
        url: '',
        isEnabled: false,
        expiryDate: ''
    });
    const [isExpired, setIsExpired] = useState(false);

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
                    isEnabled: data.policy.isEnabled || false,
                    expiryDate: data.policy.expiryDate ? new Date(data.policy.expiryDate).toISOString().split('T')[0] : ''
                });
                setFileName(data.policy.pdfName || '');
                setIsExpired(data.policy.isExpired || false);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (4MB max)
        if (file.size > 4 * 1024 * 1024) {
            alert('File size must be less than 4MB. Please compress the PDF first.');
            return;
        }

        if (file.type !== 'application/pdf') {
            alert('Only PDF files are allowed.');
            return;
        }

        setSelectedFile(file);
        setFileName(file.name);
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // Remove data:application/pdf;base64, prefix
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            let payload = {
                title: formData.title,
                type: formData.type,
                isEnabled: formData.isEnabled,
                expiryDate: formData.expiryDate || null
            };

            if (formData.type === 'pdf') {
                if (selectedFile) {
                    const pdfData = await fileToBase64(selectedFile);
                    payload.pdfData = pdfData;
                    payload.pdfName = selectedFile.name;
                } else if (!fileName) {
                    alert('Please select a PDF file');
                    setSaving(false);
                    return;
                }
                // If no new file but fileName exists, keep existing PDF
            } else {
                payload.url = formData.url;
            }

            await axios.post('/api/admin/policy-update', payload);
            alert('Policy updated successfully!');
            setSelectedFile(null);
            fetchPolicy(); // Refresh
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
                <div className="bg-gradient-to-r from-[#6D3078] to-[#F47E4D] p-6 relative">
                    <h2 className="text-xl font-bold text-white">Policy Update Notification</h2>
                    <p className="text-white/70 text-sm mt-1">Manage the notification shown to all users</p>
                    {isExpired && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <AlertTriangle size={14} />
                            EXPIRED
                        </div>
                    )}
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

                    {/* Expiry Date */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                            <Calendar size={16} />
                            Expiry Date
                        </label>
                        <input
                            type="date"
                            value={formData.expiryDate}
                            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                        />
                        <p className="text-xs text-slate-400 mt-1">Notification will hide from users after this date</p>
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
                                onClick={() => setFormData({ ...formData, type: 'pdf' })}
                                className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                    formData.type === 'pdf' 
                                        ? 'border-[#F47E4D] bg-orange-50 text-[#F47E4D]' 
                                        : 'border-slate-200 text-slate-500'
                                }`}
                            >
                                <FileText size={20} />
                                <span className="font-medium">Upload PDF</span>
                            </button>
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
                                <span className="font-medium">Page Link</span>
                            </button>
                        </div>
                    </div>

                    {/* Conditional Input */}
                    {formData.type === 'pdf' ? (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">PDF File (Max 4MB)</label>
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full p-6 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-[#F47E4D] transition-colors text-center"
                            >
                                <Upload size={32} className="mx-auto text-slate-400 mb-2" />
                                {fileName ? (
                                    <p className="text-sm text-[#F47E4D] font-medium">{fileName}</p>
                                ) : (
                                    <p className="text-sm text-slate-500">Click to select PDF</p>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Page Link</label>
                            <input
                                type="url"
                                value={formData.url}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                placeholder="https://example.com/policy-page"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6D3078] outline-none"
                            />
                        </div>
                    )}

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
