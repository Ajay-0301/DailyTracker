import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Login from './components/Login';
import { INTRO_IMAGE_SRC } from './constants';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const loginTimer = window.setTimeout(() => setShowLogin(true), 3200);
    const introTimer = window.setTimeout(() => setShowIntro(false), 4400);

    return () => {
      window.clearTimeout(loginTimer);
      window.clearTimeout(introTimer);
    };
  }, []);

  return (
    <main className={`app-shell ${showIntro ? 'intro-active' : 'login-active'}`}>
      <div
        className={`login-art ${showIntro ? 'login-art-hidden' : 'login-art-show'}`}
        style={{ backgroundImage: `url('${INTRO_IMAGE_SRC}')` }}
        aria-hidden="true"
      />
      <div className="backdrop-grid" />
      <div className="backdrop-orb backdrop-orb-left" />
      <div className="backdrop-orb backdrop-orb-right" />
      <div className={`login-layer ${showLogin ? 'login-layer-show' : 'login-layer-hidden'}`}>
        <Login />
      </div>
      {showIntro ? <Intro /> : null}
    </main>
  );
}