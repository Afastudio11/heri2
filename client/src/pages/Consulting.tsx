import { Link } from 'wouter';
import { CheckCircle, Target, Users, FileText, TrendingUp, Shield, Globe, Building2, Landmark, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
  { value: "Rp80T", label: "Anggaran CSR/tahun" },
  { value: "20K+", label: "Izin investasi baru" },
  { value: "59%", label: "Konflik akibat gagal SLO" },
  { value: "51%", label: "Konflik agraria" }
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <div className="bg-[#1F68F5] text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl py-12 md:py-20">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6"><span className="text-sm font-semibold">Skyled Pro Consulting</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Membangun Kepercayaan, Mengawal Keberlanjutan</h1>
            <p className="text-xl text-white/90 leading-relaxed">Pionir integrasi SLO–CSR–ESG, end-to-end services yang berbicara pada bisnis sekaligus komunitas.</p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Ini Penting?</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg"><CardContent className="p-6"><div className="text-3xl font-bold text-[#1F68F5] mb-2">{stat.value}</div><div className="text-sm text-gray-600">{stat.label}</div></CardContent></Card>
            ))}
          </div>
          <div className="bg-[#F5F8FF] rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-[#1F68F5] flex-shrink-0" />
              <div><h3 className="text-xl font-bold text-gray-900 mb-2">Gap di Pasar</h3><p className="text-gray-700">CSR sering hanya charity tahunan. ESG semakin ketat, tapi banyak perusahaan bingung menerapkannya. <strong>Skyled hadir mengisi gap tersebut.</strong></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-[#1F68F5] p-6 text-white">{service.icon}<h3 className="text-xl font-bold mt-4">{service.title}</h3></div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">{service.features.map((f, i) => <li key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#1F68F5] flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{f}</span></li>)}</ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Target Pasar</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="border border-gray-200 hover:border-[#1F68F5] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F5F8FF] rounded-lg flex items-center justify-center text-[#1F68F5] mb-4">{market.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{market.title}</h3>
                  <p className="text-gray-600 text-sm">{market.description}</p>
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
