import { CheckCircle2, Award, Building2, Globe2, Shield, Users, Lightbulb, ShieldCheck } from 'lucide-react';

const STATS = [
  { number: '100+', label: 'Event Terselenggara', icon: <Award size={24} /> },
  { number: '50+', label: 'Klien Terpercaya', icon: <Building2 size={24} /> },
  { number: '10+', label: 'Event Internasional', icon: <Globe2 size={24} /> },
  { number: '3', label: 'Unit Bisnis', icon: <Shield size={24} /> }
];

const CORE_VALUES = [
  { title: "Fokus Klien", description: "Kami mengutamakan visi dan kepuasan Anda di atas segalanya.", icon: <Users size={28} /> },
  { title: "Kreativitas", description: "Solusi inovatif yang disesuaikan dengan kebutuhan unik.", icon: <Lightbulb size={28} /> },
  { title: "Integritas", description: "Menjaga standar etika dan profesionalisme tertinggi.", icon: <ShieldCheck size={28} /> }
];

const SERVICES = [
  "Event Management & MICE",
  "Crowd & Flow Management",
  "Stage Production",
  "Multimedia & Streaming",
  "CSR & ESG Consulting",
  "Textile & Merchandise"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA]" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Skyled Pro Indonesia - Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              data-testid={`card-stat-${idx}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F5F8FF] text-[#1F68F5] rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tentang Perusahaan</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Skyled Pro Indonesia</strong> adalah perusahaan event organizer dan production terkemuka yang dikenal karena keahlian dan inovasinya dalam menciptakan event berkualitas tinggi. Kami menangani setiap aspek perencanaan, desain, dan eksekusi event dengan fokus pada detail dan kreativitas.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami telah dipercaya menangani berbagai event prestisius, mulai dari ASEAN Blue Economy Forum, UNESCO Global Geopark Youth Forum, hingga Side Event MotoGP Mandalika.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">Layanan Unggulan:</h4>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES.map((service, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600" data-testid={`text-service-${i}`}>
                    <CheckCircle2 size={16} className="text-[#1F68F5] flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#1F68F5] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Visi</h3>
              <p className="text-white/90 leading-relaxed">
                "Menjadi nama terdepan di industri event organizer dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi, serta menciptakan pengalaman event yang tak terlupakan."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3">
                {["Memberikan layanan berkualitas tinggi", "Mewujudkan visi klien dengan presisi", "Menciptakan pengalaman tak terlupakan", "Menjaga standar etika dan profesional"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3" data-testid={`text-mission-${i}`}>
                    <CheckCircle2 size={18} className="text-[#1F68F5] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
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
              className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all"
              data-testid={`card-value-${idx}`}
            >
              <div className="p-3 bg-[#F5F8FF] rounded-xl text-[#1F68F5]">
                {val.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{val.title}</h4>
                <p className="text-sm text-gray-500">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
