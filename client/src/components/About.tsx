import { Check, User, Activity, ShieldCheck, ArrowRight, Zap, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { title: "Event Organizer", description: "Perencanaan dan eksekusi event berkualitas tinggi", icon: <Zap className="w-6 h-6" /> },
  { title: "Consulting", description: "Strategi SLO, CSR, dan ESG untuk bisnis Anda", icon: <Target className="w-6 h-6" /> },
  { title: "Production", description: "Textile dan merchandise custom berkualitas", icon: <Award className="w-6 h-6" /> }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            TENTANG KAMI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlock <span className="bg-[#1F68F5] text-white px-4 py-1 rounded-xl">3X</span> more
            <br />productivity with expertise
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Skyled Pro Indonesia adalah mitra terpercaya Anda dalam menciptakan pengalaman luar biasa melalui tiga divisi spesialis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <Card key={idx} className="border border-gray-100 hover:border-[#1F68F5] hover:shadow-lg transition-all group cursor-pointer">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-[#F0F5FF] group-hover:bg-[#1F68F5] rounded-xl flex items-center justify-center text-[#1F68F5] group-hover:text-white mb-5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <button className="text-[#1F68F5] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <ValueCard 
            icon={<User size={24} />} 
            title="Fokus Klien" 
            desc="Kami mengutamakan visi dan kepuasan Anda di atas segalanya." 
          />
          <ValueCard 
            icon={<Activity size={24} />} 
            title="Kreativitas" 
            desc="Solusi inovatif yang disesuaikan dengan kebutuhan unik." 
          />
          <ValueCard 
            icon={<ShieldCheck size={24} />} 
            title="Integritas" 
            desc="Menjaga standar etika dan profesionalisme tertinggi." 
          />
        </div>
      </div>
    </section>
  );
}

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start gap-4 p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:border-[#1F68F5] transition-colors" data-testid={`card-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1F68F5] flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);
