'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const FloatingContact = () => {
    const whatsappNumber = "0987654321"; 
    const contactNumber = "0987654321"; 

    const [policyUpdate, setPolicyUpdate] = useState(null);

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const { data } = await axios.get('/api/policy-update');
                if (data.policy) {
                    setPolicyUpdate(data.policy);
                }
            } catch (error) {
                console.error("Policy fetch error:", error);
            }
        };
        fetchPolicy();
    }, []);

    const handlePolicyClick = () => {
        if (!policyUpdate) return;
        
        if (policyUpdate.type === 'pdf') {
            // Download PDF
            const link = document.createElement('a');
            link.href = policyUpdate.url;
            link.download = policyUpdate.title || 'policy.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Open link in new tab
            window.open(policyUpdate.url, '_blank');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            
            {/* Policy Update Notification Bell */}
            <AnimatePresence>
                {policyUpdate && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePolicyClick}
                        className="w-14 h-14 bg-[#F47E4D] text-white rounded-full shadow-lg flex items-center justify-center relative"
                        title={policyUpdate.title}
                    >
                        <Bell className="w-6 h-6" />
                        {/* Pulse indicator */}
                        <span className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
                        <span className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Phone */}
            <motion.a
                href={`tel:${contactNumber}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white text-[#6D3078] rounded-full shadow-lg flex items-center justify-center border-2 border-[#6D3078] hover:bg-[#6D3078] hover:text-white transition-colors duration-300"
                title="Call Us"
            >
                <Phone className="w-6 h-6" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1faa53] transition-colors duration-300"
                title="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </motion.a>
        </div>
    );
};

export default FloatingContact;

