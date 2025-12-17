import React from 'react';
import { Mail, Shield, UserCheck, CheckCircle } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-36 pb-24 bg-white overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ 
               backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8 z-10 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 font-bold text-xs tracking-wider uppercase border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Consulting Intelligence
            </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Strategic <br/>
            Consulting. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Sustainable Growth.</span>
          </h1>
          
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg border-l-4 border-slate-200 pl-4">
            Pionir integrasi <strong>SLO–CSR–ESG</strong> dengan end-to-end services yang berbicara pada bisnis sekaligus komunitas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200 transform hover:-translate-y-1">
               <MessageCircle size={20} /> Hubungi via WhatsApp
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:border-blue-200 hover:bg-blue-50 transition-all">
               <Mail size={20} /> Kirim Email
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 max-w-md">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-blue-600">
                    <UserCheck size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">Expert Team</h4>
                    <p className="text-xs text-slate-500">Berpengalaman</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-green-600">
                    <Shield size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">Compliant</h4>
                    <p className="text-xs text-slate-500">Terjamin</p>
                </div>
            </div>
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
                 {/* Floating Info Cards */}
                 <div className="absolute top-10 -left-10 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow hidden sm:block">
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="font-bold text-xs text-slate-900">Project Approved</span>
                    </div>
                    <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-500"></div>
                    </div>
                 </div>

                 <div className="absolute bottom-20 -right-4 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                    <p className="font-bold text-2xl text-slate-900">98%</p>
                    <p className="text-xs text-slate-500">Success Rate</p>
                 </div>

                {/* Main 3D Illustration */}
                <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
                     {/* Circular BG */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-50 rounded-full opacity-70 blur-2xl"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070&auto=format&fit=crop" 
                        alt="3D Handshake Illustration" 
                        className="w-full h-full object-contain drop-shadow-2xl animate-float relative z-10"
                        style={{ clipPath: 'circle(70% at 50% 50%)' }} 
                    />
                </div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
             animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;