import { Link } from 'wouter';
import { ArrowLeft, CheckCircle, Target, Users, FileText, TrendingUp, Shield, Globe, Building2, Landmark, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const services = [
  {
    title: "Social License to Operate (SLO)",
    description: "Mendampingi perusahaan meraih legitimasi sosial sebelum memulai operasi dan mempertahankannya.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Pemetaan sosial & stakeholder analysis",
      "Negosiasi dengan komunitas lokal",
      "Mediasi konflik investasi",
      "Monitoring penerimaan masyarakat"
    ]
  },
  {
    title: "Corporate Social Responsibility (CSR)",
    description: "Mendesain program berbasis kebutuhan nyata, bukan sekadar charity.",
    icon: <Target className="w-8 h-8" />,
    features: [
      "Riset kebutuhan komunitas",
      "Program CSR strategis & berkelanjutan",
      "Monitoring & evaluasi dampak",
      "Pelaporan CSR terstruktur"
    ]
  },
  {
    title: "Environment, Social, Government (ESG)",
    description: "Menyusun roadmap dan laporan keberlanjutan sesuai standar global.",
    icon: <FileText className="w-8 h-8" />,
    features: [
      "ESG assessment & gap analysis",
      "Sustainability reporting (GRI, SASB)",
      "ESG compliance roadmap",
      "Investor ESG due diligence"
    ]
  }
];

const targetMarkets = [
  {
    title: "Investor Baru / Greenfield Projects",
    description: "Proyek industri baru yang masih dalam tahap perizinan. Mereka paling membutuhkan SLO agar diterima masyarakat sejak awal.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Perusahaan Menengah",
    description: "Perusahaan yang sudah menjalankan CSR secara sporadis dan membutuhkan pengelolaan CSR yang strategis.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Perusahaan Besar / Multinasional",
    description: "Korporasi yang perlu upgrade ke ESG compliance untuk bersaing di pasar nasional dan global.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Pemerintah Daerah & Kawasan Industri",
    description: "Pemerintah yang ingin mencegah konflik investasi dengan mekanisme SLO/ESG sebagai syarat investasi.",
    icon: <Landmark className="w-6 h-6" />
  },
  {
    title: "Investor & Lembaga Keuangan Global",
    description: "Lembaga yang membutuhkan mitra konsultan untuk melakukan due diligence sosial.",
    icon: <Briefcase className="w-6 h-6" />
  }
];

const stats = [
  { value: "Rp80T", label: "Anggaran CSR setiap tahun" },
  { value: "20.000+", label: "Izin investasi baru per tahun" },
  { value: "59%", label: "Konflik global dipicu gagal meraih SLO" },
  { value: "51%", label: "Konflik agraria akibat investasi tanpa persetujuan" }
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <div className="max-w-4xl py-12 md:py-20">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">Skyled Pro Consulting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Membangun Kepercayaan, Mengawal Keberlanjutan Bisnis Anda
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Pionir integrasi SLO–CSR–ESG, end-to-end services yang berbicara pada bisnis sekaligus komunitas.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Ini Penting?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Izin formal tidak lagi cukup. Perusahaan juga membutuhkan izin sosial untuk operasi yang berkelanjutan.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gap di Pasar</h3>
                <p className="text-slate-700">
                  Banyak perusahaan masih menganggap CSR cukup untuk meredam konflik masyarakat. Padahal, CSR sering hanya berupa kegiatan charity tahunan yang tidak menyentuh kebutuhan komunitas. 
                  Di sisi lain, trend ESG semakin ketat, tapi mayoritas perusahaan di Indonesia masih bingung menerapkannya.
                  <strong className="block mt-2">Skyled hadir untuk mengisi gap tersebut.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tiga pilar layanan terintegrasi untuk keberlanjutan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-6 text-white">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{feature}</span>
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

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Target Pasar</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami melayani berbagai segmen yang membutuhkan legitimasi sosial dan keberlanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                    {market.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{market.title}</h3>
                  <p className="text-slate-600 text-sm">{market.description}</p>
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
