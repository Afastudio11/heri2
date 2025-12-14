import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-[#1F68F5]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Perjalanan Bisnis Anda Layak Mendapat Dukungan Ahli
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Kami adalah mitra strategis Anda dalam menciptakan pengalaman luar biasa melalui manajemen event, konsultasi bisnis, dan produksi kreatif berkualitas tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#business" data-testid="link-explore-divisions">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 bg-white text-[#1F68F5] rounded-full font-bold text-base hover:bg-[#F5F8FF] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Jelajahi Layanan <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#contact" data-testid="link-contact-hero">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 bg-transparent border-2 border-white text-white rounded-full font-bold text-base hover:bg-white/10 transition-all"
                >
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md ml-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Pencapaian Kami</h3>
                <span className="text-xs text-gray-500">2024</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#F5F8FF] rounded-xl">
                  <div className="w-12 h-12 bg-[#1F68F5]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#1F68F5] font-bold">100+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Event Terselenggara</p>
                    <p className="text-sm text-gray-500">Nasional & Internasional</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#F5F8FF] rounded-xl">
                  <div className="w-12 h-12 bg-[#1F68F5]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#1F68F5] font-bold">50+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Klien Terpercaya</p>
                    <p className="text-sm text-gray-500">Kementerian & Swasta</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#F5F8FF] rounded-xl">
                  <div className="w-12 h-12 bg-[#1F68F5]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#1F68F5] font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Unit Bisnis</p>
                    <p className="text-sm text-gray-500">Terintegrasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
