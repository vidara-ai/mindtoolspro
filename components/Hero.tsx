
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative px-6 overflow-hidden min-h-screen flex items-center justify-center bg-[#020617]">
      {/* Elementos de fundo dinâmicos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[60%] bg-cyan-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[60%] bg-blue-600/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            PLATAFORMA MINDTOOLS PRO
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-outfit leading-tight tracking-tight text-slate-100">
            As melhores IAs da atualidade <br />
            <span className="gradient-text">num só lugar.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Centralize suas ferramentas de inteligência artificial, aumente sua produtividade e tenha acesso ilimitado às principais tecnologias do mercado.
          </p>

          <div className="flex justify-center pt-6">
            <button 
              onClick={onStart}
              className="px-12 py-6 bg-cyan-500 text-slate-950 font-black text-2xl rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-cyan-500/30 uppercase"
            >
              ACESSAR A PLATAFORMA
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-10 text-base text-slate-500 font-bold uppercase tracking-tighter">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=user${i}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#020617] shadow-lg" alt="user" />
              ))}
            </div>
            <span>+25.000 profissionais já usam o MindTools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
