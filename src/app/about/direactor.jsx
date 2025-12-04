"use client";

import React from "react";
import utkarshGoyal from "../../../public/Director1.jpg";
import dummYImage from "../../../public/Director2.jpg";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
    {
        name: "Er. Basant Goyal",
        designation: "Director",
        quote:
            "An engineer graduate from MIT Pune with 25 years of rich & varied experience in the Finance Industry and IT, Mr. Basant Kumar Goyal has enjoyed as Promoter & Whole time director at Genus Overseas Electronics Limited and Mentor Home Loans India Limited. With the commitment to bring Indians a quality Home finance service at reasonable cost & to ensure more rural and semi-urban Indians own their own house, Mr. Goyal started Housing Finance at Mentor Home Loans India Ltd, where he was a Promoter Director. In a span of only 4 years, he is proud to have helped around 15,000 families improve their standard of living across Rajasthan, MP, Gujarat, and Maharashtra. The AUM increased from 300 lacs in 2014 with 4 branches in Rajasthan to 48,000 lacs in Dec 2019 with 48 branches across 4 states. A true believer in the dreams of the common man, Basant's ambition is to provide maximum loans to those who are passionate about their goals.",
        src: utkarshGoyal.src,
    },
    {
        name: "Kanishk Goyal",
        designation: "Director",
        quote: "She is a MA graduate from Aligarh University & founder Director of Mentor Finmart Pvt. Ltd. having rich experience in the field of finance. She actively participates in strategic decisions of the company. She also keeps a keen interest in Education, Social Activity, and Environmental Stability. To fulfill her dream of providing better education to underprivileged children, she has started a CBSE school in the semi-rural area. She is also associated with many NGOs to provide necessary help & create awareness. She runs a Credit Co-operative Society to help the poor & unbanked part of society, helping small communities grow & create a better future. She has an uncanny ability to resolve complex business and social issues.",
        src: dummYImage.src,
    },
];

export default function TeamCarouselSection() {
    return (
        <section className="bg-white py-8 sm:py-12 md:py-10">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
}