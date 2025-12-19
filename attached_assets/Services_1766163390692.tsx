
import React from 'react';

const ServiceCard: React.FC<{ category: string; title: string; desc: string; icon: string; points: string[] }> = ({ category, title, desc, icon, points }) => (
  <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl flex flex-col items-center text-center group hover:border-skyled-blue transition-all">
    <div className="w-16 h-16 bg-skyled-blue/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[10px] font-extrabold text-skyled-blue uppercase tracking-widest mb-1">{category}</span>
    <h3 className="text-2xl font-black mb-4 uppercase text-slate-900">{title}</h3>
    <p className="text-sm text-slate-500 mb-8 leading-relaxed px-4">{desc}</p>
    <ul className="w-full text-left space-y-3 mb-8">
      {points.map((p, i) => (
        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="text-skyled-blue">✓</span> {p}
        </li>
      ))}
    </ul>
    <button className="text-skyled-blue text-xs font-extrabold uppercase tracking-tighter flex items-center gap-1 group-hover:underline">
      Lihat Detail Layanan
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </button>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-extrabold text-skyled-blue uppercase tracking-[0.2em]">Unit Bisnis</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Temukan Yang Anda Butuhkan</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm pt-2">Kami beroperasi melalui tiga divisi spesialis untuk menyediakan solusi terbaik di bidangnya.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            category="Skyled Pro Indonesia"
            title="Event Organizer"
            desc="Perencanaan, desain, dan eksekusi event berkualitas tinggi dengan fokus pada detail dan kreativitas."
            icon="🎟️"
            points={['Event Management & MICE', 'Crowd & Flow Management', 'Stage Production', 'Multimedia Support']}
          />
          <ServiceCard 
            category="Skyled Pro Consulting"
            title="Consulting"
            desc="Mitra strategis untuk membangun kepercayaan dan keberlanjutan bisnis melalui SLO, CSR, dan ESG."
            icon="🤝"
            points={['CSR & ESG Consulting', 'Business Strategy', 'Sustainability Roadmap', 'Compliance Audit']}
          />
          <ServiceCard 
            category="Skyled Production"
            title="Production"
            desc="Solusi tekstil dan merchandise custom berkualitas tinggi untuk mengangkat identitas brand Anda."
            icon="🛠️"
            points={['Textile Production', 'Custom Merchandise', 'Brand Identity', 'Quality Manufacturing']}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
