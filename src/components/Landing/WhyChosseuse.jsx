"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const businessLinesData = [
  {
    name: "Fast Approvals 🚀",
    href: "#",
    data: [
      {
        paragraph: "In-principle sanction within 24-48 hours.",
        ul: [
          "Instant eligibility check",
          "Digital KYC & document upload",
          "Dedicated loan officer assigned",
          "Quick credit appraisal process"
        ]
      }
    ],
    imageAlt: "Fast loan approvals",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    name: "Easy Experience",
    href: "#",
    data: [
      {
        paragraph: "100% digital journey with doorstep support.",
        ul: [
          "No branch visits needed",
          "Free doorstep document collection",
          "Live application tracking",
          "24x7 customer support"
        ]
      }
    ],
    imageAlt: "Easy loan experience",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
  {
    name: "Minimum Documentation",
    href: "#",
    data: [
      {
        paragraph: "Simple documents, maximum approval chances.",
        ul: [
          "Only KYC + Income proof + Property docs",
          "ITR not mandatory in most cases",
          "12+ income proof options accepted",
          "Flexible co-applicant rules"
        ]
      }
    ],
    imageAlt: "Minimum documentation required",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    name: "Competitive Interest Rates",
    href: "#",
    data: [
      {
        paragraph: "Starting @ just 8.50%* p.a.",
        ul: [
          "Lowest rates based on profile",
          "Special rates for women applicants",
          "Balance transfer with rate reduction",
          "Zero foreclosure after 36 months"
        ]
      }
    ],
    imageAlt: "Competitive interest rates",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80",
  },
  {
    name: "Flexibility in Loan Products",
    href: "#",
    data: [
      {
        paragraph: "Home Loan, LAP, Plot Loan & Top-up – all in one place.",
        ul: [
          "Loan against residential & commercial property",
          "Plot purchase + construction loans",
          "Top-up on existing loans",
          "Overdraft facility available"
        ]
      }
    ],
    imageAlt: "Flexible loan products",
    imageUrl: "https://images.unsplash.com/photo-1516156008625-3a9d6067fabd?w=800&q=80",
  },
  {
    name: "Convenient Repayment Options",
    href: "#",
    data: [
      {
        paragraph: "Tenure up to 30 years with flexible EMIs.",
        ul: [
          "EMI / Step-up / Flexible repayment plans",
          "Longest tenure up to 30 years",
          "Multiple payment modes (UPI, Auto-debit)",
          "Part-prepayment without charges"
        ]
      }
    ],
    imageAlt: "Convenient repayment options",
    imageUrl: "https://images.unsplash.com/photo-1559526324-c1f166daf363?w=800&q=80",
  },
];

const WhyChooseUs = () => {
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative bg-white py-20 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="h-[120%] w-full bg-cover bg-white bg-center bg-no-repeat" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-5">
        <motion.div
          className="relative text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative inline-block">
            <motion.span
              className="absolute bottom-full left-1/2 w-px -translate-x-1/2 bg-gray-300"
              initial={{ height: 0 }}
              whileInView={{ height: "40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <h2 className="text-4xl md:text-5xl font-normal text-primary">
              Why Choose Maitrii Loans?
            </h2>
            <motion.span
              className="absolute top-full left-1/2 mt-3 h-10 w-px -translate-x-1/2 bg-gray-300"
              initial={{ height: 0 }}
              whileInView={{ height: "40px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
            {businessLinesData.map((item, index) => (
              <BusinessCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessCard = ({ item, index }) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <a href={item.href} className="block h-full no-underline">
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg bg-white h-full flex flex-col"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 30px -10px rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="p-6 text-left flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary transition-colors duration-300">
              {item.name}
            </h3>

            <div className="space-y-3 flex-1">
              {item.data.map((content, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                    {content.paragraph}
                  </p>
                  <ul className="space-y-2">
                    {content.ul.map((listItem, liIdx) => (
                      <li key={liIdx} className="flex items-start text-xs text-gray-600 leading-relaxed">
                        <span className="mr-2 text-primary mt-0.5 flex-shrink-0">•</span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default WhyChooseUs;