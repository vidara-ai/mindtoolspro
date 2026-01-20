
import React from 'react';
import { AUDIENCE } from '../constants';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-outfit">Para quem é o MindTools?</h2>
          <p className="text-slate-400">A solução definitiva para quem busca escala e profissionalismo no digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AUDIENCE.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl glass border-white/5">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.profile} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold font-outfit text-cyan-400">{item.profile}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
