'use client';

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, IndianRupee, Briefcase } from 'lucide-react';

// Helper component for animated numbers
const CounterItem = ({ end, label, icon: Icon, color, suffix = "+", prefix = "" }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                animate(count, end, { duration: 2.5, ease: "easeOut" }); 
            }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl hover:bg-black/50 transition-all duration-300 relative overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color}`} />

            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                <Icon size={32} className="text-white relative z-10" />
                 {/* Icon Glow */}
                 <div className={`absolute inset-0 blur-xl opacity-40 ${color}`} />
            </div>

            <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 tracking-tight flex items-baseline">
                {prefix}<motion.span>{rounded}</motion.span><span className="text-2xl md:text-3xl align-top ml-1 text-[#F47E4D]">{suffix}</span>
            </h3>
            
            <p className="text-slate-300 font-medium tracking-widest uppercase text-xs md:text-sm border-t border-white/10 pt-4 mt-2 w-full text-center group-hover:text-white transition-colors">
                {label}
            </p>
        </motion.div>
    );
};

export default function YourNextFinanclegoal() {
    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
            
            {/* Background Image Section */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay matching OurProduct */}
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-24">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                     <h1  className="text-2xl md:text-5xl text-center text-white mb-10 max-w-4xl mx-auto leading-tight drop-shadow-lg uppercase tracking-wider">
                        Your Next Financial Goal
                    </h1>
                    <p className="text-center text-white  mb-20 max-w-3xl mx-auto leading-relaxed ">
                        Single destination for multiple financial needs. We empower your dreams with fast and secure funding.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    
                    <CounterItem 
                        end={1500}
                        label="Customers Empowered" 
                        icon={Users} 
                        color="from-orange-500 to-red-500"
                    />

                    <CounterItem 
                        end={12}
                        suffix="Cr+"
                        label="Loans Disbursed" 
                        icon={IndianRupee} 
                        color="from-purple-500 to-pink-500"
                    />

                    <CounterItem 
                        end={7} 
                        label="Products Offered" 
                        icon={Briefcase} 
                        color="from-blue-400 to-indigo-500"
                    />

                </div>
            </div>
        </div>
    );
}