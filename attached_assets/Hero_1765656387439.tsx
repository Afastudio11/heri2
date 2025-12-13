import React from 'react';
import { ArrowDown, Layers, MousePointerClick } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-skyled-navy text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[100px]"></div>
        
        {/* Pattern Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
            <Layers size={16} className="text-skyled-light" />
            <span className="text-sm font-medium tracking-wide">Integrated Business Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            Skyled Pro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyled-light via-white to-skyled-light">Indonesia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            A strategic holding company delivering excellence in <br className="hidden md:block"/>
            <span className="text-white font-semibold">Event Management</span>, 
            <span className="text-amber-400 font-semibold"> Strategic Consulting</span>, and 
            <span className="text-teal-400 font-semibold"> Creative Production</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#business" className="w-full sm:w-auto px-8 py-4 bg-white text-skyled-navy rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2">
              Explore Our Divisions <ArrowDown size={20} />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <MousePointerClick size={24} />
      </div>
    </section>
  );
};

export default Hero;