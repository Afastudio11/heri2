import React from 'react';
import { Check, User, Activity, ShieldCheck } from './ui/Icons';

export const Collection: React.FC = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 bg-white">
      
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Skyled Pro Indonesia - Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa
          </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Content: Description */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Tentang Perusahaan</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            <span className="font-bold text-gray-900">Skyled Pro Indonesia</span> adalah perusahaan event organizer dan production terkemuka yang dikenal karena keahlian dan inovasinya dalam menciptakan event berkualitas tinggi. Kami menangani setiap aspek perencanaan, desain, dan eksekusi event dengan fokus pada detail dan kreativitas.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Kami telah dipercaya menangani berbagai event prestisius, mulai dari ASEAN Blue Economy Forum, UNESCO Global Geopark Youth Forum, hingga Side Event MotoGP Mandalika.
          </p>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-xs text-gray-600">Event Terselenggara</div>
             </div>
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-xs text-gray-600">Klien Terpercaya</div>
             </div>
          </div>
        </div>

        {/* Right Visual: Visi & Misi */}
        <div className="flex-1 w-full space-y-6">
            
            {/* Visi Card */}
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl shadow-blue-600/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity size={20} /> Visi
                </h3>
                <p className="text-blue-50 italic leading-relaxed">
                    "Menjadi nama terdepan di industri event organizer dengan mengutamakan inovasi, kreativitas, dan kualitas tinggi, serta menciptakan pengalaman event yang tak terlupakan."
                </p>
            </div>

            {/* Misi Card */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Misi</h3>
                <ul className="space-y-4">
                    {[
                        "Memberikan layanan berkualitas tinggi",
                        "Mewujudkan visi klien dengan presisi",
                        "Menciptakan pengalaman tak terlupakan",
                        "Menjaga standar etika dan profesional"
                    ].map((misi, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            {misi}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>

      {/* Values Row */}
      <div className="mt-20 grid md:grid-cols-3 gap-6">
         <ValueCard 
            icon={<User size={24} />} 
            title="Fokus Klien" 
            desc="Kami mengutamakan visi dan kepuasan Anda di atas segalanya." 
         />
         <ValueCard 
            icon={<Activity size={24} />} 
            title="Kreativitas" 
            desc="Solusi inovatif yang disesuaikan dengan kebutuhan unik." 
         />
         <ValueCard 
            icon={<ShieldCheck size={24} />} 
            title="Integritas" 
            desc="Menjaga standar etika dan profesionalisme tertinggi." 
         />
      </div>

    </div>
  );
};

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);