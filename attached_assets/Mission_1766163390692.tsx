
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-8">
          <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
            Our mission is to empower you to take control of your finances without the stress 
            of spreadsheets or the confusion of complicated tools.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Whether you're sending payments, setting a budget, or monitoring your spending, 
            FlowPay keeps everything organized in one secure, easy-to-use place. Because when 
            your finances flow smoothly, life feels a lot lighter.
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
            GET THE APP
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
