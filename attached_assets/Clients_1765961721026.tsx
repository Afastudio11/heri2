import React from 'react';

const Clients: React.FC = () => {
  // Using placeholders for logos
  const logos = Array(8).fill(null);

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 font-semibold uppercase tracking-widest text-sm mb-12">
            Dipercaya oleh Kementerian & Pemerintah Daerah
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
            {/* Generate random logos for demo purposes */}
            {logos.map((_, i) => (
                <div key={i} className="group relative">
                     <img 
                        src={`https://picsum.photos/seed/${i + 60}/150/80`} 
                        alt="Institution Logo" 
                        className="h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter mix-blend-multiply" 
                     />
                </div>
            ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-slate-500">
                <span>Kemenko PMK</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>Kementerian Investasi/BKPM</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>KLHK</span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>Pemprov Papua Barat Daya</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;