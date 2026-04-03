import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import Intro from './components/Intro';
import Login from './components/Login';
import { INTRO_IMAGE_SRC } from './constants';

type BatFlight = {
  top: string;
  duration: string;
  delay: string;
  scale: number;
  opacity: number;
  direction: 'left' | 'right';
  arcDepth: string;
  wobble: string;
  tilt: string;
};

function buildBatFlights(): BatFlight[] {
  const rows = [10, 16, 28, 34, 48, 56, 66, 78];

  return rows.map((row, index) => {
    const direction: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';
    const arcDepth = `${Math.round((Math.random() * 34 - 17) * 10) / 10}px`;
    const wobble = `${Math.round((Math.random() * 18 - 9) * 10) / 10}px`;
    const tilt = `${Math.round((Math.random() * 18 - 9) * 10) / 10}deg`;

    return {
      top: `${row}%`,
      duration: `${26 + Math.floor(Math.random() * 10)}s`,
      delay: `${Math.round((Math.random() * 11) * 10) / 10}s`,
      scale: Math.round((0.58 + Math.random() * 0.38) * 100) / 100,
      opacity: Math.round((0.26 + Math.random() * 0.24) * 100) / 100,
      direction,
      arcDepth,
      wobble,
      tilt,
    };
  });
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const batFlights = useMemo(() => buildBatFlights(), []);

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
      <div className="crow-layer" aria-hidden="true">
        {batFlights.map((bat, index) => (
          <span
            key={`${bat.top}-${index}`}
            className={`crow crow-${bat.direction}`}
            style={{
              top: bat.top,
              animationDuration: bat.duration,
              animationDelay: bat.delay,
              opacity: bat.opacity,
              '--crow-scale': bat.scale,
              '--flight-arc': bat.arcDepth,
              '--flight-wobble': bat.wobble,
              '--flight-tilt': bat.tilt,
            } as CSSProperties}
          >
            <svg className="crow-svg" viewBox="0 0 160 72" aria-hidden="true">
              <path
                className="bat-silhouette"
                d="M8 44 C11 32 19 21 30 12 C39 5 47 2 51 2 L56 17 L69 20 L76 21 L80 7 L84 21 L91 20 L104 17 L109 2 C113 2 121 5 130 12 C141 21 149 32 152 44 C140 43 129 45 121 50 C113 55 105 61 98 70 C94 57 88 49 80 45 C72 49 66 57 62 70 C55 61 47 55 39 50 C31 45 20 43 8 44 Z"
              />
            </svg>
          </span>
        ))}
      </div>
      <div className={`login-layer ${showLogin ? 'login-layer-show' : 'login-layer-hidden'}`}>
        <Login />
      </div>
      {showIntro ? <Intro /> : null}
    </main>
  );
}