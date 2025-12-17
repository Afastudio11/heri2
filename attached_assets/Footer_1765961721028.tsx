import React from 'react';
import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Skyled</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
                Strategic Consulting & Sustainable Growth Partner.
            </p>
            <div className="flex gap-4">
                 <a href="#" className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram size={16}/></a>
                 <a href="#" className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={16}/></a>
                 <a href="#" className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter size={16}/></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-600">Karir</a></li>
                <li><a href="#" className="hover:text-blue-600">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Consulting</a></li>
                <li><a href="#" className="hover:text-blue-600">Training</a></li>
                <li><a href="#" className="hover:text-blue-600">Advising</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><Mail size={14}/> info@skyled.id</li>
                <li>Jakarta Selatan, Indonesia</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2025 Skyled Pro Consulting. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                <a href="#" className="hover:text-slate-600">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;