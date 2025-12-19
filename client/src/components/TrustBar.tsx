import React from 'react';

const TrustBar: React.FC = () => {
  const logos = [
    { name: 'BUMN', icon: '🏢' },
    { name: 'Pertamina', icon: '⛽' },
    { name: 'BNI', icon: '🏦' },
    { name: 'ITDC', icon: '🏞️' },
    { name: 'Kominfo', icon: '📡' },
    { name: 'UNESCO', icon: '🏛️' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Dipercaya oleh instansi terkemuka</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-bold text-slate-900">{logo.name}</span>
            </div>
          ))}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-2">
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-bold text-slate-900">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
