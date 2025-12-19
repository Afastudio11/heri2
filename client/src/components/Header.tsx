import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-skyled-blue/90 backdrop-blur-md text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter">Skyled</span>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="/" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">Beranda</a>
              <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">Tentang</a>
              <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">Portfolio</a>
              <a href="#" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">Kontak</a>
              <div className="flex items-center gap-1 group cursor-pointer">
                <span className="text-sm font-semibold opacity-80 group-hover:opacity-100">Unit Bisnis</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </nav>
          </div>
          <button className="bg-white text-skyled-blue px-6 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
            Bermitra Dengan Kami
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
