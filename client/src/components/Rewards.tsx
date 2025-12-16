import { Briefcase } from 'lucide-react';

import ministerMeeting from '../assets/portfolio/minister_meeting_1.jpg';
import galaDinner from '../assets/portfolio/gala_dinner_1.jpg';

const events = [
  {
    title: "ASEAN Blue Economy Forum",
    description: "Manajemen event lengkap untuk pertemuan Menteri Ekonomi ASEAN, termasuk gala dinner dan penanganan VVIP.",
    image: ministerMeeting
  },
  {
    title: "MotoGP Mandalika Side Events",
    description: "Manajemen kerumunan dan dukungan multimedia untuk event olahraga internasional.",
    image: galaDinner
  }
];

export default function Rewards() {
  return (
    <section className="py-20 bg-blue-600 text-white overflow-hidden" data-testid="section-rewards">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-4">TRACK RECORD</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Menghadirkan Keunggulan di <span className="text-blue-200">Skala Nasional & Internasional</span>
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed text-lg">
              Dari pertemuan tingkat menteri hingga festival outdoor berskala besar, portfolio kami menunjukkan fleksibilitas dan komitmen kami terhadap kualitas.
            </p>

            <div className="space-y-4">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white/10 border border-white/20 p-5 rounded-xl hover:bg-white/20 transition-colors cursor-pointer flex gap-4" 
                  data-testid={`card-reward-${index}`}
                >
                  <div className="w-20 h-20 rounded-lg flex-shrink-0 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                    <p className="text-sm text-blue-100">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-700 to-blue-800 p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl" data-testid="card-testimonial">
              <div className="text-5xl text-yellow-400 mb-6 font-serif">❝</div>
              
              <p className="text-xl md:text-2xl text-blue-50 italic leading-relaxed mb-8">
                "Skyled Pro Indonesia menghadirkan kualitas dan profesionalisme luar biasa untuk summit internasional kami. Benar-benar mitra yang dapat diandalkan."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-sm">Perwakilan Kementerian</div>
                  <div className="text-xs text-blue-200">Klien Pemerintahan</div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -right-10 w-full h-full bg-yellow-400/20 rounded-[2rem] -z-10 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
