import { Briefcase } from 'lucide-react';

export default function Rewards() {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden" data-testid="section-rewards">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-yellow-500 font-bold text-sm tracking-widest uppercase mb-4">TRACK RECORD</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Menghadirkan Keunggulan di <span className="text-blue-400">Skala Nasional & Internasional</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Dari pertemuan tingkat menteri hingga festival outdoor berskala besar, portfolio kami menunjukkan fleksibilitas dan komitmen kami terhadap kualitas.
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <h4 className="font-bold text-lg mb-1">ASEAN Blue Economy Forum</h4>
                <p className="text-sm text-gray-400">Manajemen event lengkap untuk pertemuan Menteri Ekonomi ASEAN, termasuk gala dinner dan penanganan VVIP.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <h4 className="font-bold text-lg mb-1">MotoGP Mandalika Side Events</h4>
                <p className="text-sm text-gray-400">Manajemen kerumunan dan dukungan multimedia untuk event olahraga internasional.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-[2rem] border border-gray-700 shadow-2xl">
              <div className="text-5xl text-yellow-500 mb-6 font-serif">❝</div>
              
              <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                "Skyled Pro Indonesia menghadirkan kualitas dan profesionalisme luar biasa untuk summit internasional kami. Benar-benar mitra yang dapat diandalkan."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Briefcase size={20} className="text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-wider text-sm">Perwakilan Kementerian</div>
                  <div className="text-xs text-gray-500">Klien Pemerintahan</div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -right-10 w-full h-full bg-blue-600/20 rounded-[2rem] -z-10 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
