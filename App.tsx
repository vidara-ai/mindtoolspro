
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

type ViewState = 'landing' | 'auth' | 'dashboard';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <main>
        {view === 'landing' && <LandingPage onStart={() => setView('auth')} />}
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
