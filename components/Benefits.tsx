
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit leading-tight">
              Por que escolher o <br />
              <span className="text-cyan-400">MindTools Pro?</span>
            </h2>
            
            <p className="text-lg text-slate-400">
              Não somos apenas mais uma ferramenta de IA. Somos a central de inteligência que vai levar o seu jogo para o nível profissional.
            </p>

            <div className="grid gap-4">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 glass rounded-xl border-white/5 hover:bg-white/5 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { label: 'Time Saved', value: '90%', icon: '⏳' },
                { label: 'Cost Reduced', value: '75%', icon: '💰' },
                { label: 'AIs Included', value: '50+', icon: '🤖' },
                { label: 'Success Rate', value: '99%', icon: '🚀' },
              ].map((stat, idx) => (
                <div key={idx} className="p-8 glass rounded-3xl text-center space-y-2 group hover:glow-cyan transition-all">
                  <div className="text-3xl">{stat.icon}</div>
                  <div className="text-4xl font-black font-outfit text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
