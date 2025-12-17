'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';

const ContactManager = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const { data } = await axios.get('/api/admin/contact');
                setContacts(data.contacts);
            } catch (error) {
                console.error("Failed to fetch contacts");
            } finally {
               setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    if (loading) return <div className="p-6 text-gray-500">Loading inquiries...</div>;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-[#6D3078]">Contact Inquiries</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">User Details</th>
                            <th className="px-6 py-4 font-medium">Interest</th>
                            <th className="px-6 py-4 font-medium">Message</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {contacts.map((contact) => (
                            <tr key={contact._id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">{contact.name}</div>
                                    <div className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                                        <Mail size={10} /> {contact.email || 'N/A'}
                                    </div>
                                    <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                                        <Phone size={10} /> {contact.phone}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-purple-50 text-[#6D3078] rounded text-xs font-medium border border-purple-100">
                                        {contact.loanType}
                                    </span>
                                    <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                                         <MapPin size={10} /> {contact.city}, {contact.state} - {contact.pincode}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={contact.message}>
                                    {contact.message}
                                </td>
                                <td className="px-6 py-4 text-gray-400 text-xs">
                                     {new Date(contact.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                        {contacts.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-gray-400">
                                    No inquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactManager;
