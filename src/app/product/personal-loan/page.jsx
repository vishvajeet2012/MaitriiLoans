'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import PersonalLoanHeroGraphic from './PersonalLoanHeroGraphic';
import { UserCheck, MapPin, Banknote, Briefcase, Car } from 'lucide-react';

const PersonalLoan = () => {
    // --- Hero Data ---
    const heroData = {
        title: "BUSINESS & PERSONAL LOAN",
        description: "We provide Personal & Business Loans for a variety of reasons: education, vacations, home renovation, business expansion, or equipment purchase.",
        Graphic: PersonalLoanHeroGraphic
    };

    // --- Info Data ---
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Dreams & Aspirations | Growth & Support",
        title: "BUSINESS & PERSONAL LOAN",
        intro: "\"If you don't have a perfect credit score or the time to wait for a long process, a traditional bank might not be your best option, but we are.\"",
        description: "Whether it's a medical emergency, a wedding, a dream vacation, or expanding your business, Maitrii Loans is here to support you. We offer quick, hassle-free Personal and Business Loans tailored to meet your financial needs without the stress of collateral for personal loans, and flexible options for businesses.",
        faqs: [
            {
                question: "What is a Personal Loan?",
                answer: "A Personal Loan from Maitrii Loans helps you borrow for expenditures of a personal nature - whether you want funds for a medical emergency, higher education, a dream vacation, home renovation, or a wedding in the family. You can avail loans ranging from Rs. 1 Lakh to Rs. 5 Lakh with flexible tenures ranging between 6 months and 3 years."
            },
            {
                question: "What is a Business Loan?",
                answer: "A Business Loan is useful for expanding your business. We extend this loan to existing firms and companies to help them through various phases of expansion, providing funds for inventory, equipment, or working capital. Loans range from Rs. 1 Lakh to Rs. 50 Lakh."
            },
            {
                question: "Do I need to provide any security or collateral?",
                answer: "Personal Loans are generally unsecured and not backed by collateral. Business Loans may vary depending on the scheme and amount, but we offer flexible options for MSME/SMEs."
            },
            {
                question: "Who can apply?",
                answer: "Maitrii Loans provides loans for both self-employed and salaried individuals, as well as proprietors, private limited companies, and partnership firms. Eligibility is based on credit score, age, income stability, and business vintage (at least 2 years for businesses)."
            },
            {
                question: "I have a question regarding something not listed here?",
                answer: "We will be glad to help you with any questions regarding our loans. Please feel free to reach out to our customer support team via our website's contact page for personalized assistance."
            }
        ]
    };

    // --- Documents Data ---
    const documentsData = [
        {
            title: "Photo Identity Proof",
            desc: "Passport, PAN Card, Voter’s Identity Card, Driving License, Aadhaar Card.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address Proof",
            desc: "Ration Card, Passport, Driving License, Bank A/C Statement, Electricity/Telephone Bill, Aadhaar Card, Sale Deed/ Property Purchase Agreement (For Owned Properties).",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income Proof",
            desc: "For Salaried: Last 3-6 months’ bank statement, Latest Salary Slip. For Self-Employed: 2 years’ ITR, P&L and Balance Sheet, Last 6 Months’ Bank Statement.",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Business Proof (For Business Loans)",
            desc: "Qualification Certificate/Certificate Of Practice (COP), Shop Act License/ MOA, AOA/ Sales Tax/ Vat Registration/ Partnership Deed.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Vehicle Proof",
            desc: "Registration Certificate (RC), Vehicle Insurance Certificate, Pollution Under Control (PUC) Certificate, Road Tax Receipt, Chassis Number Imprint.",
            icon: <Car className="w-6 h-6" />
        }
    ];

    return (
        <ProductPageTemplate
            hero={heroData}
            info={infoData}
            documents={documentsData}
        />
    );
};

export default PersonalLoan;
