import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function Dashboard({ session }) {
  const navigate = useNavigate();
  const email = session?.user?.email;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="page dashboard-page">
      <section className="dashboard-hero glass-card">
        <div>
          <span className="eyebrow">Private Dashboard</span>
          <h1>Welcome back to Nova.</h1>
          <p>{email}</p>
        </div>
        <div className="dashboard-actions">
          <Link className="btn btn-secondary" to="/">
            Back to Website
          </Link>
          <button className="btn btn-primary" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="glass-card dash-card">
          <span className="eyebrow">Profile</span>
          <h2>Client summary</h2>
          <p>
            Your client portal is active. Project files, requests, and campaign
            history can be added here when the database layer is introduced.
          </p>
        </article>
        <article className="glass-card dash-card">
          <span className="eyebrow">Projects</span>
          <h2>Project requests</h2>
          <p>Submit briefs, creative notes, and next-month content requests.</p>
          <button className="btn btn-secondary" type="button">
            New Project Request
          </button>
        </article>
        <article className="glass-card dash-card status-card">
          <span className="eyebrow">Account</span>
          <h2>Status</h2>
          <div className="status-row">
            <span>Authentication</span>
            <strong>Verified</strong>
          </div>
          <div className="status-row">
            <span>Portal access</span>
            <strong>Active</strong>
          </div>
          <div className="status-row">
            <span>Billing</span>
            <strong>Not connected</strong>
          </div>
        </article>
      </section>
    </div>
  );
}
