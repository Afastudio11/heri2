import { CheckCircle, Shield, Users, Lightbulb, TrendingUp, Target, BookOpen, UserCheck, FileText, ChevronLeft, ChevronRight, AlertTriangle, Scale, MessageSquare, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

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
import iproDoc1 from '@assets/Penyusunan_Dokumen_IPRO_4_sektor_di_Provinsi_Papua_Barat_Daya_1765958232665.png';
import iproDoc2 from '@assets/Penyusunan_Dokumen_IPRO_4_sektor_di_Provinsi_Papua_Barat_Daya1_1765958232665.png';
import iproDoc3 from '@assets/Penyusunan_Dokumen_IPRO_4_sektor_di_Provinsi_Papua_Barat_Daya2_1765958232665.png';
import desaWisataDoc1 from '@assets/Konsultansi_Kelembagaan_Desa_Wisata_dan_Koperasi_Merah_Putih_1765958232665.png';
import desaWisataDoc2 from '@assets/Konsultansi_Kelembagaan_Desa_Wisata_dan_Koperasi_Merah_Putih1_1765958232664.png';
import desaWisataDoc3 from '@assets/Konsultansi_Kelembagaan_Desa_Wisata_dan_Koperasi_Merah_Putih2_1765958232664.png';
import opopDoc1 from '@assets/Penyusunan_dan_Penerbitan_buku_OPOP_Jawa_Timur_1765958232664.png';
import opopDoc2 from '@assets/Penyusunan_dan_Penerbitan_buku_OPOP_Jawa_Timur1_1765958232664.png';
import opopDoc3 from '@assets/Penyusunan_dan_Penerbitan_buku_OPOP_Jawa_Timur2_1765958232663.png';
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

const portfolioProjects = [
  {
    title: "Dokumen SLO Tambang Nikel",
    description: "Penyusunan Dokumen Social License to Operate untuk tambang nikel di Papua Barat Daya",
    location: "Papua Barat Daya",
    images: [sloDoc1, sloDoc2, sloDoc3]
  },
  {
    title: "Dokumen IPRO 4 Sektor",
    description: "Penyusunan Dokumen IPRO untuk 4 sektor di Provinsi Papua Barat Daya",
    location: "Papua Barat Daya",
    images: [iproDoc1, iproDoc2, iproDoc3]
  },
  {
    title: "Kelembagaan Desa Wisata",
    description: "Konsultansi Kelembagaan Desa Wisata dan Koperasi Merah Putih",
    location: "Nasional",
    images: [desaWisataDoc1, desaWisataDoc2, desaWisataDoc3]
  },
  {
    title: "Buku OPOP Jawa Timur",
    description: "Penyusunan dan Penerbitan buku OPOP (One Pesantren One Product) Jawa Timur",
    location: "Jawa Timur",
    images: [opopDoc1, opopDoc2, opopDoc3]
  },
  {
    title: "Program Aksi Generasi Iklim",
    description: "Konsultansi Program Aksi Generasi Iklim (AGI) 2025",
    location: "Nasional",
    images: [agiDoc1, agiDoc2, agiDoc3]
  }
];

function ImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-64 md:h-72 overflow-hidden group">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-opacity duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            data-testid={`button-carousel-dot-${idx}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-bold text-lg text-white">{title}</h3>
      </div>
    </div>
  );
}

export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Original Style */}
      <section className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 md:py-16">
            <div>
              <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skyled Pro Consulting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Consulting.<br />
                <span className="text-[#1F68F5] italic">Sustainable Growth.</span>
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

      {/* Mengapa Izin Formal Tidak Cukup Section */}
      <section className="py-16 md:py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#1F68F5]/50 text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4" />
                URGENSI BISNIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Izin Formal Saja<br />
                <span className="text-gray-400">Tidak Cukup.</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Banyak perusahaan merasa aman setelah memiliki NIB, OSS, AMDAL, dan IMB. Namun, proyek sering terhenti karena gagal meraih <strong className="text-white">Social License to Operate (SLO)</strong>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-1">Risiko Penolakan Warga</h4>
                    <p className="text-gray-500 text-sm">Proyek terhambat atau berhenti total akibat konflik sosial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-1">Gugatan Hukum</h4>
                    <p className="text-gray-500 text-sm">Biaya legal dan reputasi yang mahal untuk dipulihkan.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium tracking-wider mb-1">STATISTIK 2023</p>
                    <h4 className="text-lg font-bold text-gray-900">Sumber Konflik Agraria</h4>
                  </div>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">CRITICAL</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative w-28 h-28">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="123" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">51%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dipicu oleh <span className="text-red-500 font-semibold">investasi tanpa persetujuan</span> masyarakat.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xs text-gray-500 font-medium tracking-wider mb-2">TOTAL NILAI INVESTASI (2023)</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-[#1F68F5]">Rp1.418</span>
                  <span className="text-xl text-gray-600">Triliun</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-[#1F68F5] to-green-500 h-2 rounded-full" style={{width: '51%'}}></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-gray-500 text-sm">Potensi risiko tinggi jika tanpa SLO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Strategis Section */}
      <section className="py-16 md:py-20 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#1F68F5] font-semibold text-sm tracking-wider mb-3">SOLUSI TERINTEGRASI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Strategis</h2>
          </div>

          {/* Consulting Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-right flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Consulting</h3>
                <p className="text-gray-500 text-sm mb-4">Konsultasi Strategis</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Solusi berbasis data untuk perencanaan dan evaluasi program pembangunan yang berkelanjutan.
                </p>
              </div>
              <div className="w-14 h-14 bg-[#1F68F5] rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>
            </div>
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {consultingServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1F68F5] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                        <p className="text-gray-500 text-xs">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-l-4 border-l-[#1F68F5] border-t-0 border-r-0 border-b-0 bg-[#F0F5FF] lg:order-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {trainingServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-end gap-3">
                      <div className="text-right">
                        <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                        <p className="text-gray-500 text-xs">{service.description}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#1F68F5] flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex items-start gap-6 lg:order-2">
              <div className="w-14 h-14 bg-[#1F68F5] rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Training</h3>
                <p className="text-gray-500 text-sm mb-4">Penguatan Kapasitas</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Membangun kapasitas organisasi untuk beradaptasi dan berinovasi dalam tantangan dinamis.
                </p>
              </div>
            </div>
          </div>

          {/* Advising Row */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Advising</h3>
              <p className="text-gray-500 text-sm mb-4">Pendampingan Strategis</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Mendampingi pimpinan dalam pengambilan keputusan dan transformasi organisasi jangka panjang.
              </p>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-[#1F68F5] rounded-2xl flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <Card className="border border-gray-200 bg-white flex-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {advisingServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1F68F5] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                          <p className="text-gray-500 text-xs">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologi Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Metodologi Kami</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Pendekatan tiga tahap yang terintegrasi untuk hasil maksimal.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { icon: <Lightbulb size={28} />, title: "Insight", desc: "Riset mendalam & data driven.", color: "bg-blue-600" },
                { icon: <TrendingUp size={28} />, title: "Capacity", desc: "Peningkatan skill organisasi.", color: "bg-indigo-600" },
                { icon: <Target size={28} />, title: "Impact", desc: "Tindakan nyata & terukur.", color: "bg-green-600" }
              ].map((step, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-slate-200 text-slate-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm z-20">
                    STEP 0{index + 1}
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center h-full group-hover:-translate-y-2">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {index < 2 && (
                    <div className="md:hidden flex justify-center py-4 text-slate-300">
                      <ArrowRight className="rotate-90 md:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F5FF] text-[#1F68F5] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              PORTOFOLIO TERPILIH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek Strategis (2025)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kami telah dipercaya oleh berbagai institusi</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group" data-testid={`card-project-${index}`}>
                <CardContent className="p-0">
                  <ImageCarousel images={project.images} title={project.title} />
                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-[#1F68F5] text-sm font-semibold">
                      <span className="w-2 h-2 bg-[#1F68F5] rounded-full"></span>
                      {project.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 md:py-20 bg-[#FAFBFC] overflow-hidden">
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
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFBFC] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFBFC] to-transparent z-10" />
          
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
