'use client';

import React from 'react';

const GrievanceRedressalGraphic = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <svg
                viewBox="0 0 800 600"
                className="w-full h-auto drop-shadow-xl"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.1" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#7E3B8A" />
                        <stop offset="100%" stopColor="#5A2266" />
                    </linearGradient>
                    <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FF9666" />
                        <stop offset="100%" stopColor="#D96333" />
                    </linearGradient>
                </defs>

                <path d="M 400 90 L 400 480" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />

                <g filter="url(#softShadow)">
                    <rect x="200" y="20" width="400" height="70" rx="35" fill="url(#purpleGrad)" />
                    <text x="400" y="50" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Complaint Registration</text>
                    <text x="400" y="70" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif" opacity="0.9">Branch • Call Center • Email</text>
                </g>

                <g transform="translate(100, 140)" filter="url(#softShadow)">
                    <rect x="0" y="0" width="600" height="100" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                    <rect x="0" y="0" width="8" height="100" rx="0" fill="#F47E4D" />
                    <text x="30" y="35" fill="#F47E4D" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">LEVEL 1</text>
                    <text x="30" y="62" fill="#1E293B" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Grievance Redressal Officer</text>
                    <text x="30" y="85" fill="#64748B" fontSize="14" fontFamily="sans-serif">Resolution Time: 15 Days</text>
                    <circle cx="550" cy="50" r="28" fill="#FFF1EB" />
                    <text x="550" y="55" textAnchor="middle" fill="#F47E4D" fontSize="14" fontWeight="bold" fontFamily="sans-serif">15D</text>
                </g>

                <path d="M 400 240 L 400 280" stroke="#6D3078" strokeWidth="2" />
                <polygon points="400,280 394,270 406,270" fill="#6D3078" />

                <g transform="translate(100, 280)" filter="url(#softShadow)">
                    <rect x="0" y="0" width="600" height="100" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                    <rect x="0" y="0" width="8" height="100" rx="0" fill="#6D3078" />
                    <text x="30" y="35" fill="#6D3078" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">LEVEL 2</text>
                    <text x="30" y="62" fill="#1E293B" fontSize="20" fontWeight="bold" fontFamily="sans-serif">Principal Nodal Officer</text>
                    <text x="30" y="85" fill="#64748B" fontSize="14" fontFamily="sans-serif">Resolution Time: 30 Days</text>
                    <circle cx="550" cy="50" r="28" fill="#F3E8FF" />
                    <text x="550" y="55" textAnchor="middle" fill="#6D3078" fontSize="14" fontWeight="bold" fontFamily="sans-serif">30D</text>
                </g>

                <path d="M 400 380 L 400 420" stroke="#6D3078" strokeWidth="2" />
                <polygon points="400,420 394,410 406,410" fill="#6D3078" />

                <g transform="translate(100, 420)" filter="url(#softShadow)">
                    <rect x="0" y="0" width="600" height="100" rx="16" fill="#1E293B" />
                    <rect x="0" y="0" width="8" height="100" rx="0" fill="#F47E4D" />
                    <text x="30" y="35" fill="#F47E4D" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">LEVEL 3 • APPEAL</text>
                    <text x="30" y="62" fill="white" fontSize="20" fontWeight="bold" fontFamily="sans-serif">RBI Ombudsman</text>
                    <text x="30" y="85" fill="#94A3B8" fontSize="14" fontFamily="sans-serif">Final Authority for unresolved disputes</text>
                    <circle cx="550" cy="50" r="28" fill="#F47E4D" />
                    <text x="550" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">RBI</text>
                </g>
            </svg>
        </div>
    );
};

export default GrievanceRedressalGraphic;
