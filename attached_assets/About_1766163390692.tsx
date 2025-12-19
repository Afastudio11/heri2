
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Tentang Perusahaan</h2>
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-skyled-blue">Skyled Pro Indonesia</span> adalah perusahaan event organizer dan production terkemuka yang dikenal karena keahlian dan inovasinya dalam menciptakan event berkualitas tinggi.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Kami telah dipercaya menangani berbagai event prestisius, mulai dari ASEAN Blue Economy Forum, UNESCO Global Geopark Youth Forum, hingga Side Event MotoGP Mandalika.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-4xl font-extrabold text-skyled-blue">100+</p>
                <p className="text-xs font-bold text-slate-400 uppercase mt-1">Event Terselenggara</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-4xl font-extrabold text-skyled-blue">50+</p>
                <p className="text-xs font-bold text-slate-400 uppercase mt-1">Klien Terpercaya</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Fokus Klien', icon: '👥' },
                { label: 'Kreativitas', icon: '💡' },
                { label: 'Integritas', icon: '🛡️' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-sm">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 bg-skyled-blue text-white rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-white/20 rounded-lg text-sm">✨</span> Visi
              </h3>
              <p className="italic text-lg font-medium opacity-90 leading-relaxed">
                "Menjadi nama terdepan di industri event organizer dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi."
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Misi</h3>
              <ul className="space-y-4">
                {[
                  'Memberikan layanan berkualitas tinggi',
                  'Mewujudkan visi klien dengan presisi',
                  'Menciptakan pengalaman tak terlupakan',
                  'Menjaga standar etika dan profesional'
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-skyled-blue/10 flex items-center justify-center text-[10px] text-skyled-blue shrink-0">✓</span>
                    <span className="text-sm text-slate-600 font-medium">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
