import { Globe, Users, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';

type ServiceData = {
  id: string;
  title: string;
  desc: string;
  features: string[];
  iconType: 'globe' | 'briefcase' | 'users';
  sub: string;
  link: string;
};

const services: ServiceData[] = [
  {
    id: 'organizer',
    title: "Event Organizer",
    desc: "Perencanaan, desain, dan eksekusi event berkualitas tinggi dengan fokus pada detail dan kreativitas.",
    features: ["Event Management & MICE", "Crowd & Flow Management", "Stage Production", "Multimedia Support"],
    iconType: 'globe',
    sub: "SKYLED PRO INDONESIA",
    link: "/event-organizer"
  },
  {
    id: 'consulting',
    title: "Consulting",
    desc: "Mitra strategis untuk membangun kepercayaan dan keberlanjutan bisnis melalui SLO, CSR, dan ESG.",
    features: ["CSR & ESG Consulting", "Business Strategy", "Sustainability Roadmap", "Compliance Audit"],
    iconType: 'briefcase',
    sub: "SKYLED PRO CONSULTING",
    link: "/consulting"
  },
  {
    id: 'production',
    title: "Production",
    desc: "Solusi tekstil dan merchandise custom berkualitas tinggi untuk mengangkat identitas brand Anda.",
    features: ["Textile Production", "Custom Merchandise", "Brand Identity", "Quality Manufacturing"],
    iconType: 'users',
    sub: "SKYLED PRODUCTION",
    link: "/production"
  }
];

function getIcon(iconType: string) {
  switch (iconType) {
    case 'globe':
      return <Globe size={28} />;
    case 'briefcase':
      return <Briefcase size={28} />;
    case 'users':
      return <Users size={28} />;
    default:
      return <Globe size={28} />;
  }
}

export default function BusinessUnits() {
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

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <CardContent className="p-0">
              <div className="bg-blue-600 p-6 text-white">
                <div className="inline-block text-white/80 font-bold text-xs tracking-wider mb-2 uppercase">
                  {service.sub}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    {getIcon(service.iconType)}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <Check size={10} />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={service.link}
                  className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  data-testid={`link-consult-${service.id}`}
                >
                  Lihat Detail Layanan <ArrowRight size={14} />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
