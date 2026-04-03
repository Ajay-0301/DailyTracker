import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Login from './components/Login';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 4700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`app-shell ${showIntro ? 'intro-active' : 'login-active'}`}>
      <div className="backdrop-grid" />
      <div className="backdrop-orb backdrop-orb-left" />
      <div className="backdrop-orb backdrop-orb-right" />
      <div className={`login-layer ${showIntro ? 'login-layer-prep' : 'login-layer-show'}`}>
        <Login />
      </div>
      {showIntro ? <Intro /> : null}
    </main>
  );
}