
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-slate-900">Skyled</span>
              <div className="w-2 h-2 rounded-full bg-skyled-blue"></div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Skyled Pro Indonesia adalah perusahaan event organizer dan production terkemuka. Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa.
            </p>
          </div>
          
          <div>
            <h4 className="font-extrabold text-sm mb-6 uppercase tracking-widest text-slate-900">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-skyled-blue">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-skyled-blue">Unit Bisnis</a></li>
              <li><a href="#" className="hover:text-skyled-blue">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-sm mb-6 uppercase tracking-widest text-slate-900">Kontak</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-2">📞 +62 878 8318 4796</li>
              <li className="flex items-center gap-2">📧 contact@skyledpro.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-sm mb-6 uppercase tracking-widest text-slate-900">Sosial Media</h4>
            <div className="flex gap-4">
              {['📸', '🐦', '🎥'].map((icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-skyled-blue hover:text-white transition-all">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>Skyled Pro Indonesia © 2025</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
