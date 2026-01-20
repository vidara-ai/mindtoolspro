
import React, { useState } from 'react';

interface AuthProps {
  onLoginSuccess: () => void;
  onBackToLanding: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLoginSuccess, onBackToLanding }) => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (mode === 'signup') {
      if (!validateEmail(formData.email)) {
        setError('E-mail inválido');
        setLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres');
        setLoading(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('As senhas não coincidem');
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
    } else {
      // Login simulation
      if (formData.email && formData.password) {
        onLoginSuccess();
      } else {
        setError('Preencha todos os campos');
        setLoading(false);
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-cyan-500/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md">
        <button 
          onClick={onBackToLanding}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para o início
        </button>

        <div className="glass p-8 rounded-3xl border-white/5 shadow-2xl relative">
          {success ? (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Cadastro realizado!</h2>
                <p className="text-slate-400">Sua conta MindTools Pro foi criada com sucesso.</p>
              </div>
              <button 
                onClick={() => { setSuccess(false); setMode('login'); }}
                className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                Fazer login
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-black font-outfit text-white">
                  {mode === 'signup' ? 'Criar sua conta' : 'Boas-vindas de volta'}
                </h2>
                <p className="text-slate-400">
                  {mode === 'signup' ? 'Comece sua jornada PRO hoje' : 'Acesse seu painel de ferramentas'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Senha</label>
                  <input 
                    type="password" 
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                {mode === 'signup' && (
                  <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Confirmar Senha</label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>
                )}

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center animate-shake">
                    {error}
                  </div>
                )}

                <button 
                  disabled={loading}
                  className="w-full py-4 bg-cyan-500 text-slate-950 font-black text-lg rounded-xl hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-wait transition-all shadow-lg shadow-cyan-500/20 mt-4"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin"></div>
                      Processando...
                    </div>
                  ) : (
                    mode === 'signup' ? 'Criar conta' : 'Entrar'
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-slate-500 text-sm">
                  {mode === 'signup' ? 'Já possui uma conta?' : 'Ainda não tem acesso?'}
                  <button 
                    onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                    className="ml-2 text-cyan-400 font-bold hover:underline"
                  >
                    {mode === 'signup' ? 'Fazer login' : 'Cadastre-se'}
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
