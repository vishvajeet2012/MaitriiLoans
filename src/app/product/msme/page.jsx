'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import WhyChooseUs from '@/components/WhyChooseUs'; 
import { Briefcase, BarChart, FileText, Settings } from 'lucide-react';

const MSMELoanHeroGraphic = () => {
    return (
        <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="250" r="180" fill="#F3E8FF" />
            <g transform="translate(180, 150)">
                 <rect x="0" y="40" width="80" height="120" fill="white" stroke="#6D3078" strokeWidth="2" />
                 <rect x="90" y="0" width="120" height="160" fill="white" stroke="#F47E4D" strokeWidth="2" />
                 <rect x="220" y="60" width="60" height="100" fill="white" stroke="#6D3078" strokeWidth="2" />
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
