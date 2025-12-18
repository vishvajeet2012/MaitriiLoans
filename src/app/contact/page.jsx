'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, MessageSquare, Briefcase, UploadCloud } from 'lucide-react';
  import axios from 'axios';
    import { State, City }  from 'country-state-city';

const ContactUs = () => {
    // Form State
  

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
        pincode: '',
        loanType: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    
    // Derived state for dropdowns
    const states = State.getStatesOfCountry('IN');
    const [cities, setCities] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
        const stateName = e.target.options[e.target.selectedIndex].text;
        setFormData({ ...formData, state: stateName, city: '' });
        setCities(City.getCitiesOfState('IN', stateCode));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await axios.post('/api/contact', formData);
            alert("Thank you! We have received your inquiry and will contact you soon.");
            setFormData({
                name: '', email: '', phone: '', state: '', city: '', pincode: '', loanType: '', message: ''
            });
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-[#F8FAFC] min-h-screen font-sans text-slate-700">
            
            {/* --- Hero Section (White BG + Black/Theme SVGs + Backdrop Blur) --- */}
            <div className="relative w-full h-[500px] overflow-hidden bg-white"> 
                {/* ... (Hero Content same as before) ... */}
                <div className="absolute inset-0 w-full h-full">
                    <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-80">
                         {/* ... (SVG Pattern same as before) ... */}
                         <defs>
                            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="#000000" opacity="0.05"/>
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="1440" height="500" fill="url(#dotPattern)" />
                        <circle cx="50" cy="100" r="30" fill="#F47E4D" opacity="0.1" />
                        <circle cx="150" cy="400" r="50" fill="#6D3078" opacity="0.05" />
                        <circle cx="800" cy="50" r="20" fill="#000000" opacity="0.05" />
                        <circle cx="1300" cy="200" r="80" fill="#6D3078" opacity="0.05" />
                        <circle cx="1100" cy="450" r="40" fill="#F47E4D" opacity="0.1" />
                        <circle cx="300" cy="200" r="40" stroke="#000000" strokeWidth="1" opacity="0.1" />
                        <circle cx="600" cy="350" r="60" stroke="#F47E4D" strokeWidth="2" strokeDasharray="8 8" opacity="0.2" />
                        <circle cx="1200" cy="100" r="25" stroke="#6D3078" strokeWidth="2" opacity="0.1" />
                        <path d="M0 300 Q 200 200 400 300 T 800 300" stroke="#6D3078" strokeWidth="2" fill="none" opacity="0.1" />
                        <path d="M1000 150 Q 1200 250 1440 150" stroke="#F47E4D" strokeWidth="2" fill="none" opacity="0.2" />
                    </svg>
                </div>
                
                {/* Layer 2: White Fade Gradient (Bottom to Top) for smooth transition */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-0 pointer-events-none"></div>

                {/* Layer 3: Content (Text - Dark for White BG) */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 pt-20">
             
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#1E293B] mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Have questions about a loan? We're here to help you achieve your financial goals.
                    </motion.p>
                </div>
            </div>

            {/* --- Main Content Area --- */}
            <div className="container mx-auto px-6 md:px-12 py-16 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- Left Column: Contact Info --- */}
                    <motion.div 
                        className="lg:col-span-5 flex flex-col gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-[#6D3078] mb-6 border-b border-slate-100 pb-4">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Head Office</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mt-1">
                                            11/70 Madhyam Marg, Mansarovar,<br/> Jaipur - 302020
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Phone</h3>
                                        <p className="text-slate-500 text-sm mt-1">+91 8946 800600</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                                        <p className="text-slate-500 text-sm mt-1">info@maitrii.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Column: Enquiry Form --- */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-100">
                            <h2 className="text-3xl font-bold text-[#F47E4D] mb-2">Send us a Message</h2>
                            <p className="text-slate-500 mb-8">Fill in the form below and our team will get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="relative group">
                                        <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none" required />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email */}
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none" />
                                    </div>

                                    {/* State Selector */}
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <select onChange={handleStateChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none appearance-none cursor-pointer" required>
                                            <option value="">Select State</option>
                                            {states.map((state) => (
                                                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* City Selector */}
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <select name="city" value={formData.city} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none appearance-none cursor-pointer" required disabled={!cities.length}>
                                            <option value="">Select City</option>
                                            {cities.map((city) => (
                                                <option key={city.name} value={city.name}>{city.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Pincode */}
                                    <div className="relative group">
                                        <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                        <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} maxLength="6" className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none" required />
                                    </div>
                                </div>

                                {/* Loan Type */}
                                <div className="relative group">
                                    <Briefcase className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                    <select name="loanType" value={formData.loanType} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none appearance-none cursor-pointer">
                                        <option value="" disabled>-- Select Products --</option>
                                        <option value="Personal Loan">Personal Loan</option>
                                        <option value="Business Loan">Business Loan</option>
                                        <option value="Vehicle Loan">Vehicle Loan</option>
                                        <option value="Mortgage Loan">Mortgage Loan</option>
                                        <option value="MSME">MSME</option>
                                    </select>
                                    <div className="absolute right-4 top-4 pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                                    <textarea name="message" rows="4" placeholder="Enter your message" value={formData.message} onChange={handleChange} className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all outline-none resize-none"></textarea>
                                </div>

                                <button type="submit" disabled={submitting} className="w-full bg-[#6D3078] hover:bg-[#5a2565] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                    <span>{submitting ? 'Submitting...' : 'Submit'}</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>

                {/* --- Map Section --- */}
                <motion.div 
                    className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px] md:h-[400px] relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629856586022!2d75.7530104!3d26.8778562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db535cf08eae3%3A0xe6b8a4ff5e9e42b7!2sMentor%20Finmart%20Pvt.%20Ltd.%20(MAITRII%20LOANS)!5e0!3m2!1sen!2sin"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-[#6D3078] pointer-events-none">
                        Mentor Finmart Pvt. Ltd. (Maitrii Loans)
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ContactUs;