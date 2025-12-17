import React from 'react';
import { AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';

const WhyMatters: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
         
         {/* Left: Narrative */}
         <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs tracking-wide mb-6 uppercase border border-blue-500/30">
                <ShieldAlert size={14} /> Urgensi Bisnis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Izin Formal Saja <br/><span className="text-blue-400">Tidak Cukup.</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-blue-500 pl-6">
                Banyak perusahaan merasa aman setelah memiliki NIB, OSS, AMDAL, dan IMB. Namun, proyek sering terhenti karena gagal meraih <strong className="text-white">Social License to Operate (SLO)</strong>.
            </p>

            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-1">
                        <AlertTriangle size={16} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Risiko Penolakan Warga</h4>
                        <p className="text-sm text-slate-400">Proyek terhambat atau berhenti total akibat konflik sosial.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-1">
                        <TrendingUp size={16} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Gugatan Hukum</h4>
                        <p className="text-sm text-slate-400">Biaya legal dan reputasi yang mahal untuk dipulihkan.</p>
                    </div>
                </div>
            </div>
         </div>

         {/* Right: Infographic Cards */}
         <div className="lg:w-1/2 w-full">
            <div className="relative">
                {/* Stats Card 1: Conflict */}
                <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl mb-6 relative z-10 transform transition hover:-translate-y-1 duration-300">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Statistik 2023</p>
                            <h3 className="text-xl font-bold">Sumber Konflik Agraria</h3>
                        </div>
                        <div className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs font-bold">CRITICAL</div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        {/* CSS Pie Chart Representation */}
                        <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-slate-100"
                             style={{ background: 'conic-gradient(#ef4444 0% 51%, #e2e8f0 51% 100%)' }}>
                            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center flex-col">
                                <span className="text-3xl font-black text-slate-900">51%</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-lg font-medium leading-snug">
                                Dipicu oleh <span className="text-red-600 font-bold">investasi tanpa persetujuan</span> masyarakat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Card 2: Investment */}
                <div className="bg-slate-800 text-white rounded-3xl p-8 shadow-2xl border border-slate-700 relative z-0 transform translate-x-4 -translate-y-4 lg:translate-y-0 lg:translate-x-8">
                    <p className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-2">Total Nilai Investasi (2023)</p>
                    <div className="flex items-end gap-2 mb-4">
                        <span className="text-5xl font-black text-green-400 tracking-tight">Rp1.418</span>
                        <span className="text-xl font-bold text-slate-300 mb-2">Triliun</span>
                    </div>
                    <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-green-500 to-green-300 h-full w-full rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Potensi risiko tinggi jika tanpa SLO
                    </p>
                </div>
            </div>
         </div>

      </div>
    </section>
  );
};

export default WhyMatters;