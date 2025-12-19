
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-flow-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Take Control of Your Finances Today</h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of users who trust FlowPay for their payments and budgeting.
            </p>
            <button className="bg-white text-flow-blue px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors mx-auto md:mx-0">
              GET THE APP
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
          <div className="hidden lg:block text-9xl">
            💸💸
          </div>
        </div>
      </div>
      
      {/* Decorative floating icons in background */}
      <div className="absolute top-1/4 left-1/4 text-6xl opacity-10 animate-pulse">✨</div>
      <div className="absolute bottom-1/4 right-1/4 text-6xl opacity-10 animate-bounce">🪙</div>
    </section>
  );
};

export default CTA;
