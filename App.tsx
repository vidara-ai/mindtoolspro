
import React, { useState } from 'react';
import Hero from './components/Hero';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

type ViewState = 'landing' | 'auth' | 'dashboard';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <main>
        {view === 'landing' && <Hero onStart={() => setView('auth')} />}
        {view === 'auth' && (
          <Auth 
            onLoginSuccess={() => setView('dashboard')} 
            onBackToLanding={() => setView('landing')} 
          />
        )}
        {view === 'dashboard' && <Dashboard onLogout={() => setView('landing')} />}
      </main>
    </div>
  );
}

export default App;
