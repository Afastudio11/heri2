import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className={`relative p-8 rounded-[32px] transition-all duration-300 flex flex-col h-full bg-white ${
      plan.isPopular 
        ? 'border-2 border-brand-100 shadow-xl scale-105 z-10' 
        : 'border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
    }`}>
      {plan.isPopular && (
        <div className="absolute top-8 right-8 bg-brand-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
          🔥 Most Popular
        </div>
      )}

      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center mb-6 text-gray-900">
           <Sparkles size={20} fill="black" className="text-black" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">Pick a plan that fits your trip—simple, flexible, and transparent pricing</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
          <span className="text-gray-400 text-xs ml-2">/ Per month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start group">
            <div className="flex-shrink-0 bg-brand-500 rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                <Check size={12} className="text-white" strokeWidth={3} />
            </div>
            <span className="ml-3 text-xs text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-full font-semibold text-sm transition-all ${
        plan.isPopular 
          ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-200' 
          : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;