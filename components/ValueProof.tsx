
import React from 'react';

const ValueProof: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">O Topo do Mercado</span>
          <h2 className="text-5xl md:text-7xl font-black font-outfit leading-none italic">
            O PRODUTO CAMPEÃO <br />
            <span className="text-cyan-400">A UM CLIQUE DE DISTÂNCIA</span>
          </h2>
        </div>

        <div className="p-10 glass rounded-[2rem] border-cyan-500/20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <p className="text-2xl md:text-3xl font-medium text-slate-100 italic leading-relaxed">
            "Não é sobre trabalhar mais, é sobre usar a inteligência correta para trabalhar menos e lucrar muito mais."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
            <span className="font-bold tracking-widest text-slate-400 uppercase">MindTools Pro Authority</span>
            <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProof;
