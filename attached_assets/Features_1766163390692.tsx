
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; bg: string }> = ({ title, desc, icon, bg }) => (
  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className={`w-full aspect-square ${bg} rounded-2xl mb-6 flex items-center justify-center text-6xl`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-lg">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mb-4">📱 Features</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Manage Your Money in One Place</h2>
          </div>
          <p className="max-w-sm text-slate-500 text-sm">
            From instant payments to smart budgeting, FlowPay makes financial management simple, fast, and stress-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Send & Receive Payments"
            desc="Instant transfers with transparent fees. Moving money has never been easier."
            icon="💸"
            bg="bg-blue-50"
          />
          <FeatureCard 
            title="Expense Tracking"
            desc="Automatic categorization helps track your spending. Know where every penny goes."
            icon="📊"
            bg="bg-yellow-50"
          />
          <FeatureCard 
            title="Secure Payments"
            desc="Bank-level encryption ensures your data and money are always protected."
            icon="🔒"
            bg="bg-green-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
