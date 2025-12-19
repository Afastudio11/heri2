
import React from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center md:text-left">
    <h4 className="text-4xl font-extrabold mb-1">{value}</h4>
    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 py-12 border-y border-slate-100">
          <StatItem value="160k+" label="Active Users" />
          <StatItem value="+12.9%" label="Avg. Portfolios Gain" />
          <StatItem value="14" label="Winning Awards" />
          <div className="hidden lg:block text-slate-200">
             <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M10 50L30 30L40 40L55 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="55" cy="15" r="4" fill="currentColor" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
