import { Check, Activity } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

import iconFokusKlien from '../assets/icons/fokus_klien.png';
import iconKreativitas from '../assets/icons/kreativitas.png';
import iconIntegritas from '../assets/icons/integritas.png';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollAnimation direction="left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tentang Perusahaan</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="font-bold text-gray-900">Skyled Pro Indonesia</span> adalah perusahaan event organizer dan production terkemuka yang dikenal karena keahlian dan inovasinya dalam menciptakan event berkualitas tinggi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami telah dipercaya menangani berbagai event prestisius, mulai dari ASEAN Blue Economy Forum, UNESCO Global Geopark Youth Forum, hingga Side Event MotoGP Mandalika.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#F0F5FF] rounded-2xl">
                  <div className="text-4xl font-bold text-[#1F68F5] mb-1">100+</div>
                  <div className="text-sm text-gray-600">Event Terselenggara</div>
                </div>
                <div className="p-6 bg-gray-100 rounded-2xl">
                  <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Klien Terpercaya</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="bg-[#1F68F5] text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Activity size={20} /> Visi
                </h3>
                <p className="text-blue-50 italic leading-relaxed">
                  "Menjadi nama terdepan di industri event organizer dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi."
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Misi</h3>
                <ul className="space-y-4">
                  {[
                    "Memberikan layanan berkualitas tinggi",
                    "Mewujudkan visi klien dengan presisi",
                    "Menciptakan pengalaman tak terlupakan",
                    "Menjaga standar etika dan profesional"
                  ].map((misi, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm" data-testid={`text-mission-${i}`}>
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#F0F5FF] flex items-center justify-center text-[#1F68F5] flex-shrink-0">
                        <Check size={12} />
                      </div>
                      {misi}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <ScrollAnimation delay={0}>
            <ValueCard 
              icon={iconFokusKlien} 
              title="Fokus Klien" 
              desc="Kami mengutamakan visi dan kepuasan Anda di atas segalanya." 
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <ValueCard 
              icon={iconKreativitas} 
              title="Kreativitas" 
              desc="Solusi inovatif yang disesuaikan dengan kebutuhan unik." 
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <ValueCard 
              icon={iconIntegritas} 
              title="Integritas" 
              desc="Menjaga standar etika dan profesionalisme tertinggi." 
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

const ValueCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:border-[#1F68F5] transition-colors h-full" data-testid={`card-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className="flex-shrink-0">
      <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);
