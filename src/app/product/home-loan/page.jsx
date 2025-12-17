'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import HomeLoanHeroGraphic from './HomeLoanHeroGraphic';
import WhyChooseUs from '@/components/WhyChooseUs'; // Reusing or creating new if needed
import { Home, Banknote, Briefcase, UserCheck } from 'lucide-react';

const HomeLoan = () => {
    // Hero Data
    const heroData = {
        title: "Home Loan",
        description: "Turn your dream home into reality with our flexible Home Loans. Enjoy competitive interest rates, extended tenures, and quick approval processes tailored to your needs.",
        Graphic: HomeLoanHeroGraphic
    };

    // Info Data
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
        subtitle: "Build Your Dream",
        title: "HOME LOAN",
        intro: "We understand that a home is more than just bricks and mortar; it's a place where memories are made.",
        description: "Our Home Loan solutions are designed to make your journey to being a homeowner smooth and hassle-free. Whether you are buying a ready-to-move-in property, constructing on a plot, or renovating your existing house, we have the right product for you.",
        faqs: [
            { question: "What is the maximum tenure for a Home Loan?", answer: "You can avail of a Home Loan for a tenure of up to 30 years, depending on your age and eligibility." },
            { question: "Can I get a loan for home renovation?", answer: "Yes, we offer loans for home improvement and renovation to help you upgrade your living space." },
            { question: "What are the tax benefits on Home Loans?", answer: "You can claim tax deductions on both the principal repayment (Section 80C) and interest payment (Section 24b) under the Income Tax Act." },
        ]
    };

    // Documents Data
    const documentsData = [
         { title: "Identity Proof", desc: "Aadhaar Card, Pan Card, Voter ID", icon: <UserCheck className="w-6 h-6" /> },
         { title: "Address Proof", desc: "Utility Bill, Passport, Aadhaar", icon: <Home className="w-6 h-6" /> },
         { title: "Income Proof", desc: "Salary Slips, ITR, Bank Statements", icon: <Banknote className="w-6 h-6" /> },
         { title: "Property Documents", desc: "Chain of Title, Sale Agreement", icon: <Briefcase className="w-6 h-6" /> },
    ];

    return (
        <ProductPageTemplate
            hero={heroData}
            info={infoData}
            documents={documentsData}
            whyChooseUs={<WhyChooseUs />} 
        />
    );
};

export default HomeLoan;
