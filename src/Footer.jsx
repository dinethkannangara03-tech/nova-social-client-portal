import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark">N</span>
          <span>Nova Social Studio</span>
        </Link>
        <p>Turn attention into growth.</p>
      </div>
      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Client Login</Link>
      </div>
    </footer>
  );
}
