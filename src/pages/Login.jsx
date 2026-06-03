import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function Login({ session }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const resetStatus = () => {
    setError("");
    setMessage("");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    resetStatus();
    setSubmitting(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    setSubmitting(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setMessage("Account created. Check your email if confirmation is enabled.");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    resetStatus();
    setSubmitting(true);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSubmitting(false);

    if (loginError) {
      setError(loginError.message);
      return;
    }

    setMessage("Login successful. Opening your dashboard.");
    navigate("/dashboard", { replace: true });
  };

  const handleGoogleLogin = async () => {
    resetStatus();
    setSubmitting(true);

    const { error: googleError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setSubmitting(false);

    if (googleError) {
      setError(googleError.message);
    }
  };

  const handleLogout = async () => {
    resetStatus();
    const { error: logoutError } = await supabase.auth.signOut();

    if (logoutError) {
      setError(logoutError.message);
      return;
    }

    setMessage("You have been logged out.");
  };

  return (
    <div className="page">
      <section className="auth-layout">
        <div className="auth-copy">
          <span className="eyebrow">Client Portal</span>
          <h1>Access your Nova dashboard.</h1>
          <p>
            Sign in to manage your account, check project status, and keep your
            social growth work organized.
          </p>
        </div>

        <form className="glass-card auth-card" onSubmit={handleLogin}>
          {session ? (
            <>
              <span className="eyebrow">Logged In</span>
              <h2>{session.user.email}</h2>
              <p className="auth-note">
                You are signed in. Continue to the dashboard or log out of your
                client account.
              </p>
              {error && <p className="status-message error">{error}</p>}
              {message && <p className="status-message success">{message}</p>}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => navigate("/dashboard")}
              >
                Open Dashboard
              </button>
              <button className="btn btn-secondary" type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="client@example.com"
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />

              {error && <p className="status-message error">{error}</p>}
              {message && <p className="status-message success">{message}</p>}

              <div className="auth-actions">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={submitting}
                >
                  Login
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  disabled={submitting}
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>

              <button
                className="btn btn-google"
                type="button"
                disabled={submitting}
                onClick={handleGoogleLogin}
              >
                Continue with Google
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
