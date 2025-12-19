
import React from 'react';

const Step: React.FC<{ num: string; title: string; desc: string; icon: string; reverse?: boolean }> = ({ num, title, desc, icon, reverse }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-4">
      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg">{num}</span>
      <h3 className="text-3xl font-extrabold">{title}</h3>
      <p className="text-slate-500 leading-relaxed max-w-sm">{desc}</p>
    </div>
    <div className="flex-1 w-full flex justify-center">
      <div className="w-full max-w-[400px] aspect-video bg-white rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center text-7xl p-8">
        {icon}
      </div>
    </div>
  </div>
);

const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mb-4">⚙️ How it works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Kick Off Your Journey in Just Three Simple Steps!</h2>
        </div>
        <div className="space-y-32">
          <Step 
            num="01"
            title="Sign Up"
            desc="Getting started is quick and secure. Create your free FlowPay account in just a few minutes."
            icon="👤"
          />
          <Step 
            num="02"
            title="Connect Accounts"
            desc="Bring all your finances together in one place. Securely link your bank accounts and credit cards."
            icon="💳"
            reverse
          />
          <Step 
            num="03"
            title="Manage & Track"
            desc="Once connected, FlowPay helps you stay in control. Send payments and track spending in real time."
            icon="💹"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
