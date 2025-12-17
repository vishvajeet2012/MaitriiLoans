'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Percent, Calendar, Info, HelpCircle } from 'lucide-react';

const EMICalculatorPage = () => {
    // --- State Management ---
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(10.5);
    const [loanTenure, setLoanTenure] = useState(5);
    const [tenureType, setTenureType] = useState('Years'); // 'Years' or 'Months'

    // --- Calculations ---
    const emiDetails = useMemo(() => {
        const principal = loanAmount;
        const ratePerMonth = interestRate / 12 / 100;
        const months = tenureType === 'Years' ? loanTenure * 12 : loanTenure;

        const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1);
        
        const totalAmount = emi * months;
        const totalInterest = totalAmount - principal;

        return {
            monthlyEMI: Math.round(emi) || 0,
            totalInterest: Math.round(totalInterest) || 0,
            totalPayment: Math.round(totalAmount) || 0,
            principal: principal,
            months: months
        };
    }, [loanAmount, interestRate, loanTenure, tenureType]);

    // --- Formatter ---
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // --- Donut Chart Logic (SVG) ---
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const interestPercentage = (emiDetails.totalInterest / emiDetails.totalPayment) * 100 || 0;
    const safeInterestPercentage = isNaN(interestPercentage) ? 0 : interestPercentage;
    const principalOffset = circumference - ((100 - safeInterestPercentage) / 100) * circumference;

    return (
        <div className="w-full min-h-screen bg-[#F8FAFC] font-sans text-slate-700">
            
            {/* --- Hero Section (White BG + EMI Theme SVGs) --- */}
            <div className="relative w-full h-[500px] overflow-hidden bg-white">
                
                {/* Layer 1: Background Patterns & SVGs */}
                <div className="absolute inset-0 w-full h-full">
                    <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-80">
                        
                        {/* 1. Grid Pattern (Subtle Graph Paper look) */}
                        <defs>
                            <pattern id="gridPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.05"/>
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="1440" height="500" fill="url(#gridPattern)" />

                        {/* 2. Abstract Calculator Keys (Rectangles) */}
                        <rect x="100" y="100" width="60" height="60" rx="12" fill="#F47E4D" opacity="0.1" transform="rotate(-15 130 130)" />
                        <rect x="1200" y="80" width="50" height="50" rx="10" stroke="#6D3078" strokeWidth="2" opacity="0.1" transform="rotate(20 1225 105)" />
                        <rect x="200" y="350" width="40" height="40" rx="8" fill="#6D3078" opacity="0.05" />

                        {/* 3. Mathematical Symbols (+, -, %, =) */}
                        {/* Plus */}
                        <g transform="translate(1300, 350) rotate(15)">
                            <rect x="-15" y="-3" width="30" height="6" fill="#F47E4D" opacity="0.2" />
                            <rect x="-3" y="-15" width="6" height="30" fill="#F47E4D" opacity="0.2" />
                        </g>
                        {/* Percentage */}
                        <text x="300" y="150" fontSize="100" fontWeight="bold" fill="#6D3078" opacity="0.03">%</text>
                        {/* Rupee */}
                        <text x="1100" y="400" fontSize="120" fontWeight="bold" fill="#F47E4D" opacity="0.05">₹</text>

                        {/* 4. Donut Chart Abstract Shapes */}
                        <circle cx="500" cy="400" r="80" stroke="#F47E4D" strokeWidth="20" strokeDasharray="300 200" opacity="0.1" fill="none" />
                        <circle cx="850" cy="100" r="50" stroke="#6D3078" strokeWidth="10" strokeDasharray="100 214" opacity="0.1" fill="none" transform="rotate(-45 850 100)" />

                        {/* 5. Rising Graph Line */}
                        <path d="M0 450 Q 300 400 600 250 T 1440 100" stroke="#6D3078" strokeWidth="2" fill="none" opacity="0.1" strokeDasharray="10 10" />
                        
                        {/* 6. Scattered Dots */}
                        <circle cx="600" cy="200" r="5" fill="#F47E4D" opacity="0.4" />
                        <circle cx="900" cy="300" r="8" fill="#6D3078" opacity="0.3" />
                        <circle cx="150" cy="250" r="4" fill="#000000" opacity="0.2" />
                    </svg>
                </div>

                {/* Layer 2: White Fade Gradient (Bottom to Top) */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#F8FAFC] to-transparent z-0 pointer-events-none"></div>

                {/* Layer 3: Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 pt-10">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 rounded-full bg-[#F47E4D]/10 border border-[#F47E4D] text-[#F47E4D] text-sm font-bold mb-4 backdrop-blur-md"
                    >
                        PLAN YOUR FINANCES
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#6D3078] mb-4"
                    >
                        EMI Calculator
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Calculate your monthly outgo in seconds. Plan your loan repayment with our easy-to-use smart calculator.
                    </motion.p>
                </div>
            </div>

            {/* --- 2. Calculator Section --- */}
            <section className="container mx-auto px-4 md:px-8 max-w-6xl -mt-20 relative z-20 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    
                    {/* --- LEFT SIDE: INPUTS --- */}
                    <div className="lg:col-span-7 p-8 md:p-10 space-y-10">
                        
                        {/* Loan Amount Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-lg font-semibold text-[#6D3078] flex items-center gap-2">
                                    <IndianRupee size={20} className="text-[#F47E4D]" /> Loan Amount
                                </label>
                                    <div className="flex items-center bg-[#F3E8FF] px-3 py-1.5 rounded-lg text-[#6D3078] font-bold w-[120px]">
                                        <span className="mr-1 text-sm">₹</span>
                                        <input
                                            type="number"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                                            className="bg-transparent w-full text-right outline-none appearance-none text-base"
                                        />
                                    </div>
                                </div>
                            <input
                                type="range"
                                min="10000"
                                max="10000000"
                                step="5000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F47E4D]"
                            />
                            <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>₹ 10K</span>
                                <span>₹ 1Cr</span>
                            </div>
                        </div>

                        {/* Interest Rate Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-lg font-semibold text-[#6D3078] flex items-center gap-2">
                                    <Percent size={20} className="text-[#F47E4D]" /> Interest Rate (p.a)
                                </label>
                                    <div className="flex items-center bg-[#F3E8FF] px-3 py-1.5 rounded-lg text-[#6D3078] font-bold w-[90px]">
                                        <input
                                            type="number"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(Number(e.target.value))}
                                            className="bg-transparent w-full text-right outline-none appearance-none text-base"
                                            step="0.1"
                                        />
                                        <span className="ml-1 text-sm">%</span>
                                    </div>
                                </div>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F47E4D]"
                            />
                            <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>1%</span>
                                <span>30%</span>
                            </div>
                        </div>

                        {/* Loan Tenure Slider */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <label className="text-lg font-semibold text-[#6D3078] flex items-center gap-2">
                                    <Calendar size={20} className="text-[#F47E4D]" /> Loan Tenure
                                </label>
                                <div className="flex items-center gap-3">
                                    <div className="flex bg-[#F3E8FF] rounded-lg p-1">
                                        <button 
                                            onClick={() => setTenureType('Years')}
                                            className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${tenureType === 'Years' ? 'bg-[#6D3078] text-white shadow-md' : 'text-[#6D3078] hover:bg-white/50'}`}
                                        >
                                            Yr
                                        </button>
                                        <button 
                                            onClick={() => setTenureType('Months')}
                                            className={`px-4 py-1 rounded-md text-sm font-bold transition-all ${tenureType === 'Months' ? 'bg-[#6D3078] text-white shadow-md' : 'text-[#6D3078] hover:bg-white/50'}`}
                                        >
                                            Mo
                                        </button>
                                    </div>
                                    <input
                                        type="number"
                                        value={loanTenure}
                                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                                        className="bg-[#F3E8FF] px-3 py-1.5 rounded-lg text-[#6D3078] font-bold w-[70px] text-center outline-none text-base"
                                    />
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max={tenureType === 'Years' ? 30 : 360}
                                step="1"
                                value={loanTenure}
                                onChange={(e) => setLoanTenure(Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F47E4D]"
                            />
                            <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>1</span>
                                <span>{tenureType === 'Years' ? 30 : 360}</span>
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT SIDE: RESULTS & CHART --- */}
                    <div className="lg:col-span-5 bg-[#6D3078] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                        
                        {/* Background Decoration */}
                        <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-[#F47E4D] rounded-full opacity-10 blur-3xl"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] bg-[#F47E4D] rounded-full opacity-10 blur-3xl"></div>

                        {/* EMI Result */}
                        <div className="text-center relative z-10">
                            <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Monthly EMI</p>
                            <motion.h3 
                                key={emiDetails.monthlyEMI}
                                initial={{ scale: 0.9, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                            >
                                {formatCurrency(emiDetails.monthlyEMI)}
                            </motion.h3>
                        </div>

                        {/* Chart Area */}
                        <div className="flex flex-col items-center justify-center relative z-10 my-6">
                            <div className="relative w-48 h-48">
                                <svg className="w-full h-full transform -rotate-90">
                                    {/* Background Circle */}
                                    <circle
                                        cx="50%" cy="50%" r={radius}
                                        fill="transparent"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="20"
                                    />
                                    {/* Principal Circle (Purple/White mix) */}
                                    <circle
                                        cx="50%" cy="50%" r={radius}
                                        fill="transparent"
                                        stroke="#FFFFFF"
                                        strokeWidth="20"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={principalOffset} 
                                        strokeLinecap="round"
                                        className="transition-all duration-1000 ease-out"
                                    />
                                    {/* Interest Circle (Orange) */}
                                    <circle
                                        cx="50%" cy="50%" r={radius}
                                        fill="transparent"
                                        stroke="#F47E4D"
                                        strokeWidth="20"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={circumference - ((safeInterestPercentage / 100) * circumference)}
                                        strokeLinecap="round"
                                        className="transition-all duration-1000 ease-out drop-shadow-lg"
                                        style={{ strokeDashoffset: circumference - ((safeInterestPercentage / 100) * circumference) }}
                                    />
                                </svg>
                                {/* Center Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold">{safeInterestPercentage.toFixed(0)}%</span>
                                    <span className="text-xs opacity-70">Interest</span>
                                </div>
                            </div>
                        </div>

                        {/* Summary Details */}
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white"></div>
                                    <span className="text-white/80 text-sm">Principal Amount</span>
                                </div>
                                <span className="font-semibold">{formatCurrency(emiDetails.principal)}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#F47E4D]"></div>
                                    <span className="text-white/80 text-sm">Total Interest</span>
                                </div>
                                <span className="font-semibold text-[#F47E4D]">{formatCurrency(emiDetails.totalInterest)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-white/90 font-medium">Total Payable</span>
                                <span className="font-bold text-xl">{formatCurrency(emiDetails.totalPayment)}</span>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <button className="mt-8 w-full bg-[#F47E4D] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 hover:bg-[#e06d3d] transition-all transform hover:-translate-y-1 active:scale-95">
                            Apply for Loan
                        </button>

                    </div>
                </div>
            </section>

            {/* --- 3. Information Section --- */}
            <section className="container mx-auto px-6 md:px-12 pb-20 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Info Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-[#F47E4D]/10 rounded-full text-[#F47E4D]">
                                <HelpCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#6D3078]">What is EMI?</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
                        </p>
                    </div>

                    {/* Info Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-[#6D3078]/10 rounded-full text-[#6D3078]">
                                <Info size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#6D3078]">How is it calculated?</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            The mathematical formula for calculating EMI is: <br/>
                            <span className="font-semibold text-[#F47E4D]">EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</span>
                            <br/>
                            Where P represents the Loan Amount, R is the interest rate per month, and N is the number of monthly installments.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default EMICalculatorPage;