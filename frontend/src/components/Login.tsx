import { type FormEvent, useState } from 'react';
import { LOGIN_BG_IMAGE_SRC } from '../constants';

type AuthMode = 'login' | 'signup';

const MOCK_GOOGLE_ACCOUNTS = [
  'wayne.enterprises@gmail.com',
  'brucewayne.batman@gmail.com',
  'gotham.guardian@gmail.com',
];

export default function Login() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');
  const [showGoogleAccounts, setShowGoogleAccounts] = useState(false);

  const isSignUp = mode === 'signup';

  const loginCardStyle = {
    backgroundImage: `linear-gradient(145deg, rgba(17, 23, 41, 0.82), rgba(7, 10, 18, 0.7)), url('${LOGIN_BG_IMAGE_SRC}')`,
  };

  function handleGooglePick(selectedEmail: string) {
    setGoogleEmail(selectedEmail);
    setEmail(selectedEmail);
    setShowGoogleAccounts(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="login-shell">
      <div className="login-panel" style={loginCardStyle}>
        <div className="login-badge">Secure Entry</div>
        <h1>{isSignUp ? 'Create your account' : 'Log in to your account'}</h1>
        <p>
          {isSignUp ? 'Have an account? Log in now' : "Don't have an account? Sign up"}
        </p>

        <div className="auth-toggle" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            className={mode === 'login' ? 'auth-tab auth-tab-active' : 'auth-tab'}
            onClick={() => setMode('login')}
          >
            Log in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signup'}
            className={mode === 'signup' ? 'auth-tab auth-tab-active' : 'auth-tab'}
            onClick={() => setMode('signup')}
          >
            Sign up
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="google-section">
            <button
              type="button"
              className="google-btn-front"
              onClick={() => setShowGoogleAccounts((prev) => !prev)}
            >
              Continue with Google
            </button>

            {showGoogleAccounts ? (
              <div className="google-account-list" role="listbox" aria-label="Choose Google account">
                {MOCK_GOOGLE_ACCOUNTS.map((account) => (
                  <button
                    key={account}
                    type="button"
                    className="google-account-item"
                    onClick={() => handleGooglePick(account)}
                  >
                    {account}
                  </button>
                ))}
              </div>
            ) : null}

            {googleEmail ? <div className="google-picked">Selected Gmail: {googleEmail}</div> : null}
          </div>

          <div className="or-divider" aria-hidden="true">
            <span />
            <strong>Or with email and password</strong>
            <span />
          </div>

          <label>
            <span>Email Address</span>
            <input
              type="email"
              placeholder="wayne.enterprises@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          {isSignUp ? (
            <label>
              <span>First Name</span>
              <input
                type="text"
                placeholder="Bruce"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>
          ) : null}

          {isSignUp ? (
            <label>
              <span>Last Name</span>
              <input
                type="text"
                placeholder="Wayne"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
          ) : null}

          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit">{isSignUp ? 'Sign up' : 'Next'}</button>
        </form>

        <div className="login-footer">
          <span>{isSignUp ? 'Have an account?' : "Don't have an account?"}</span>
          <button type="button" className="ghost-link" onClick={() => setMode(isSignUp ? 'login' : 'signup')}>
            {isSignUp ? 'Log in now' : 'Sign up'}
          </button>
        </div>
      </div>
    </section>
  );
}