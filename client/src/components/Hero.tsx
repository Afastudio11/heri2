import { ArrowRight, Users, Briefcase, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[90vh] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 rounded-b-[3rem] overflow-hidden pt-32 pb-20 px-4"
      data-testid="section-hero"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Professional Event Organizer
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            Perjalanan Bisnis Anda Layak Mendapat<br />
            <span className="text-sky-200">Dukungan Ahli</span>
          </h1>

          <p className="text-lg text-blue-50 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Kami adalah mitra strategis Anda dalam menciptakan pengalaman luar biasa melalui manajemen event, konsultasi bisnis, dan produksi kreatif berkualitas tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#business" data-testid="link-explore-divisions">
              <button className="w-full sm:w-auto bg-white text-blue-600 h-12 px-8 rounded-full flex items-center justify-center gap-2 font-bold transition-all hover:bg-blue-50 shadow-lg shadow-blue-900/20">
                Jelajahi Layanan <ArrowRight size={16} />
              </button>
            </a>
            <a href="#contact" data-testid="link-contact-hero">
              <button className="w-full sm:w-auto bg-blue-700/50 hover:bg-blue-700/70 backdrop-blur-md text-white border border-white/20 h-12 px-8 rounded-full flex items-center justify-center gap-2 font-medium transition-all">
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>

        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md bg-white/90 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/80 p-8 rounded-[2rem] animate-[float_6s_ease-in-out_infinite]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">Pencapaian Kami</h3>
              <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">2024</span>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50/50 p-4 rounded-xl flex items-center gap-4 border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">100+</h4>
                  <p className="text-xs text-gray-600">Event Terselenggara (Nasional & Internasional)</p>
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl flex items-center gap-4 border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">50+</h4>
                  <p className="text-xs text-gray-600">Klien Terpercaya (Kementerian & Swasta)</p>
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl flex items-center gap-4 border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">3</h4>
                  <p className="text-xs text-gray-600">Unit Bisnis Terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
