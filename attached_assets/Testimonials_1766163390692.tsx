
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; img: string }> = ({ quote, name, role, img }) => (
  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-full">
    <p className="text-slate-700 font-medium mb-8 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-bold text-sm">{name}</h4>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-flow-blue rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tight">flowpay</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">Relied on by Thousands of Users</h2>
          <p className="text-slate-500">See how FlowPay is helping people and businesses save time and money every day.</p>
        </div>
        
        {/* Large Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
           <div className="aspect-[4/3] bg-flow-blue rounded-[3rem] p-12 flex flex-col justify-between items-center text-white relative overflow-hidden">
              <div className="z-10 text-center">
                 <div className="text-8xl mb-6">👧🏻</div>
                 <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold">Invoicing cut by half!</div>
              </div>
              <div className="absolute top-10 left-10 text-6xl opacity-20">🪙</div>
              <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-12">💸</div>
           </div>
           <div className="aspect-[4/3] bg-green-500 rounded-[3rem] p-12 flex flex-col justify-between items-center text-white relative overflow-hidden">
              <div className="z-10 text-center">
                 <div className="text-8xl mb-6">🧑🏻‍🍳</div>
                 <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold">Easy expense tracking!</div>
              </div>
              <div className="absolute top-20 right-20 text-6xl opacity-20">✨</div>
              <div className="absolute bottom-20 left-20 text-6xl opacity-20 -rotate-12">📉</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="FlowPay cut my invoicing time in half. I get paid faster than ever!"
            name="Dean M"
            role="Freelance Designer"
            img="https://picsum.photos/seed/dean/100/100"
          />
          <TestimonialCard 
            quote="As a café owner, I love how easy it is to manage payments and track expenses."
            name="Luis R"
            role="Small Business Owner"
            img="https://picsum.photos/seed/luis/100/100"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
