import { CheckCircle, Shield, Quote, Users, FolderOpen } from 'lucide-react';
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

import kemenparekrafBarparekraf from '../assets/clients/kemenparekraf_baparekraf.png';
import kemenPppaLogo from '../assets/clients/kemen_pppa_logo.png';
import papuaBaratDaya from '../assets/clients/papua_barat_daya.png';
import kemenkoperasi from '../assets/clients/kemenkoperasi.png';
import kemenInvestasiBkpm from '../assets/clients/kemen_investasi_bkpm.png';
import kemenEsdm from '../assets/clients/kemen_esdm.png';
import kemenLhk from '../assets/clients/kemen_lhk.png';
import kpai from '../assets/clients/kpai.png';
import kemenPerhubungan from '../assets/clients/kemen_perhubungan.png';
import kemenkoPmk from '../assets/clients/kemenko_pmk.png';
import papua from '../assets/clients/papua.png';
import bangkaBelitung from '../assets/clients/bangka_belitung.png';
import bsj from '../assets/clients/bsj.png';
import cifor from '../assets/clients/cifor.png';
import saveTheChildren from '../assets/clients/save_the_children.png';
import lego from '../assets/clients/lego.png';
import tangerangSelatan from '../assets/clients/tangerang_selatan.png';
import maybrat from '../assets/clients/maybrat.jpg';
import sorong from '../assets/clients/sorong.png';
import tanaToraja from '../assets/clients/tana_toraja.webp';

const consultingClientsRow1 = [
  { name: "Kemenparekraf/Baparekraf", logo: kemenparekrafBarparekraf, large: false },
  { name: "Kemen PPPA", logo: kemenPppaLogo, large: false },
  { name: "Papua Barat Daya", logo: papuaBaratDaya, large: false },
  { name: "Kemenkoperasi", logo: kemenkoperasi, large: false },
  { name: "Kemen Investasi BKPM", logo: kemenInvestasiBkpm, large: false },
  { name: "Kemen ESDM", logo: kemenEsdm, large: false },
  { name: "Kemen LHK", logo: kemenLhk, large: false },
  { name: "KPAI", logo: kpai, large: true },
  { name: "Kemen Perhubungan", logo: kemenPerhubungan, large: false },
  { name: "Kemenko PMK", logo: kemenkoPmk, large: false },
];

const consultingClientsRow2 = [
  { name: "Papua", logo: papua },
  { name: "Bangka Belitung", logo: bangkaBelitung },
  { name: "British School Jakarta", logo: bsj },
  { name: "CIFOR", logo: cifor },
  { name: "Save the Children", logo: saveTheChildren },
  { name: "LEGO", logo: lego },
  { name: "Tangerang Selatan", logo: tangerangSelatan },
  { name: "Maybrat", logo: maybrat },
  { name: "Sorong", logo: sorong },
  { name: "Tana Toraja", logo: tanaToraja },
];

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
      
      {/* Hero Section */}
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

      {/* Gap di Pasar Section */}
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

      {/* Client Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              KLIEN KAMI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dipercaya oleh Institusi Terkemuka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami telah bekerja sama dengan berbagai kementerian dan lembaga pemerintah dalam proyek strategis</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex flex-col gap-6">
            <div className="flex animate-marquee-left">
              {[...consultingClientsRow1, ...consultingClientsRow1, ...consultingClientsRow1, ...consultingClientsRow1].map((client, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-center mx-8 flex-shrink-0 ${client.large ? 'h-20 md:h-28' : 'h-12 md:h-14'}`}
                  data-testid={`logo-consulting-row1-${i}`}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className={`h-full w-auto object-contain ${client.large ? 'max-w-[240px] md:max-w-[300px]' : 'max-w-[120px] md:max-w-[140px]'}`}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex animate-marquee-right">
              {[...consultingClientsRow2, ...consultingClientsRow2, ...consultingClientsRow2, ...consultingClientsRow2].map((client, i) => (
                <div 
                  key={i} 
                  className="h-12 md:h-14 flex items-center justify-center mx-8 flex-shrink-0"
                  data-testid={`logo-consulting-row2-${i}`}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-full w-auto object-contain max-w-[120px] md:max-w-[140px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              PORTOFOLIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek Terkini (2025)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Berbagai proyek strategis yang telah kami kerjakan bersama mitra</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="bg-[#1F68F5] p-6 text-white">
                  <FolderOpen className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-lg">Dokumen SLO Tambang Nikel</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Penyusunan Dokumen Social License to Operate untuk tambang nikel di Papua Barat Daya</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Papua Barat Daya
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="bg-[#1F68F5] p-6 text-white">
                  <FolderOpen className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-lg">Dokumen IPRO 4 Sektor</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Penyusunan Dokumen IPRO untuk 4 sektor di Provinsi Papua Barat Daya</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Papua Barat Daya
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="bg-[#1F68F5] p-6 text-white">
                  <FolderOpen className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-lg">Kelembagaan Desa Wisata</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Konsultansi Kelembagaan Desa Wisata dan Koperasi Merah Putih</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Nasional
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="bg-[#1F68F5] p-6 text-white">
                  <FolderOpen className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-lg">Buku OPOP Jawa Timur</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Penyusunan dan Penerbitan buku OPOP (One Pesantren One Product) Jawa Timur</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Jawa Timur
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="bg-[#1F68F5] p-6 text-white">
                  <FolderOpen className="w-10 h-10 mb-4" />
                  <h3 className="font-bold text-lg">Program Aksi Generasi Iklim</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Konsultansi Program Aksi Generasi Iklim (AGI) 2025</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Nasional
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Layanan Kami Section */}
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

      {/* Stats Section */}
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

      {/* Target Pasar Section */}
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

      {/* Testimonial Section */}
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
