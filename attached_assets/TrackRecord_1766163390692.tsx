
import React from 'react';

const TrackRecord: React.FC = () => {
  return (
    <section className="py-24 bg-skyled-blue text-white overflow-hidden relative">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-extrabold uppercase tracking-widest opacity-60">Track Record</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Menghadirkan Keunggulan di Skala Nasional & Internasional
            </h2>
            <p className="text-lg opacity-80">
              Dari pertemuan tingkat menteri hingga festival outdoor berskala besar, portfolio kami menunjukkan fleksibilitas dan komitmen kami terhadap kualitas.
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'ASEAN Blue Economy Forum', desc: 'Manajemen event lengkap untuk pertemuan Menteri Ekonomi ASEAN.', img: '🏢' },
                { title: 'MotoGP Mandalika Side Events', desc: 'Manajemen kerumunan dan dukungan multimedia untuk event olahraga.', img: '🏍️' }
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl hover:bg-white/15 cursor-pointer transition-colors border border-white/10">
                  <div className="w-16 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">{event.img}</div>
                  <div>
                    <h4 className="font-bold text-sm">{event.title}</h4>
                    <p className="text-[10px] opacity-70 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-8">
              <div className="text-4xl opacity-40">“</div>
              <p className="text-xl font-medium leading-relaxed italic">
                Skyled Pro Indonesia menghadirkan kualitas dan profesionalisme luar biasa untuk summit internasional kami. Benar-benar mitra yang dapat diandalkan.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">🏛️</div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-tighter">Perwakilan Kementerian</h4>
                  <p className="text-[10px] opacity-60">Klien Pemerintahan</p>
                </div>
              </div>
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-skyled-blue p-6 rounded-3xl shadow-xl hidden md:block animate-bounce" style={{animationDuration: '4s'}}>
               <p className="text-[10px] font-black uppercase mb-1">Success Rate</p>
               <p className="text-4xl font-black leading-none">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
