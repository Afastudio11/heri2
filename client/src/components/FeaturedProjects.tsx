import { Quote } from 'lucide-react';
import ministerMeeting from '../assets/portfolio/minister_meeting_1.jpg';
import galaDinner from '../assets/portfolio/gala_dinner_1.jpg';
import womenClimate from '../assets/portfolio/women_climate_1.jpg';

const PROJECTS = [
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

const featuredImage = womenClimate;

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-slate-900 text-white relative" data-testid="section-featured">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Track Record</span>
            <h2 className="text-4xl font-bold mb-6">Menghadirkan Keunggulan di Skala Nasional & Internasional</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Dari pertemuan tingkat menteri hingga festival outdoor berskala besar, portfolio kami menunjukkan fleksibilitas dan komitmen kami terhadap kualitas.
            </p>
            <div className="space-y-6">
              {PROJECTS.map((project, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md flex gap-4 items-center"
                  data-testid={`card-project-${idx}`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-blue-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-skyled-light mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src={featuredImage} 
              alt="Event Conference" 
              className="w-full h-full object-cover"
              data-testid="img-featured-project"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <Quote className="text-amber-400 mb-4 h-8 w-8" />
              <p className="text-lg font-medium italic text-white mb-4">
                "Skyled Pro Indonesia menghadirkan kualitas dan profesionalisme luar biasa untuk summit internasional kami. Benar-benar mitra yang dapat diandalkan."
              </p>
              <p className="text-sm text-gray-300 font-bold uppercase tracking-wider">— Perwakilan Kementerian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
