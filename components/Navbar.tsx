
import React from 'react';
import { BrandLogo } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <BrandLogo className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
          <a href="#categories" className="hover:text-cyan-400 transition-colors">Ferramentas</a>
          <a href="#benefits" className="hover:text-cyan-400 transition-colors">Benefícios</a>
          <a href="#pricing" className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/20">
            Assinar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
