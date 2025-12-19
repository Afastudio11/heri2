import React from 'react';

const HeroNew: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-skyled-blue text-white rounded-b-[4rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
              Perjalanan Bisnis Anda Layak Mendapat Dukungan Ahli
            </h1>
            <p className="text-lg opacity-80 max-w-xl leading-relaxed">
              Kami adalah mitra strategis Anda dalam menciptakan pengalaman luar biasa melalui manajemen event, konsultasi bisnis, dan produksi kreatif berkualitas tinggi.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-skyled-blue px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 transition-all">
                Jelajahi Layanan
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="border border-white/30 backdrop-blur-sm px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all">
                Hubungi Kami
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-800 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-end items-end">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded">Event Nasional</span>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-2xl overflow-hidden aspect-square shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute top-4 left-4 bg-white text-skyled-blue px-3 py-1 rounded-full text-xs font-extrabold">100+ Events</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl text-slate-900 shadow-lg">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Klien Kementerian</p>
                    <p className="font-extrabold text-lg">50+ Klien</p>
                  </div>
                </div>
                <div className="bg-white text-slate-900 p-4 rounded-2xl shadow-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-skyled-blue/10 flex items-center justify-center text-xl">🏆</div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 leading-none">LAYANAN PROFESIONAL</p>
                      <p className="text-sm font-bold">Layanan Terbaik</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-skyled-blue group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default HeroNew;
