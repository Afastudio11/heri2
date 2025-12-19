
import React from 'react';

const PeopleSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl overflow-hidden relative flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
             <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center text-9xl">
                👩🏻‍💻
                <div className="absolute top-0 right-0 p-4 bg-white rounded-2xl shadow-lg text-4xl animate-bounce">📈</div>
                <div className="absolute bottom-0 left-0 p-4 bg-white rounded-2xl shadow-lg text-4xl animate-pulse">💰</div>
             </div>
          </div>
          <div className="flex-1 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold">💁🏻‍♀️ About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Built for People Who Want Financial Freedom</h2>
            <p className="text-slate-500">
              At FlowPay, we believe managing money shouldn't be complicated. That's why we built an 
              all-in-one platform to make payments, budgeting, and tracking simple for everyone.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
              GET THE APP
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
