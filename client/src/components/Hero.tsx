import { ArrowRight } from 'lucide-react';

import galaDinner from '../assets/portfolio/gala_dinner_1.jpg';
import ministerMeeting from '../assets/portfolio/minister_meeting_1.jpg';
import womenClimate from '../assets/portfolio/women_climate_1.jpg';
import marineCamp from '../assets/portfolio/marine_camp_1.jpg';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="home"
      className="relative w-full min-h-[90vh] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-b-[3rem] overflow-hidden pt-32 pb-20 px-4"
      data-testid="section-hero"
    >
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-3xl" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Professional Event Organizer
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            Perjalanan Bisnis Anda Layak Mendapat<br />
            <span className="text-sky-200">Dukungan Ahli</span>
            </h1>

            <p className="text-lg text-blue-50 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Kami adalah mitra strategis Anda dalam menciptakan pengalaman luar biasa melalui manajemen event, konsultasi bisnis, dan produksi kreatif berkualitas tinggi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="bg-white text-blue-600 h-12 px-8 rounded-full flex items-center justify-center gap-2 font-bold transition-all hover:bg-blue-50 shadow-lg shadow-blue-900/20"
                >
                    Jelajahi Layanan <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-700/50 hover:bg-blue-700/70 backdrop-blur-md text-white border border-white/20 h-12 px-8 rounded-full flex items-center justify-center gap-2 font-medium transition-all"
                >
                    Hubungi Kami
                </button>
            </div>
        </div>

        {/* Photo Grid */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 gap-3 max-w-lg w-full">
            {/* Top Left - Large */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-48">
              <img src={galaDinner} alt="Gala Dinner Event" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <p className="text-[10px] text-gray-500 font-medium">Event Nasional</p>
                <p className="text-sm font-bold text-gray-900">100+ Events</p>
              </div>
            </div>
            
            {/* Top Right - Tall */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl row-span-2 bg-gradient-to-br from-blue-800 to-blue-900">
              <img src={ministerMeeting} alt="Minister Meeting" className="w-full h-full object-cover opacity-90" />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">SK</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <p className="text-[10px] text-gray-500 font-medium">Klien Kementerian</p>
                <p className="text-sm font-bold text-gray-900">50+ Klien</p>
              </div>
            </div>
            
            {/* Bottom Left - Standard */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-48">
              <img src={womenClimate} alt="Women Climate Event" className="w-full h-full object-cover" />
            </div>
            
            {/* Bottom Banner */}
            <div className="col-span-2 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={marineCamp} alt="Marine Camp" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Professional Services</p>
                <p className="text-lg font-bold text-gray-900">We Provide Best Services</p>
              </div>
              <ArrowRight className="text-blue-600" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
