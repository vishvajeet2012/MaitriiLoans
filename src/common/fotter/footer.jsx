import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9FAFB] pt-16 border-t border-gray-200 font-sans text-gray-600 relative overflow-hidden">

      {/* --- Left Side Decorative SVG Background (Geometric Pattern) --- */}
      <div className="absolute top-0 left-0 w-[400px] h-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10" // Low opacity for subtle effect
        >
          {/* Abstract Curves/Shapes in Brand Colors */}
          <circle cx="0" cy="200" r="150" stroke="#6D3078" strokeWidth="40" />
          <circle cx="0" cy="200" r="100" stroke="#F47E4D" strokeWidth="20" strokeDasharray="10 10" />
          <circle cx="50" cy="250" r="20" fill="#6D3078" />
          <circle cx="100" cy="150" r="15" fill="#F47E4D" />

          {/* Dotted Pattern */}
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#6D3078" />
          </pattern>
          <rect x="0" y="0" width="400" height="400" fill="url(#dots)" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Grid Section */}
        {/* Desktop: Custom column widths like SCSS (1.5fr 1fr 1fr 1.5fr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10 mb-12">

          {/* Column 1: Company Info */}
          <div className="flex flex-col">
            <h3 className="text-black text-lg font-bold mb-6 uppercase tracking-wide">
              Mentor Finmart Pvt Ltd
            </h3>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-4">
              With over 25 years of experience, our group specializes in all
              loan segments and financial services.
            </p>
          </div>

          {/* Column 2: Products (Links Updated) */}
          <div className="flex flex-col">
            <h3 className="text-black text-lg font-bold mb-6 uppercase tracking-wide">
              Products
            </h3>
            <ul className="space-y-3">
              <li><a href="/product/home-loan" className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity">Home Loan</a></li>
              <li><a href="/product/mortgage" className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity">Mortgage Loan</a></li>
              <li><a href="/product/vehicle-loan" className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity">Vehicle Loan</a></li>
              <li><a href="/product/personal-loan" className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity">Business & Personal Loan</a></li>
              <li><a href="/product/msme" className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity">MSME</a></li>
            </ul>
          </div>

          {/* Column 3: Useful Links (Links Updated) */}
          <div className="flex flex-col">
            <h3 className="text-black text-lg font-bold mb-6 uppercase tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-3">
               <li>
                <a
                  href="/"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
                Charges
                </a>
              </li>
              <li>
                <a
                  href="/fairpractices"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
                  Fair Practice Code
                </a>
              </li>
               <li>
                <a
                  href="/grievances-redressal"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
                  Grievances Redressal
                </a>
              </li>
             
           
             
              <li>
                <a
                  href="https://sachet.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
                  RBI Sachet Portal
                </a>
              </li>
              <li>
                <a
                  href="https://www.digitalindia.gov.in/initiative/national-automated-clearing-house-nach/#:~:text=National%20Automated%20Clearing%20House%20(NACH)%20is%20a%20centralised%20system%20launched,and%20removing%20local%20barriers%2Finhibitors."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
                NACH/ECS
                </a>
              </li>
               <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6D3078] text-[0.95rem] hover:opacity-80 hover:underline transition-opacity"
                >
              Term and Condition
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h3 className="text-black text-lg font-bold mb-6 uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-4">
             

              <div className="flex items-start text-[0.9rem] text-gray-500">
                <MapPin className="w-[18px] h-[18px] text-[#6D3078] mr-3 mt-[3px] shrink-0" />
                <span className="leading-relaxed">
                11/70 Madhyam Marg, Mansarovar, Jaipur - 302020
                </span>
              </div>

              <div className="flex items-start text-[0.9rem] text-gray-500">
                <Mail className="w-[18px] h-[18px] text-[#6D3078] mr-3 mt-[3px] shrink-0" />
                <span>info@maitrii.in</span>
              </div>

              <div className="flex items-start text-[0.9rem] text-gray-500">
                <Phone className="w-[18px] h-[18px] text-[#6D3078] mr-3 mt-[3px] shrink-0" />
                <span>+91 8946 800600</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & CIN */}
      <div className="bg-[#f3f4f6] py-6 text-center border-t border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-700 text-sm">
            © 2025 <span className="font-semibold">MENTOR FINMART PVT. LTD.</span> All rights reserved.
            <span className="block mt-2 font-bold text-black">CIN No.: U65910RJ1989PTC004938</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;