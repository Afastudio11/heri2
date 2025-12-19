
import React from 'react';

const CTAContact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl font-black text-slate-900">Siap Berkolaborasi?</h2>
        <p className="text-slate-500 font-medium">
          Baik Anda membutuhkan penyelenggaraan event besar, merancang roadmap keberlanjutan, atau produk merchandise berkualitas, Skyled Pro Indonesia adalah solusi lengkap Anda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-lg hover:brightness-95 transition-all">
            <span className="text-xl">💬</span> Hubungi via WhatsApp
          </button>
          <button className="bg-skyled-blue text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-lg hover:brightness-95 transition-all">
            <span className="text-xl">📧</span> Kirim Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;
