import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="relative w-48 h-20 mb-8 animate-pulse">
                <Image 
                    src="/images/logo.png" 
                    alt="Maitrii Loans" 
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div className="flex items-center gap-2 text-[#6D3078] font-medium">
                <div className="w-2 h-2 bg-[#F47E4D] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-[#6D3078] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-[#F47E4D] rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

export default Loading;
