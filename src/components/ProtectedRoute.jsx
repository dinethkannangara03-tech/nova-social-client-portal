import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, loading, session }) {
  const location = useLocation();

  if (loading) {
    return (
      <section className="page auth-loading">
        <div className="loader-card glass-card">
          <span className="loader-dot" />
          Checking your session
        </div>
      </section>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
