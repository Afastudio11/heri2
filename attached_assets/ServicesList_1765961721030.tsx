import React from 'react';
import { FileText, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesList: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
       <div className="absolute -left-64 top-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
       <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4">
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
            {/* Center Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-slate-200 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-32">
                
                {/* Service 1 */}
                <div className="relative flex flex-col md:flex-row items-center group">
                    {/* Icon Marker */}
                    <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                             <FileText size={28} />
                        </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                        <FileText size={28} />
                    </div>

                    {/* Content Left */}
                    <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">Consulting</h3>
                        <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-4">Konsultasi Strategis</p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Solusi berbasis data untuk perencanaan dan evaluasi program pembangunan yang berkelanjutan. Kami memastikan setiap langkah strategis Anda terukur.
                        </p>
                    </div>
                    
                    {/* Content Right (Cards) */}
                    <div className="w-full md:w-1/2 md:pl-24 mt-8 md:mt-0">
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10"></div>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Sustainability Consulting</span>
                                        <span className="text-slate-500">Penyusunan strategi keberlanjutan & SLO.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Policy Research</span>
                                        <span className="text-slate-500">Kajian kebijakan publik & policy brief.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Program Design</span>
                                        <span className="text-slate-500">Evaluasi proyek sosial & lingkungan.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="relative flex flex-col md:flex-row-reverse items-center group">
                    {/* Icon Marker */}
                    <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                             <BookOpen size={28} />
                        </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-200">
                        <BookOpen size={28} />
                    </div>

                    {/* Content Right */}
                    <div className="w-full md:w-1/2 md:pl-24 text-center md:text-left">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">Training</h3>
                        <p className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-4">Penguatan Kapasitas</p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Membangun kapasitas organisasi agar mampu beradaptasi dan berinovasi. SDM yang kuat adalah kunci keberlanjutan.
                        </p>
                    </div>
                    
                    {/* Content Left (Cards) */}
                    <div className="w-full md:w-1/2 md:pr-24 mt-8 md:mt-0">
                         <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-50 rounded-br-full -ml-10 -mt-10"></div>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                                    <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Executive Leadership</span>
                                        <span className="text-slate-500">Manajemen perubahan strategis.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                                    <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Policy & Governance</span>
                                        <span className="text-slate-500">Perumusan kebijakan berbasis bukti.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                                    <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">ESG Training</span>
                                        <span className="text-slate-500">Prinsip lingkungan & tata kelola.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="relative flex flex-col md:flex-row items-center group">
                    {/* Icon Marker */}
                    <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-slate-100 shadow-xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white">
                             <Users size={28} />
                        </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                        <Users size={28} />
                    </div>

                    {/* Content Left */}
                    <div className="w-full md:w-1/2 md:pr-24 text-center md:text-right">
                        <h3 className="text-3xl font-bold text-slate-900 mb-3">Advising</h3>
                        <p className="text-green-600 font-bold tracking-wide uppercase text-sm mb-4">Pendampingan Strategis</p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Mendampingi pimpinan dalam pengambilan keputusan krusial dan transformasi organisasi jangka panjang.
                        </p>
                    </div>
                    
                    {/* Content Right (Cards) */}
                    <div className="w-full md:w-1/2 md:pl-24 mt-8 md:mt-0">
                         <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-green-200 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full -mr-10 -mt-10"></div>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Strategic Advisor</span>
                                        <span className="text-slate-500">Arah kebijakan & inovasi.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <span className="font-bold text-slate-900 block text-lg">Public Policy</span>
                                        <span className="text-slate-500">Analisis & strategi komunikasi.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;