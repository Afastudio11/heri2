import { CheckCircle, Target, Users, FileText, TrendingUp, Shield, Globe, Building2, Landmark, Briefcase, Quote, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  { title: "Social License to Operate (SLO)", description: "Mendampingi perusahaan meraih legitimasi sosial.", icon: <Users className="w-8 h-8" />, features: ["Pemetaan sosial & stakeholder", "Negosiasi komunitas", "Mediasi konflik", "Monitoring penerimaan"] },
  { title: "Corporate Social Responsibility (CSR)", description: "Mendesain program berbasis kebutuhan nyata.", icon: <Target className="w-8 h-8" />, features: ["Riset kebutuhan komunitas", "Program CSR strategis", "Monitoring dampak", "Pelaporan CSR"] },
  { title: "Environment, Social, Government (ESG)", description: "Menyusun roadmap keberlanjutan.", icon: <FileText className="w-8 h-8" />, features: ["ESG assessment", "Sustainability reporting", "ESG compliance roadmap", "Due diligence"] }
];

const targetMarkets = [
  { title: "Investor Baru", description: "Proyek industri yang membutuhkan SLO.", icon: <TrendingUp className="w-6 h-6" /> },
  { title: "Perusahaan Menengah", description: "Pengelolaan CSR yang strategis.", icon: <Building2 className="w-6 h-6" /> },
  { title: "Multinasional", description: "Upgrade ke ESG compliance.", icon: <Globe className="w-6 h-6" /> },
  { title: "Pemerintah Daerah", description: "Mekanisme SLO/ESG investasi.", icon: <Landmark className="w-6 h-6" /> },
  { title: "Lembaga Keuangan", description: "Due diligence sosial.", icon: <Briefcase className="w-6 h-6" /> }
];

const stats = [
  { value: "Rp80T", label: "Anggaran CSR/tahun", sublabel: "Total dana CSR nasional" },
  { value: "20K+", label: "Izin investasi baru", sublabel: "Per tahun di Indonesia" },
  { value: "59%", label: "Konflik akibat gagal SLO", sublabel: "Dari total konflik industri" },
  { value: "51%", label: "Konflik agraria", sublabel: "Terkait operasional perusahaan" }
];

const testimonials = [
  { quote: "Skyled membantu kami menavigasi kompleksitas SLO dengan sangat profesional. Investasi kami berjalan lancar berkat pendampingan mereka.", author: "Director of Operations", company: "Mining Company" },
  { quote: "Program CSR yang dirancang Skyled benar-benar berdampak nyata bagi komunitas sekitar. Sangat strategis dan terukur.", author: "CSR Manager", company: "Manufacturing Industry" }
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skyled Pro Consulting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Membangun Kepercayaan,<br />
                <span className="text-[#1F68F5]">Mengawal Keberlanjutan.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Pionir integrasi SLO–CSR–ESG dengan end-to-end services yang berbicara pada bisnis sekaligus komunitas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#1F68F5] hover:bg-[#1a5ad4] text-white px-6 py-6 rounded-full text-base font-semibold">
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 px-6 py-6 rounded-full text-base font-semibold hover:bg-gray-50">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#1F68F5] rounded-2xl p-6 text-white">
                  <p className="text-5xl font-bold mb-2">+89%</p>
                  <p className="text-white/80 text-sm">Tingkat keberhasilan SLO klien kami</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#1F68F5] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Detailed Analytics</span>
                  </div>
                  <p className="text-gray-600 text-sm">Instant answers anytime, anywhere</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#F0F5FF] rounded-2xl p-6">
                  <Shield className="w-10 h-10 text-[#1F68F5] mb-4" />
                  <p className="font-semibold text-gray-900 mb-1">Due Diligence</p>
                  <p className="text-gray-600 text-sm">Complete compliance</p>
                </div>
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <p className="text-3xl font-bold mb-2">3.254%</p>
                  <p className="text-white/70 text-sm">Finance ROI</p>
                  <div className="mt-4 bg-[#1F68F5] text-white text-xs px-3 py-1 rounded-full inline-block">
                    Analyzing...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1F68F5] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center text-white">
                  <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="font-medium mb-1">{stat.label}</p>
                  <p className="text-white/60 text-sm">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Gap di Pasar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Ini <span className="text-[#1F68F5]">Penting?</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CSR sering hanya charity tahunan. ESG semakin ketat, tapi banyak perusahaan bingung menerapkannya. 
              </p>
              <div className="bg-[#F0F5FF] rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#1F68F5] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Skyled Hadir Mengisi Gap</h3>
                    <p className="text-gray-600 text-sm">Kami menyediakan solusi terintegrasi SLO-CSR-ESG yang komprehensif dan terukur untuk bisnis Anda.</p>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {["Pendekatan berbasis data dan riset", "Tim ahli berpengalaman 10+ tahun", "Track record dengan perusahaan multinasional"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1F68F5]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-[#1F68F5] rounded-full mb-4"></div>
                <p className="text-3xl font-bold text-gray-900">59%</p>
                <p className="text-gray-600 text-sm">Konflik industri</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1F68F5] rounded-2xl p-6 text-white text-center">
                  <p className="text-4xl font-bold">51%</p>
                  <p className="text-white/80 text-sm">Konflik agraria</p>
                </div>
                <div className="bg-gray-900 rounded-2xl p-6 text-white text-center">
                  <p className="text-2xl font-bold">20K+</p>
                  <p className="text-white/70 text-sm">Izin baru/tahun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              LAYANAN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Solusi lengkap untuk kebutuhan SLO, CSR, dan ESG perusahaan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] group-hover:bg-[#1a5ad4] transition-colors p-6 text-white">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#1F68F5] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              TARGET PASAR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Siapa yang Kami Layani</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#F0F5FF] group-hover:bg-[#1F68F5] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1F68F5] group-hover:text-white transition-colors">
                    {market.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{market.title}</h3>
                  <p className="text-gray-600 text-sm">{market.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              TESTIMONIAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#1F68F5] mb-4" />
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1F68F5] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
