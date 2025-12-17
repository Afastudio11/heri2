import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Siap Berkolaborasi?
        </h2>
        
        <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Baik Anda membutuhkan penyelenggaraan event besar, merancang roadmap keberlanjutan, atau memproduksi merchandise custom, Skyled Pro Indonesia adalah solusi lengkap Anda.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200">
               <MessageCircle size={22} /> Hubungi via WhatsApp
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
               <Mail size={22} /> Kirim Email
            </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;