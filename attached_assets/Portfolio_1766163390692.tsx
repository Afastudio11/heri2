
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const filters = ['Semua', 'International Event', 'Government Event', 'Corporate Event'];

  const projects = [
    {
      title: 'ASEAN Blue Economy Forum',
      category: 'International Event',
      desc: 'Pertemuan Menteri Ekonomi ASEAN 2023 di Belitung.',
      tags: ['MICE', 'Belitung', 'Regional'],
      icon: '🌐'
    },
    {
      title: 'Roadmap Blue Economy Indonesia',
      category: 'Government Event',
      desc: 'Peluncuran buku Roadmap bersama Bappenas RI.',
      tags: ['Bappenas', 'Nasional'],
      icon: '📈'
    },
    {
      title: 'UNESCO Global Geopark Forum',
      category: 'International Event',
      desc: 'Forum pemuda global di Geopark Belitung.',
      tags: ['Youth', 'Global'],
      icon: '🏛️'
    },
    {
      title: 'Digital Transformation Forum',
      category: 'Corporate Event',
      desc: 'Insight sharing bersama 6 sektor strategis nasional.',
      tags: ['Digital', 'Corporate'],
      icon: '💻'
    }
  ];

  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-extrabold text-skyled-blue uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl font-black text-slate-900">Event Yang Telah Kami Tangani</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Dari pertemuan tingkat menteri hingga festival internasional, kami telah dipercaya menangani berbagai event prestisius.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === f 
                    ? 'bg-skyled-blue text-white shadow-lg shadow-skyled-blue/20' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <div key={i} className="group flex flex-col h-full rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video bg-slate-50 flex items-center justify-center text-6xl group-hover:bg-skyled-blue/5 transition-colors">
                {p.icon}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold bg-skyled-blue text-white px-2 py-0.5 rounded-md">{p.category}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-skyled-blue transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-400">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
