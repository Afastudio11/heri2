import { CheckCircle2 } from 'lucide-react';
import { CORE_VALUES } from '@/lib/constants';

const MISSION_ITEMS = [
  'Memberikan Layanan Berkualitas Tinggi',
  'Mewujudkan Visi Klien',
  'Menciptakan Pengalaman Tak Terlupakan',
  'Menjaga Standar Etika',
  'Beradaptasi dan Berinovasi'
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-skyled-navy mb-6">Tentang Perusahaan</h2>
            <div className="w-20 h-1.5 bg-skyled-accent mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Skyled Pro Indonesia adalah grup perusahaan terkemuka yang dikenal karena keahlian dan inovasinya. Kami menangani setiap aspek dukungan bisnis, mulai dari menciptakan event luar biasa hingga menyediakan konsultasi strategis untuk keberlanjutan.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan memanfaatkan teknologi terkini dan tim profesional berpengalaman, Skyled Pro Indonesia berdedikasi untuk memberikan pengalaman tak terlupakan yang disesuaikan dengan visi dan kebutuhan unik setiap klien.
            </p>
            
            <div className="grid gap-4">
              {CORE_VALUES.map((val, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all"
                  data-testid={`card-value-${idx}`}
                >
                  <div className="p-2 bg-white rounded-lg text-skyled-blue shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-skyled-navy">{val.title}</h4>
                    <p className="text-sm text-gray-500">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-skyled-navy to-skyled-accent rounded-[40px] transform rotate-3 opacity-10"></div>
            <div className="bg-slate-100 p-8 rounded-[40px] relative z-10 border border-white shadow-xl">
              <h3 className="text-2xl font-bold text-skyled-navy mb-6">Visi & Misi</h3>
              
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-skyled-accent mb-2 block">Visi Kami</span>
                <p className="text-gray-700 italic border-l-4 border-skyled-gold pl-4">
                  "Menjadi nama terdepan di industri dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi, menciptakan pengalaman yang menginspirasi setiap klien."
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-skyled-accent mb-4 block">Misi Kami</span>
                <ul className="space-y-3">
                  {MISSION_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700" data-testid={`text-mission-${i}`}>
                      <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
