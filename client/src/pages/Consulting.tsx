import { CheckCircle, Shield, Users, Lightbulb, TrendingUp, Target, BookOpen, UserCheck, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import consultingHero from '@assets/Consulting_1765871611867.png';

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

import sloDoc1 from '@assets/Penyusunan_Dokumen_SLO_tambang_nikel_di_Papua_Barat_Daya_1765958232662.png';
import sloDoc2 from '@assets/Penyusunan_Dokumen_SLO_tambang_nikel_di_Papua_Barat_Daya1_1765958232666.png';
import sloDoc3 from '@assets/Penyusunan_Dokumen_SLO_tambang_nikel_di_Papua_Barat_Daya2_1765958232666.png';
import agiDoc1 from '@assets/Konsultansi_Program_Aksi_Generasi_Iklim_(AGI)_2025_1765958232663.png';
import agiDoc2 from '@assets/Konsultansi_Program_Aksi_Generasi_Iklim_(AGI)_20251_1765958232663.png';
import agiDoc3 from '@assets/Konsultansi_Program_Aksi_Generasi_Iklim_(AGI)_20252_1765958232662.png';

const consultingClientsRow1 = [
  { name: "Kemenko PMK", logo: kemenkoPmk, large: false },
  { name: "Kemen Investasi BKPM", logo: kemenInvestasiBkpm, large: false },
  { name: "Kemen LHK", logo: kemenLhk, large: false },
  { name: "Papua Barat Daya", logo: papuaBaratDaya, large: false },
  { name: "Tangerang Selatan", logo: tangerangSelatan, large: false },
  { name: "Kemenparekraf/Baparekraf", logo: kemenparekrafBarparekraf, large: false },
  { name: "Kemen PPPA", logo: kemenPppaLogo, large: false },
  { name: "Kemenkoperasi", logo: kemenkoperasi, large: false },
  { name: "Kemen ESDM", logo: kemenEsdm, large: false },
  { name: "KPAI", logo: kpai, large: true },
];

const consultingClientsRow2 = [
  { name: "Papua", logo: papua },
  { name: "Bangka Belitung", logo: bangkaBelitung },
  { name: "British School Jakarta", logo: bsj },
  { name: "CIFOR", logo: cifor },
  { name: "Save the Children", logo: saveTheChildren },
  { name: "LEGO", logo: lego },
  { name: "Kemen Perhubungan", logo: kemenPerhubungan },
  { name: "Maybrat", logo: maybrat },
  { name: "Sorong", logo: sorong },
  { name: "Tana Toraja", logo: tanaToraja },
];

const consultingServices = [
  { 
    title: "Sustainability Consulting", 
    description: "Penyusunan strategi keberlanjutan, pencapaian Social License to Operate (SLO), integrasi ESG, manajemen CSR, dan pelaporan keberlanjutan."
  },
  { 
    title: "Policy Research & Development", 
    description: "Pembuatan kajian kebijakan publik, policy brief, dan naskah akademik untuk mendukung kebijakan berbasis bukti."
  },
  { 
    title: "Program Design & Evaluation", 
    description: "Perencanaan dan evaluasi proyek sosial, pendidikan, lingkungan, dan ekonomi inklusif."
  }
];

const trainingServices = [
  { 
    title: "Executive & Leadership Training", 
    description: "Pengembangan kepemimpinan strategis dan manajemen perubahan, khususnya bagi direksi/komisaris BUMD."
  },
  { 
    title: "Policy & Governance Training", 
    description: "Pelatihan teknis perumusan kebijakan berbasis bukti bagi aparatur pemerintah dan NGO."
  },
  { 
    title: "Sustainability & ESG Training", 
    description: "Pembekalan bagi pelaku usaha dan divisi CSR terkait penerapan prinsip Environmental, Social, and Governance."
  }
];

const advisingServices = [
  { 
    title: "Strategic Advisor for Leadership", 
    description: "Pendampingan pimpinan organisasi dalam menentukan arah kebijakan, inovasi, dan tata kelola."
  },
  { 
    title: "Public Policy Advisor", 
    description: "Dukungan analisis dan strategi komunikasi kebijakan untuk lembaga pemerintah dan think tank."
  }
];

const methodology = [
  { 
    title: "Insight", 
    description: "Menggali data dan riset mendalam untuk memahami tantangan nyata.",
    icon: Lightbulb
  },
  { 
    title: "Capacity", 
    description: "Meningkatkan kemampuan individu dan organisasi untuk merespons tantangan tersebut.",
    icon: TrendingUp
  },
  { 
    title: "Impact", 
    description: "Mengubah wawasan dan kapasitas menjadi tindakan nyata yang bermanfaat bagi manusia dan lingkungan.",
    icon: Target
  }
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
                Skyled Consulting
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Mengapa Izin Formal Saja<br />
                <span className="text-[#1F68F5]">Tidak Pernah Cukup?</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Banyak perusahaan merasa aman setelah memiliki NIB, OSS, AMDAL, dan IMB. Namun, saat proyek dimulai, penolakan warga dan gugatan hukum tetap muncul karena perusahaan gagal meraih <strong>Social License to Operate (SLO)</strong>.
              </p>
              <div className="bg-[#FFF8E6] border-l-4 border-[#F5A623] p-4 rounded-r-lg mb-8">
                <p className="text-gray-700">
                  Di Indonesia, investasi sebesar <strong>Rp1.418 triliun</strong> pada 2023 diiringi dengan fakta bahwa <strong>51% konflik agraria</strong> dipicu oleh investasi tanpa persetujuan masyarakat.
                </p>
              </div>
              
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
                    <p className="font-semibold text-gray-900 text-sm">Solusi Terintegrasi</p>
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

      {/* Layanan Strategis Section */}
      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              LAYANAN STRATEGIS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Strategis Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Skyled Consulting hadir sebagai bagian dari Segara Impact Lab untuk memberikan solusi terintegrasi melalui tiga pilar utama
            </p>
          </div>

          {/* 1. Consulting */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1F68F5] rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1. Consulting</h3>
                <p className="text-gray-600">Konsultasi Strategis</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 ml-16">
              Kami memberikan solusi berbasis data untuk perencanaan dan evaluasi program pembangunan.
            </p>
            <div className="grid md:grid-cols-3 gap-4 ml-16">
              {consultingServices.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2. Training */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1F68F5] rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">2. Training</h3>
                <p className="text-gray-600">Pelatihan Penguatan Kapasitas</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 ml-16">
              Membangun kapasitas organisasi agar mampu beradaptasi dan berinovasi dalam menghadapi tantangan yang dinamis.
            </p>
            <div className="grid md:grid-cols-3 gap-4 ml-16">
              {trainingServices.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 3. Advising */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#1F68F5] rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">3. Advising</h3>
                <p className="text-gray-600">Pendampingan Strategis</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 ml-16">
              Mendampingi pimpinan dalam pengambilan keputusan dan transformasi organisasi jangka panjang.
            </p>
            <div className="grid md:grid-cols-2 gap-4 ml-16 max-w-2xl">
              {advisingServices.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodologi Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              METODOLOGI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insight, Capacity, Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami bekerja dengan pendekatan tiga tahap untuk memastikan hasil yang terukur
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1F68F5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              PORTOFOLIO TERPILIH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek Strategis (2025)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami telah dipercaya oleh berbagai institusi</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img src={sloDoc1} alt="SLO Documentation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg text-white">Dokumen SLO Tambang Nikel</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    <img src={sloDoc2} alt="SLO Doc 2" className="w-16 h-12 object-cover rounded" />
                    <img src={sloDoc3} alt="SLO Doc 3" className="w-16 h-12 object-cover rounded" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Penyusunan dokumen SLO tambang nikel di Papua Barat Daya</p>
                  <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                    <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                    Papua Barat Daya
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img src={agiDoc1} alt="AGI Documentation" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-lg text-white">Program Aksi Generasi Iklim</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    <img src={agiDoc2} alt="AGI Doc 2" className="w-16 h-12 object-cover rounded" />
                    <img src={agiDoc3} alt="AGI Doc 3" className="w-16 h-12 object-cover rounded" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Konsultansi Program Aksi Generasi Iklim (AGI)</p>
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

      {/* Client Section */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              SEKTOR PUBLIK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dipercaya oleh Institusi Terkemuka</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kemenko PMK, Kementerian Investasi/BKPM, KLHK, dan berbagai Pemerintah Daerah</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center animate-marquee-left">
              {[...consultingClientsRow1, ...consultingClientsRow1, ...consultingClientsRow1, ...consultingClientsRow1].map((client, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-center mx-8 flex-shrink-0 ${client.large ? 'h-20 md:h-28' : 'h-12 md:h-14'}`}
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1F68F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Meraih Social License to Operate?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/6287883184796" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3 h-auto rounded-full text-base font-semibold">
                Hubungi via WhatsApp
              </Button>
            </a>
            <a href="mailto:cv.skyledproindonesia@gmail.com">
              <Button variant="outline" className="border-white text-white px-8 py-3 h-auto rounded-full text-base font-semibold hover:bg-white/10">
                Kirim Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
