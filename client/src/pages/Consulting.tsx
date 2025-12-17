import { CheckCircle, Shield, Quote, Users, FileCheck, MapPin, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import consultingHero from '@assets/Consulting_1765871611867.png';
import iconSLO from '@assets/Social_License_to_Operate_(SLO)_1765872853363.png';
import iconCSR from '@assets/Corporate_Social_Responsibility_(CSR)_1765872853364.png';
import iconESG from '@assets/Environment,_Social,_Government_(ESG)_1765872853364.png';
import iconInvestorBaru from '@assets/Investor_Baru_1765872853364.png';
import iconPerusahaanMenengah from '@assets/Perusahaan_Menengah_1765872853366.png';
import iconMultinasional from '@assets/Multinasional_1765872853365.png';
import iconPemerintahDaerah from '@assets/Pemerintah_Daerah_1765872853365.png';
import iconLembagaKeuangan from '@assets/Lembaga_Keuangan_1765872853365.png';
import iconKonflikIndustri from '@assets/59pct_Konflik_industri_1765872969642.png';
import ceritaAwalImage from '@assets/image_1765955798711.png';
import faktaIndonesiaImage from '@assets/image_1765955809831.png';
import masalahnyaImage from '@assets/image_1765955818573.png';

const services = [
  { title: "Social License to Operate (SLO)", description: "Mendampingi perusahaan meraih legitimasi sosial.", icon: iconSLO, features: ["Pemetaan sosial & stakeholder", "Negosiasi komunitas", "Mediasi konflik", "Monitoring penerimaan"] },
  { title: "Corporate Social Responsibility (CSR)", description: "Mendesain program berbasis kebutuhan nyata.", icon: iconCSR, features: ["Riset kebutuhan komunitas", "Program CSR strategis", "Monitoring dampak", "Pelaporan CSR"] },
  { title: "Environment, Social, Government (ESG)", description: "Menyusun roadmap keberlanjutan.", icon: iconESG, features: ["ESG assessment", "Sustainability reporting", "ESG compliance roadmap", "Due diligence"] }
];

const targetMarkets = [
  { title: "Investor Baru", description: "Proyek industri yang membutuhkan SLO.", icon: iconInvestorBaru },
  { title: "Perusahaan Menengah", description: "Pengelolaan CSR yang strategis.", icon: iconPerusahaanMenengah },
  { title: "Multinasional", description: "Upgrade ke ESG compliance.", icon: iconMultinasional },
  { title: "Pemerintah Daerah", description: "Mekanisme SLO/ESG investasi.", icon: iconPemerintahDaerah },
  { title: "Lembaga Keuangan", description: "Due diligence sosial.", icon: iconLembagaKeuangan }
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
      
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skyled Pro Consulting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Consulting.<br />
                <span className="text-[#1F68F5]">Sustainable Growth.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Pionir integrasi SLO–CSR–ESG dengan end-to-end services yang berbicara pada bisnis sekaligus komunitas.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://wa.me/6287883184796" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-2 h-auto rounded-full text-sm font-semibold">
                    Hubungi via WhatsApp
                  </Button>
                </a>
                <a href="mailto:cv.skyledproindonesia@gmail.com">
                  <Button variant="outline" className="border-gray-300 text-gray-700 px-5 py-2 h-auto rounded-full text-sm font-semibold hover:bg-gray-50">
                    Kirim Email
                  </Button>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Konsultan Ahli</p>
                    <p className="text-xs text-gray-500">Berpengalaman di industri</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F5FF] rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1F68F5]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Kepatuhan Terjamin</p>
                    <p className="text-xs text-gray-500">SLO, CSR & ESG</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img src={consultingHero} alt="Consulting Services" className="w-full max-w-md object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Cerita Awal: Izin yang Tidak Cukup */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F68F5] mb-6">
                Cerita Awal: Izin yang Tidak Cukup
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Bayangkan sebuah perusahaan sudah mengantongi semua izin: NIB, OSS, AMDAL, dan IMB. Namun begitu proyek dimulai, warga sekitar menolak, muncul demo, bahkan ada gugatan hukum. Izin formal tidak lagi cukup, perusahaan juga membutuhkan izin sosial.
              </p>
              <div className="flex items-start gap-6 bg-[#F0F5FF] rounded-xl p-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <FileCheck className="w-8 h-8 text-[#1F68F5]" />
                  </div>
                </div>
                <div>
                  <span className="text-[#1F68F5] font-bold text-sm uppercase tracking-wide">DATA</span>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    Menurut riset Stronge et al. (2024), lebih dari 59% konflik investasi global dipicu karena perusahaan gagal meraih <em className="font-semibold">Social License to Operate (SLO)</em>.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={ceritaAwalImage} 
                alt="Cerita Awal - Izin yang Tidak Cukup" 
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fakta Indonesia */}
      <section className="py-16 md:py-20 bg-[#1F68F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-center mb-8">
                <svg viewBox="0 0 800 350" className="w-full max-w-md" fill="currentColor">
                  <path className="text-[#4A90D9]" d="M50,200 Q100,180 150,190 Q200,200 250,180 Q300,160 350,170 Q400,180 450,160 Q500,140 550,150 Q600,160 650,140 Q700,120 750,130 L750,250 Q700,260 650,250 Q600,240 550,250 Q500,260 450,250 Q400,240 350,250 Q300,260 250,250 Q200,240 150,250 Q100,260 50,250 Z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Fakta Indonesia
              </h2>
              <ul className="text-white space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>Rp1.418 triliun realisasi investasi pada 2023 (BKPM).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>Kota satelit seperti Tangerang Selatan, Bekasi, Karawang, bahkan wilayah di luar pulau jawa menjadi hotspot investasi baru.</span>
                </li>
              </ul>
              <p className="text-yellow-300 font-semibold italic mb-4">Namun di sisi lain</p>
              <div className="border-2 border-dashed border-white/40 rounded-xl p-5 space-y-3">
                <div className="flex items-start gap-3 text-white">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>51% konflik agraria 2023 terjadi akibat investasi tanpa persetujuan masyarakat (KPA).</span>
                </div>
                <div className="flex items-start gap-3 text-white">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>Kasus Tol Cikampek, PLTU Batang, dan pabrik di Bekasi jadi contoh nyata.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={faktaIndonesiaImage} 
                alt="Fakta Indonesia" 
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masalahnya & Disinilah Skyled Hadir */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#1F68F5] to-[#0F4FC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <img 
                src={masalahnyaImage} 
                alt="Masalahnya" 
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                Masalahnya
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                Hari ini, banyak perusahaan masih menganggap CSR cukup untuk meredam konflik masyarakat tersebut. Padahal, CSR sering hanya berupa kegiatan <em>charity</em> tahunan yang tidak menyentuh kebutuhan komunitas. Di sisi lain, trend ESG semakin ketat, tapi mayoritas perusahaan di Indonesia masih bingung menerapkannya.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-8">
                <p className="text-white leading-relaxed">
                  <span className="font-semibold text-yellow-300">Gap ini jelas:</span> tidak ada konsultan yang menjahit SLO–CSR–ESG menjadi satu alur strategi berkelanjutan.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1F68F5] mb-4 bg-white rounded-lg px-4 py-2 inline-block">
                Disinilah Skyled Hadir
              </h3>
              <p className="text-white mb-6">
                Skyled Pro Consulting dibangun untuk mengisi gap tersebut
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-[#1F68F5] shadow-lg">
                  <h4 className="text-[#1F68F5] font-bold text-sm mb-3">Social License to Operate (SLO)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mendampingi perusahaan meraih legitimasi sosial sebelum memulai operasi dan mempertahankannya.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-[#1F68F5] shadow-lg">
                  <h4 className="text-[#1F68F5] font-bold text-sm mb-3">Corporate Social Responsibility (CSR) / Corporate Community Responsibility (CCR)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mendesain program berbasis kebutuhan nyata, bukan sekadar <em>charity</em>.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-[#1F68F5] shadow-lg">
                  <h4 className="text-[#1F68F5] font-bold text-sm mb-3">Environment, Social, Government (ESG)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menyusun roadmap dan laporan keberlanjutan sesuai standar global.
                  </p>
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
                <img src={iconKonflikIndustri} alt="Konflik industri" className="w-24 h-24 object-contain mb-4" />
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
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1F68F5] transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] group-hover:bg-[#1a5ad4] transition-colors p-6 text-white relative min-h-[120px] flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                        <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#F0F5FF] text-[#1F68F5] flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3" />
                          </div>
                          <span className="text-gray-700 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
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
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <img src={market.icon} alt={market.title} className="w-20 h-20 object-contain" />
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
