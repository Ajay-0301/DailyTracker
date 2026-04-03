import { useEffect, useState } from 'react';

function BatmanIntro() {
  return (
    <div className="intro-stage" aria-hidden="true">
      <div className="intro-glow" />
      <div className="bat-sigil">
        <div className="bat-wing bat-wing-left" />
        <div className="bat-body" />
        <div className="bat-wing bat-wing-right" />
      </div>
      <div className="intro-title">
        <span>GOTHAM ACCESS</span>
        <strong>DailyTracker</strong>
      </div>
    </div>
  );
}

function LoginCard() {
  return (
    <section className="login-shell">
      <div className="login-panel">
        <div className="login-badge">Secure Entry</div>
        <h1>Welcome back, Guardian.</h1>
        <p>
          Track your day with a focused dashboard shaped by Gotham energy, sharp contrast, and premium motion.
        </p>

        <form className="login-form">
          <label>
            <span>Email</span>
            <input type="email" placeholder="wayne.enterprises@dailytracker.com" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="••••••••••••" />
          </label>

          <button type="submit">Enter Gotham</button>
        </form>

        <div className="login-footer">
          <span>Encrypted session</span>
          <a href="/">Forgot access?</a>
        </div>
      </div>

      <aside className="login-side">
        <div className="stat-card">
          <span>Daily Focus</span>
          <strong>3D cinematic login flow</strong>
        </div>
        <div className="stat-card stat-card-soft">
          <span>Theme</span>
          <strong>Batman-inspired, premium, dark, and dramatic</strong>
        </div>
      </aside>
    </section>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`app-shell ${showIntro ? 'intro-active' : 'login-active'}`}>
      <div className="backdrop-grid" />
      <div className="backdrop-orb backdrop-orb-left" />
      <div className="backdrop-orb backdrop-orb-right" />
      {showIntro ? <BatmanIntro /> : <LoginCard />}
    </main>
  );
}