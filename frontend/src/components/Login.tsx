import { LOGIN_BG_IMAGE_SRC } from '../constants';

export default function Login() {
  const loginCardStyle = {
    backgroundImage: `linear-gradient(145deg, rgba(17, 23, 41, 0.82), rgba(7, 10, 18, 0.7)), url('${LOGIN_BG_IMAGE_SRC}')`,
  };

  return (
    <section className="login-shell">
      <div className="login-panel" style={loginCardStyle}>
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
    </section>
  );
}