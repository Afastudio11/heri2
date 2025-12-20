import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollAnimation } from './ScrollAnimation';

import iconEventOrganizer from '../assets/icons/event_organizer.png';
import iconConsulting from '../assets/icons/consulting.png';
import iconProduction from '../assets/icons/production.png';

type ServiceData = {
  id: string;
  title: string;
  desc: string;
  features: string[];
  icon: string;
  sub: string;
  link: string;
};

const services: ServiceData[] = [
  {
    id: 'organizer',
    title: "Event Organizer",
    desc: "Perencanaan, desain, dan eksekusi event berkualitas tinggi dengan fokus pada detail dan kreativitas.",
    features: ["Event Management & MICE", "Crowd & Flow Management", "Stage Production", "Multimedia Support"],
    icon: iconEventOrganizer,
    sub: "SKYLED PRO INDONESIA",
    link: "/event-organizer"
  },
  {
    id: 'consulting',
    title: "Consulting",
    desc: "Mitra strategis untuk membangun kepercayaan dan keberlanjutan bisnis melalui SLO, CSR, dan ESG.",
    features: ["CSR & ESG Consulting", "Business Strategy", "Sustainability Roadmap", "Compliance Audit"],
    icon: iconConsulting,
    sub: "SKYLED PRO CONSULTING",
    link: "/consulting"
  },
  {
    id: 'production',
    title: "Production",
    desc: "Solusi tekstil dan merchandise custom berkualitas tinggi untuk mengangkat identitas brand Anda.",
    features: ["Textile Production", "Custom Merchandise", "Brand Identity", "Quality Manufacturing"],
    icon: iconProduction,
    sub: "SKYLED PRODUCTION",
    link: "/production"
  }
];

export default function BusinessUnits() {
  return (
    <section id="business" className="py-20 px-4 bg-white" data-testid="section-business">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              UNIT BISNIS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Temukan Yang Anda Butuhkan
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kami beroperasi melalui tiga divisi spesialis untuk menyediakan solusi terbaik di bidangnya.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 0.1}>
              <Card 
                className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
              >
                <CardContent className="p-8 flex flex-col h-full text-center">
                  <div className="mb-4 flex justify-center">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" loading="lazy" />
                  </div>
                  
                  <div className="text-[#1F68F5] font-bold text-xs tracking-widest uppercase mb-2">
                    {service.sub}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">{service.title}</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3 mb-6 flex-1 text-left">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#1F68F5] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={10} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.link}
                    className="text-[#1F68F5] font-bold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all"
                    data-testid={`link-consult-${service.id}`}
                  >
                    Lihat Detail Layanan <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
