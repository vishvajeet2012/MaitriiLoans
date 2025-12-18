'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Bell, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const FloatingContact = () => {
    const contactNumber = "+918946800600"; 
    const locationUrl = "https://www.google.com/maps/place/Mentor+Finmart+Pvt.+Ltd.+(MAITRII+LOANS)/@26.877861,75.7504355,17z/data=!4m16!1m9!3m8!1s0x396db535cf08eae3:0xe6b8a4ff5e9e42b7!2sMentor+Finmart+Pvt.+Ltd.+(MAITRII+LOANS)!8m2!3d26.8778562!4d75.7530104!9m1!1b1!16s%2Fg%2F11h3ldm3nk"; 

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
        
        if (policyUpdate.hasPdf || policyUpdate.type === 'pdf') {
            // Download PDF via API
            window.open('/api/policy-update/download', '_blank');
        } else if (policyUpdate.url) {
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

            {/* Location */}
            <motion.a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-[#EA4335] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#c5362b] transition-colors duration-300"
                title="Find Us"
            >
                <MapPin className="w-6 h-6" />
            </motion.a>
        </div>
    );
};

export default FloatingContact;

