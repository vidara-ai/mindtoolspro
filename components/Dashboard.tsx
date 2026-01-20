
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleActionClick = async () => {
    setIsProcessing(true);
    setErrorMessage(null);

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsProcessing(false);
    setErrorMessage("Neste momento, nosso servidor está com uma alta demanda simultânea. Pedimos desculpas pelo ocorrido. Previsão de normalização em até 6 horas.");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-inter">
      {/* Loading Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
            <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Processando Requisição...</p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorMessage && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-in zoom-in duration-300">
          <div className="glass max-w-md w-full p-8 rounded-3xl border-red-500/20 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto text-red-500">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Falha no Servidor</h3>
              <p className="text-slate-400 leading-relaxed">
                {errorMessage}
              </p>
            </div>
            <button 
              onClick={() => setErrorMessage(null)}
              className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Sidebar Simulado */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-slate-900/50 border-r border-white/5 p-6 hidden lg:block">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20"></div>
          <span className="font-outfit font-black text-xl tracking-tight">MINDTOOLS</span>
        </div>
        
        <nav className="space-y-1">
          {['Dashboard', 'Minhas IAs', 'Favoritos', 'Faturamento', 'Configurações'].map((item, i) => (
            <button 
              key={item} 
              onClick={handleActionClick}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all ${i === 0 ? 'bg-cyan-500/10 text-cyan-400 font-bold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all border border-white/5"
          >
            Sair da conta
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-1">
            <p className="text-slate-400 text-lg font-medium">Bem-vindo à sua central de inteligência artificial.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-white">Plano PRO</p>
              <p className="text-xs text-green-400 font-medium">Status: Ativo</p>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Ferramentas Ativas', value: '54', color: 'cyan' },
            { label: 'Créditos Mensais', value: '∞', color: 'purple' },
            { label: 'Projetos Criados', value: '0', color: 'blue' },
            { label: 'ECONOMIA MÉDIA ESTIMADA', value: 'R$ 2.850,00', color: 'green' },
          ].map((stat) => (
            <div 
              key={stat.label} 
              onClick={handleActionClick}
              className="glass p-6 rounded-2xl border-white/5 cursor-pointer hover:border-white/20 transition-all"
            >
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-black font-outfit">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-outfit">Acesso Rápido</h2>
            <button onClick={handleActionClick} className="text-cyan-400 font-bold hover:underline text-sm">Ver todas as categorias</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 6).map((cat, idx) => (
              <div 
                key={idx} 
                onClick={handleActionClick}
                className="group glass p-6 rounded-2xl border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cat.icon}</div>
                  <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase rounded-full tracking-widest">PRO</div>
                </div>
                <h3 className="text-xl font-bold font-outfit mb-2">{cat.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{cat.description}</p>
                <button className="w-full py-3 bg-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  Abrir Ferramenta
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
