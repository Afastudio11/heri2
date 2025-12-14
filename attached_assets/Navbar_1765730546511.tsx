import React from 'react';
import { Menu, Globe } from './ui/Icons';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Globe size={16} className="text-white" />
          </div>
          <span className="tracking-tight">Skyled Pro <span className="font-light opacity-80 text-sm">INDONESIA</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Beranda</a>
            <a href="#" className="hover:text-white transition-colors">Tentang</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">Unit Bisnis</a>
            <a href="#" className="hover:text-white transition-colors">Kontak</a>
        </div>

        <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-full transition-all text-sm font-bold hover:bg-blue-50">
            Bermitra Dengan Kami
            </button>
            <button className="flex md:hidden items-center gap-2 bg-black/20 hover:bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all text-sm font-medium border border-white/10">
            <Menu size={16} />
            </button>
        </div>
      </div>
    </nav>
  );
};