
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">
            Tudo o que você <span className="text-purple-500">imaginar</span>, a IA faz.
          </h2>
          <p className="text-slate-400">
            Explore as principais categorias de ferramentas disponíveis imediatamente após o seu acesso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className="group p-6 glass rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border-white/5 hover:border-cyan-500/50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-outfit text-slate-100">{cat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
