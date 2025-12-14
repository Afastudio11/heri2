import React from 'react';

const clients = [
  "ASEAN Indonesia 2023", "Bappenas", "ITDC", "Pertamina Mandalika", "BNI Life", "Bank BRI", "UNESCO"
];

export const TrustedBy: React.FC = () => {
  return (
    <div className="w-full py-12 bg-white border-b border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
          Dipercaya oleh Organisasi Terkemuka
        </h2>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
           {clients.map((client, i) => (
             <div key={i} className="flex items-center gap-2 font-bold text-lg md:text-xl text-gray-500 hover:text-blue-600 transition-colors cursor-default select-none">
                <div className={`w-2 h-2 rounded-full bg-blue-500`}></div>
                {client}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};