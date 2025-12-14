import { CheckCircle2, Award, Building2, Globe2, Shield } from 'lucide-react';
import { CORE_VALUES } from '@/lib/constants';

const MISSION_ITEMS = [
  { text: 'Memberikan Layanan Berkualitas Tinggi', desc: 'Mengutamakan standar kualitas terbaik dalam setiap proyek' },
  { text: 'Mewujudkan Visi Klien', desc: 'Memahami dan mengeksekusi visi unik setiap klien dengan presisi' },
  { text: 'Menciptakan Pengalaman Tak Terlupakan', desc: 'Merancang momen yang berkesan dan bermakna' },
  { text: 'Menjaga Standar Etika dan Profesional', desc: 'Komitmen pada integritas dan profesionalisme tertinggi' },
  { text: 'Beradaptasi dan Berinovasi', desc: 'Terus berkembang mengikuti tren dan teknologi terkini' }
];

const STATS = [
  { number: '100+', label: 'Event Terselenggara', icon: <Award size={24} /> },
  { number: '50+', label: 'Klien Terpercaya', icon: <Building2 size={24} /> },
  { number: '10+', label: 'Event Internasional', icon: <Globe2 size={24} /> },
  { number: '3', label: 'Unit Bisnis', icon: <Shield size={24} /> }
];

const SERVICES_HIGHLIGHT = [
  "Event Management & MICE",
  "Crowd & Flow Management",
  "Stage Production & Visual Work",
  "Multimedia & Live Streaming",
  "CSR & ESG Consulting",
  "Textile & Merchandise Custom"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-skyled-accent font-bold tracking-widest uppercase text-sm mb-2 block">Tentang Kami</span>
          <h2 className="text-4xl font-bold text-skyled-navy mb-4">Skyled Pro Indonesia</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Event Man Power and Production - Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              data-testid={`card-stat-${idx}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-skyled-navy/10 text-skyled-navy rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-skyled-navy mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="text-2xl font-bold text-skyled-navy mb-6">Tentang Perusahaan</h3>
            <div className="w-20 h-1.5 bg-skyled-accent mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Skyled Pro Indonesia</strong> adalah perusahaan event organizer dan production terkemuka yang dikenal karena keahlian dan inovasinya dalam menciptakan event berkualitas tinggi yang luar biasa. Kami menangani setiap aspek perencanaan, desain, dan eksekusi event dengan fokus pada detail dan kreativitas.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dengan memanfaatkan teknologi terkini dan tim profesional berpengalaman, Skyled Pro Indonesia berdedikasi untuk memberikan pengalaman event tak terlupakan yang disesuaikan dengan visi dan kebutuhan unik setiap klien.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kami telah dipercaya menangani berbagai event prestisius, mulai dari <strong>ASEAN Blue Economy Forum</strong>, <strong>UNESCO Global Geopark Youth Forum</strong>, hingga <strong>Side Event MotoGP Mandalika</strong> dan berbagai event kementerian lainnya.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-skyled-navy mb-4">Layanan Unggulan Kami:</h4>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES_HIGHLIGHT.map((service, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600" data-testid={`text-service-${i}`}>
                    <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-skyled-navy to-blue-800 p-8 rounded-[30px] text-white">
              <h3 className="text-2xl font-bold mb-6">Visi</h3>
              <p className="text-white/90 text-lg italic leading-relaxed">
                "Menjadi nama terdepan di industri event organizer dan production dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi, serta menciptakan pengalaman event yang tak terlupakan dan menginspirasi bagi setiap klien."
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-[30px] border border-white shadow-lg">
              <h3 className="text-2xl font-bold text-skyled-navy mb-6">Misi</h3>
              <ul className="space-y-4">
                {MISSION_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-mission-${i}`}>
                    <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">{item.text}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-lg transition-all"
              data-testid={`card-value-${idx}`}
            >
              <div className="p-3 bg-skyled-navy/10 rounded-xl text-skyled-navy">
                {val.icon}
              </div>
              <div>
                <h4 className="font-bold text-skyled-navy text-lg mb-1">{val.title}</h4>
                <p className="text-sm text-gray-500">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
