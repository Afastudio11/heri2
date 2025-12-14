import { ArrowRight, Globe2, Briefcase, Shirt } from 'lucide-react';
import { Link } from 'wouter';

const BUSINESS_UNITS = [
  {
    id: 'events',
    title: "Event Organizer",
    subtitle: "Skyled Pro Indonesia",
    description: "Perencanaan, desain, dan eksekusi event berkualitas tinggi dengan fokus pada detail dan kreativitas.",
    icon: <Globe2 className="w-8 h-8" />,
    link: "/event-organizer"
  },
  {
    id: 'consulting',
    title: "Consulting",
    subtitle: "Skyled Pro Consulting",
    description: "Mitra strategis untuk membangun kepercayaan dan keberlanjutan bisnis melalui SLO, CSR, dan ESG.",
    icon: <Briefcase className="w-8 h-8" />,
    link: "/consulting"
  },
  {
    id: 'production',
    title: "Production",
    subtitle: "Skyled Production",
    description: "Solusi tekstil dan merchandise custom berkualitas tinggi untuk mengangkat identitas brand Anda.",
    icon: <Shirt className="w-8 h-8" />,
    link: "/production"
  }
];

export default function BusinessUnits() {
  return (
    <section id="business" className="py-24 bg-white" data-testid="section-business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Temukan Yang Anda Butuhkan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami beroperasi melalui tiga divisi spesialis untuk menyediakan solusi terbaik di bidangnya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BUSINESS_UNITS.map((unit) => (
            <div 
              key={unit.id} 
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1F68F5] hover:shadow-xl transition-all duration-300"
              data-testid={`card-business-${unit.id}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F5F8FF] text-[#1F68F5] flex items-center justify-center mb-6">
                {unit.icon}
              </div>
              
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{unit.subtitle}</h4>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{unit.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {unit.description}
              </p>

              <Link 
                href={unit.link} 
                className="inline-flex items-center gap-2 text-[#1F68F5] font-semibold group-hover:gap-3 transition-all"
                data-testid={`link-consult-${unit.id}`}
              >
                Lihat Detail <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
