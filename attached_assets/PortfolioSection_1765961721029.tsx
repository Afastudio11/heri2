import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Dokumen SLO Tambang Nikel",
    category: "Sustainability",
    location: "Papua Barat Daya",
    image: "https://images.unsplash.com/photo-1591543620704-58330d31e15d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Dokumen IPRO 4 Sektor",
    category: "Policy",
    location: "Papua Barat Daya",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Kelembagaan Desa Wisata",
    category: "Advisory",
    location: "Nasional",
    image: "https://images.unsplash.com/photo-1572911221703-91bd76652c4b?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Buku OPOP Jawa Timur",
    category: "Publication",
    location: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Program Aksi Generasi Iklim",
    category: "Campaign",
    location: "Nasional",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
  }
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                 <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 font-bold text-xs tracking-wide mb-4 uppercase border border-blue-600/30">
                    Track Record
                </div>
                <h2 className="text-4xl font-bold mb-4">Proyek Strategis (2025)</h2>
                <p className="text-slate-400 max-w-xl text-lg">
                    Kepercayaan yang kami jawab dengan hasil nyata di lapangan.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-medium group">
                Lihat Selengkapnya <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2 block">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <MapPin size={14} /> {project.location}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
             
             {/* Call to Action Card in Grid */}
             <div className="rounded-2xl bg-blue-600 p-8 flex flex-col justify-center items-center text-center h-[400px] hover:bg-blue-700 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    <ArrowRight size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ingin Melihat Lebih Banyak?</h3>
                <p className="text-blue-100">Jelajahi portofolio lengkap kami.</p>
             </div>
        </div>
        
      </div>
    </section>
  );
};

export default PortfolioSection;