'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import WhyChooseUs from '@/components/WhyChooseUs'; 
import { Briefcase, BarChart, FileText, Settings } from 'lucide-react';

const MSMELoanHeroGraphic = () => {
    return (
        <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="250" r="200" fill="#F3E8FF" />
            
            {/* Factory/Business Silhouette */}
            <path d="M180 320V220L230 190L280 220V320H180Z" fill="white" stroke="#6D3078" strokeWidth="3" />
            <path d="M280 320V240L330 210L380 240V320H280Z" fill="white" stroke="#6D3078" strokeWidth="3" />
            <path d="M380 320V260L420 230V320H380Z" fill="white" stroke="#6D3078" strokeWidth="3" />
            
            {/* Windows */}
            <rect x="210" y="240" width="40" height="40" rx="4" fill="#6D3078" opacity="0.1" />
            <rect x="310" y="260" width="40" height="40" rx="4" fill="#6D3078" opacity="0.1" />
            
            {/* Rising Graph Arrow */}
            <path d="M150 350L250 300L320 280L450 150" stroke="#F47E4D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M450 150L410 160V150H450V190L450 150Z" fill="#F47E4D" /> {/* Arrow Head */}

            {/* Coins / Finance Elements */}
            <circle cx="450" cy="150" r="10" fill="#F47E4D" />
            <circle cx="160" cy="180" r="25" fill="#FFFFFF" stroke="#F47E4D" strokeWidth="3" />
            <text x="160" y="188" fontSize="24" textAnchor="middle" fill="#F47E4D" fontWeight="bold">₹</text>

            <circle cx="120" cy="240" r="15" fill="#FFFFFF" stroke="#6D3078" strokeWidth="2" />
            <text x="120" y="246" fontSize="14" textAnchor="middle" fill="#6D3078" fontWeight="bold">%</text>

            {/* Gear/Settings Icon for Industry */}
            <g transform="translate(420, 320)">
                <circle cx="20" cy="20" r="15" stroke="#6D3078" strokeWidth="3" strokeDasharray="4 4" />
                <circle cx="20" cy="20" r="6" fill="#F47E4D" />
            </g>
        </svg>
    )
}

const MSMELoan = () => {
    const heroData = {
        title: "MSME Loan",
        description: "Empowering Micro, Small, and Medium Enterprises with financial solutions designed to boost growth and operational efficiency.",
        Graphic: MSMELoanHeroGraphic
    };

    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Growth & Stability",
        title: "MSME LOAN (Secured & Unsecured)",
        intro: "Fueling the backbone of the economy with tailored solutions.",
        description: "We understand every business is different. That's why we offer two distinct MSME loan products to suit your needs: Unsecured Loans for quick, small-ticket needs (1-5 Lakh) and Secured Loans for larger capital requirements (3-50 Lakh) with longer tenures.",
        faqs: [
            { question: "What are the loan options available?", answer: "We offer two types of MSME loans: 1. Unsecured MSME Loan: ₹1 Lakh to ₹5 Lakh for 1 to 3 years. 2. Secured MSME Loan: ₹3 Lakh to ₹50 Lakh for 2 to 7 years." },
            { question: "What is MSME Secured Loan?", answer: "An MSME Secured Loan is a loan backed by collateral (property or asset). It allows you to avail higher loan amounts (₹3 Lakh to ₹50 Lakh) with longer repayment tenures (up to 7 years) and generally lower interest rates." },
            { question: "What is MSME Unsecured Loan?", answer: "An MSME Unsecured Loan is a loan that does not require any collateral. It is ideal for small, quick funding needs (₹1 Lakh to ₹5 Lakh) with a tenure of up to 3 years, offering faster processing." },
            { question: "What is the CIBIL score requirement?", answer: "A minimum CIBIL score of 620 is required for both secured and unsecured loans (Conditions Apply)." },
            { question: "Is collateral required?", answer: "For Secured Loans (3-50 Lakh), collateral is required. For Unsecured Loans (1-5 Lakh), no collateral is generally needed." },
        ]
    };

    const documentsData = [
         { title: "Registration Proof", desc: "Udyam Registration", icon: <FileText className="w-6 h-6" /> },
         { title: "Financials", desc: "Balance Sheet, P&L", icon: <BarChart className="w-6 h-6" /> },
    ];

    return (
        <ProductPageTemplate hero={heroData} info={infoData} documents={documentsData} whyChooseUs={<WhyChooseUs />} />
    );
};

export default MSMELoan;
