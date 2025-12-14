import { useState } from 'react';
import { Globe, Users, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';

type ServiceType = 'organizer' | 'consulting' | 'production';

export default function BusinessUnits() {
  const [activeService, setActiveService] = useState<ServiceType>('organizer');

  const services = {
    organizer: {
      title: "Event Organizer",
      desc: "Perencanaan, desain, dan eksekusi event berkualitas tinggi dengan fokus pada detail dan kreativitas.",
      features: ["Event Management & MICE", "Crowd & Flow Management", "Stage Production", "Multimedia Support"],
      icon: <Globe size={28} />,
      sub: "SKYLED PRO INDONESIA",
      link: "/event-organizer"
    },
    consulting: {
      title: "Consulting",
      desc: "Mitra strategis untuk membangun kepercayaan dan keberlanjutan bisnis melalui SLO, CSR, dan ESG.",
      features: ["CSR & ESG Consulting", "Business Strategy", "Sustainability Roadmap", "Compliance Audit"],
      icon: <Briefcase size={28} />,
      sub: "SKYLED PRO CONSULTING",
      link: "/consulting"
    },
    production: {
      title: "Production",
      desc: "Solusi tekstil dan merchandise custom berkualitas tinggi untuk mengangkat identitas brand Anda.",
      features: ["Textile Production", "Custom Merchandise", "Brand Identity", "Quality Manufacturing"],
      icon: <Users size={28} />,
      sub: "SKYLED PRODUCTION",
      link: "/production"
    }
  };

  return (
    <section id="business" className="py-20 px-4 max-w-7xl mx-auto bg-gray-50/50" data-testid="section-business">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Temukan Yang Anda Butuhkan
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Kami beroperasi melalui tiga divisi spesialis untuk menyediakan solusi terbaik di bidangnya.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button 
          onClick={() => setActiveService('organizer')}
          className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${activeService === 'organizer' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
          data-testid="button-service-organizer"
        >
          <Globe size={16} /> Event Organizer
        </button>
        <button 
          onClick={() => setActiveService('consulting')}
          className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${activeService === 'consulting' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
          data-testid="button-service-consulting"
        >
          <Briefcase size={16} /> Consulting
        </button>
        <button 
          onClick={() => setActiveService('production')}
          className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all ${activeService === 'production' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'}`}
          data-testid="button-service-production"
        >
          <Users size={16} /> Production
        </button>
      </div>

      <div className="relative">
        <div className="relative z-10 bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-gray-200 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block text-blue-600 font-bold text-xs tracking-wider mb-2 uppercase">
                {services[activeService].sub}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{services[activeService].title}</h3>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {services[activeService].desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href={services[activeService].link}
                className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                data-testid={`link-consult-${activeService}`}
              >
                Lihat Detail Layanan <ArrowRight size={16} />
              </Link>
            </div>

            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[length:20px_20px]" style={{ backgroundImage: 'radial-gradient(rgba(148,163,184,0.2) 1px, transparent 1px)' }}></div>
              <div className="relative z-10 text-center p-6">
                <div className="text-6xl mb-2">✨</div>
                <h4 className="font-bold text-gray-900">Premium Quality</h4>
                <p className="text-sm text-gray-500">Standard Operasional Tinggi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
