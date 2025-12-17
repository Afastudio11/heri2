import { CheckCircle, Shield, Users, Lightbulb, TrendingUp, Target, BookOpen, UserCheck, FileText, ChevronLeft, ChevronRight, AlertTriangle, Scale, MessageSquare, ArrowRight, CheckCircle2, MapPin, ShieldAlert, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

import consultingHero from '@assets/Consulting_1765871611867.png';

import trainingIcon from '@assets/Training_1765963884501.png';
import advisingIcon from '@assets/Advising_1765963884501.png';
import capacityIcon from '@assets/Capacity_1765963884502.png';
import consultingIcon from '@assets/Consulting_1765963884502.png';
import impactIcon from '@assets/Impact_1765963884502.png';
import insightIcon from '@assets/Insight_1765963884502.png';

import sloIcon from '@assets/Social_License_to_Operate_(SLO)_1765964727091.png';
import csrIcon from '@assets/Corporate_Social_Responsibility_(CSR)_1765964727091.png';
import esgIcon from '@assets/Environment,_Social,_Government_(ESG)_1765964727092.png';

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

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            data-testid={`button-carousel-dot-${idx}`}
          />
        ))}
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
      {/* Mengapa Izin Formal Tidak Cukup Section */}
      <section className="py-16 md:py-20 bg-[#1E40AF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Izin Formal Saja<br />
                <span className="text-[#ffffff]">Tidak Cukup.</span>
              </h2>
              <p className="mb-8 leading-relaxed text-[#ffffff]">
                Banyak perusahaan merasa aman setelah memiliki NIB, OSS, AMDAL, dan IMB. Namun, proyek sering terhenti karena gagal meraih <strong className="text-white">Social License to Operate (SLO)</strong>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 bg-[#00000000] text-[#ffffff]">Risiko Penolakan Warga</h4>
                    <p className="text-sm text-[#ffffff]">Proyek terhambat atau berhenti total akibat konflik sosial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[#ffffff]">Gugatan Hukum</h4>
                    <p className="text-sm text-[#ffffff]">Biaya legal dan reputasi yang mahal untuk dipulihkan.</p>
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
      <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        <div className="absolute -left-64 top-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="inline-block py-1 px-3 rounded-full bg-[#F0F5FF] text-[#1F68F5] font-bold text-xs tracking-wider uppercase mb-4">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Layanan Strategis Terintegrasi
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Menjawab tantangan bisnis dan sosial melalui tiga pilar utama yang saling mendukung.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F68F5]/50 via-indigo-200 to-slate-200 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-32">
              
              {/* Service 1: Consulting */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                  <img src={consultingIcon} alt="Consulting" className="w-16 h-16 object-contain" />
                </div>

                <div className="md:hidden mb-6">
                  <img src={consultingIcon} alt="Consulting" className="w-16 h-16 object-contain" />
                </div>

                <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Consulting</h3>
                  <p className="text-[#1F68F5] font-bold tracking-wide uppercase text-sm mb-4">Konsultasi Strategis</p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Solusi berbasis data untuk perencanaan dan evaluasi program pembangunan yang berkelanjutan. Kami memastikan setiap langkah strategis Anda terukur.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-24 mt-8 md:mt-0">
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#1F68F5]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#F0F5FF] rounded-bl-full -mr-10 -mt-10"></div>
                    <ul className="space-y-6 relative z-10">
                      {consultingServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="mt-1 bg-[#F0F5FF] p-1 rounded-full text-[#1F68F5]">
                            <CheckCircle2 size={16} />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block text-lg">{service.title}</span>
                            <span className="text-slate-500">{service.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service 2: Training */}
              <div className="relative flex flex-col md:flex-row-reverse items-center group">
                <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                  <img src={trainingIcon} alt="Training" className="w-16 h-16 object-contain" />
                </div>

                <div className="md:hidden mb-6">
                  <img src={trainingIcon} alt="Training" className="w-16 h-16 object-contain" />
                </div>

                <div className="w-full md:w-1/2 md:pl-24 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Training</h3>
                  <p className="font-bold tracking-wide uppercase text-sm mb-4 text-[#1f68f5]">Penguatan Kapasitas</p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Membangun kapasitas organisasi agar mampu beradaptasi dan berinovasi. SDM yang kuat adalah kunci keberlanjutan.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2 md:pr-24 mt-8 md:mt-0">
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-50 rounded-br-full -ml-10 -mt-10"></div>
                    <ul className="space-y-6 relative z-10">
                      {trainingServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full text-[#1f68f5]">
                            <CheckCircle2 size={16} />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block text-lg">{service.title}</span>
                            <span className="text-slate-500">{service.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service 3: Advising */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                  <img src={advisingIcon} alt="Advising" className="w-16 h-16 object-contain" />
                </div>

                <div className="md:hidden mb-6">
                  <img src={advisingIcon} alt="Advising" className="w-16 h-16 object-contain" />
                </div>

                <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Advising</h3>
                  <p className="font-bold tracking-wide uppercase text-sm mb-4 text-[#1f68f5]">Pendampingan Strategis</p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Mendampingi pimpinan dalam pengambilan keputusan krusial dan transformasi organisasi jangka panjang.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-24 mt-8 md:mt-0">
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-green-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full -mr-10 -mt-10"></div>
                    <ul className="space-y-6 relative z-10">
                      {advisingServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="mt-1 p-1 rounded-full text-[#1f68f5] bg-[#1f68f540]">
                            <CheckCircle2 size={16} />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block text-lg">{service.title}</span>
                            <span className="text-slate-500">{service.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Kami Juga Dapat Memberikan Pelayanan Section */}
      <section className="py-20 bg-gradient-to-b from-[#1F68F5] to-[#1E40AF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kami juga dapat memberikan pelayanan:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SLO Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img src={sloIcon} alt="SLO" className="w-16 h-16 object-contain" />
                <h3 className="text-lg font-bold text-[#1F68F5]">Social License to Operate (SLO)</h3>
              </div>
              <p className="text-gray-600 mb-4">Mendampingi perusahaan meraih legitimasi sosial.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Pemetaan sosial & stakeholder
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Negosiasi komunitas
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Mediasi konflik
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Monitoring penerimaan
                </li>
              </ul>
            </div>

            {/* CSR Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img src={csrIcon} alt="CSR" className="w-16 h-16 object-contain" />
                <h3 className="text-lg font-bold text-[#1F68F5]">Corporate Social Responsibility (CSR)</h3>
              </div>
              <p className="text-gray-600 mb-4">Mendesain program berbasis kebutuhan nyata.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Riset kebutuhan komunitas
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Program CSR strategis
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Monitoring dampak
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Pelaporan CSR
                </li>
              </ul>
            </div>

            {/* ESG Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img src={esgIcon} alt="ESG" className="w-16 h-16 object-contain" />
                <h3 className="text-lg font-bold text-[#1F68F5]">Environment, Social, Government (ESG)</h3>
              </div>
              <p className="text-gray-600 mb-4">Menyusun roadmap keberlanjutan.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  ESG assessment
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Sustainability reporting
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  ESG compliance roadmap
                </li>
                <li className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1F68F5]" />
                  Due diligence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologi Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-2 block">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Pendekatan <span className="text-[#1F68F5]">Terukur & Berdampak</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span>End-to-end Process</span> <ArrowRight size={18}/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { icon: insightIcon, title: "Insight", desc: "Kami memulai dengan riset mendalam untuk menemukan akar masalah, bukan sekadar gejala.", accent: "border-blue-200" },
              { icon: capacityIcon, title: "Capacity", desc: "Solusi hanya efektif jika dieksekusi oleh tim yang kapabel. Kami latih tim Anda.", accent: "border-indigo-200" },
              { icon: impactIcon, title: "Impact", desc: "Tujuan akhir kami selalu tindakan nyata yang memberikan dampak positif terukur.", accent: "border-green-200" }
            ].map((step, index) => (
              <div key={index} className="group relative flex flex-col h-full">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-20 text-slate-200 transform translate-x-1/2">
                    <ChevronRightIcon size={48} strokeWidth={1} />
                  </div>
                )}

                <div className={`flex-1 bg-white p-8 rounded-3xl border-2 ${step.accent} hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 opacity-50 select-none group-hover:text-slate-100 transition-colors">
                    {index + 1}
                  </div>

                  <div className="relative z-10 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-[#1f68f5]"></div>
                </div>
                
                {index < 2 && (
                  <div className="md:hidden flex justify-center py-4 text-slate-300">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Portofolio Section */}
      <section className="py-24 bg-[#1E40AF] text-white" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Proyek Strategis (2025)</h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Kepercayaan yang kami jawab dengan hasil nyata di lapangan.
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white hover:text-[#60A5FA] transition-colors font-medium group">
              Lihat Selengkapnya <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
                {portfolioProjects.map((project, index) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px] w-[350px] flex-shrink-0" data-testid={`card-project-${index}`}>
                    <ImageCarousel images={project.images} title={project.title} />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-24 flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-[#60A5FA] font-bold text-xs uppercase tracking-wider mb-1 block">
                        {project.location}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-100 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-slate-300 text-sm mt-4">Geser untuk melihat lebih banyak →</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
