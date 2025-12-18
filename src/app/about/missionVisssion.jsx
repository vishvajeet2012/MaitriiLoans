"use client";
import React, { useState } from "react";
import { Target, Eye, Heart } from 'lucide-react';

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-2xl relative bg-gradient-to-br from-white to-gray-50 overflow-hidden h-full w-full transition-all duration-300 ease-out shadow-lg hover:shadow-2xl",
                hovered !== null && hovered !== index && "blur-sm scale-95"
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6D3078]/10 via-[#6D3078]/20 to-[#F47E4D]/20" />
            <div className="relative h-full p-8 flex flex-col items-center text-center">
                <div className={cn(
                    "mb-6 rounded-full p-4 transition-all duration-300 transform hover:scale-110",
                    card.gradient
                )}>
                    {card.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#6D3078]">
                    {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {card.description}
                </p>
            </div>
        </div>
    )
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}

const MissionVision = () => {
    const cards = [
        {
            title: "Our Mission",
            description:
                "We are committed to delivering reliable, transparent, and customer-centric financial solutions that support the growth of MSMEs and uplift the financially excluded, ensuring everyone has access to fair and reasonable financial opportunities.",
            icon: <Target className="h-10 w-10 text-[#6D3078]" />,
            gradient: "bg-gradient-to-br from-[#6D3078]/10 to-[#6D3078]/20"
        },
        {
            title: "Core Values",
            description: " Our core values guide us daily. We listen and respond with empathy and care. Integrity demands honesty and transparency. Innovation drives continuous improvement. Inclusivity serves the underserved with equal opportunity. Excellence ensures the highest standards in service and support.",
            icon: <Heart className="h-10 w-10 text-[#8B4789]" />,
            gradient: "bg-gradient-to-br from-[#8B4789]/10 to-[#B55F83]/20"
        },
        {
            title: "Our Vision",
            description: "To be the most trusted and innovative financial partner, empowering entrepreneurs and communities across India by making finance accessible, affordable, and empowering",
            icon: <Eye className="h-10 w-10 text-[#F47E4D]" />,
            gradient: "bg-gradient-to-br from-[#F47E4D]/10 to-[#F47E4D]/20"
        },
    ];

    return (
        <section className="w-full bg-gradient-to-r from-[#6D3078]/5 via-white to-[#F47E4D]/5 py-20 px-4 md:px-8">
            <div className="container mx-auto">
                <FocusCards cards={cards} />
            </div>
        </section>
    );
};

export default MissionVision;