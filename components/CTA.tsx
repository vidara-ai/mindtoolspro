
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-cyan-500/5 -z-10"></div>
      
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center space-y-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full"></div>
        
        <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight">
          Centralize sua inteligência. <br />
          <span className="gradient-text">Escale seus resultados.</span>
        </h2>
        
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          O futuro pertence a quem domina as ferramentas. Junte-se aos milhares de membros do MindTools Pro e pare de perder tempo.
        </p>

        <div className="space-y-6">
          <button className="px-12 py-6 bg-cyan-500 text-slate-950 font-black text-2xl rounded-2xl hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all glow-cyan shadow-2xl">
            Acessar MindTools Pro agora
          </button>
          
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Acesso Imediato
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              7 Dias de Garantia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
