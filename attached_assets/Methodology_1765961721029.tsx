import React from 'react';
import { Lightbulb, TrendingUp, Target, ArrowRight, ChevronRight } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb size={32} />,
      title: "Insight",
      desc: "Kami memulai dengan riset mendalam untuk menemukan akar masalah, bukan sekadar gejala.",
      color: "bg-blue-600",
      accent: "border-blue-200"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Capacity",
      desc: "Solusi hanya efektif jika dieksekusi oleh tim yang kapabel. Kami latih tim Anda.",
      color: "bg-indigo-600",
      accent: "border-indigo-200"
    },
    {
      icon: <Target size={32} />,
      title: "Impact",
      desc: "Tujuan akhir kami selalu tindakan nyata yang memberikan dampak positif terukur.",
      color: "bg-green-600",
      accent: "border-green-200"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-2 block">How We Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Pendekatan <span className="text-blue-600">Terukur & Berdampak</span>
                </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
                <span>End-to-end Process</span> <ArrowRight size={18}/>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
                <div key={index} className="group relative flex flex-col h-full">
                    
                    {/* Arrow Connector (Desktop) */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-12 -right-4 z-20 text-slate-200 transform translate-x-1/2">
                            <ChevronRight size={48} strokeWidth={1} />
                        </div>
                    )}

                    <div className={`flex-1 bg-white p-8 rounded-3xl border-2 ${step.accent} hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 relative overflow-hidden`}>
                        {/* Number Background */}
                        <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 opacity-50 select-none group-hover:text-slate-100 transition-colors">
                            {index + 1}
                        </div>

                        <div className={`relative z-10 w-16 h-16 ${step.color} rounded-2xl text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                        {/* Bottom Bar */}
                        <div className={`absolute bottom-0 left-0 w-full h-1.5 ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                    
                    {/* Mobile Connector */}
                    {index < steps.length - 1 && (
                        <div className="md:hidden flex justify-center py-4 text-slate-300">
                             <ArrowRight className="rotate-90" />
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;