
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass rounded-2xl overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://picsum.photos/seed/interface/1200/800" 
                alt="MindTools Interface" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-slate-950 fill-current translate-x-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit">
              O que é o <span className="text-cyan-400">MindTools Pro</span>?
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Esqueça o caos de ter 50 abas abertas e dezenas de assinaturas de IA que pesam no seu bolso todos os meses.
            </p>

            <ul className="space-y-6">
              {[
                { title: 'Uma única plataforma', text: 'Tudo o que você precisa em uma interface fluida e rápida.' },
                { title: 'Múltiplas IAs', text: 'O poder do GPT-4, Midjourney, ElevenLabs e outros num só lugar.' },
                { title: 'Menos ferramentas, mais resultados', text: 'Foque no que importa enquanto a tecnologia faz o trabalho pesado.' },
                { title: 'Ideal para profissionais', text: 'Desenhado para quem vive da internet e precisa de escala.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
