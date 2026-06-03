import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ session }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span>Nova Social Studio</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to={session ? "/dashboard" : "/login"}
            onClick={closeMenu}
            className="login-pill"
          >
            {session ? "Dashboard" : "Login"}
          </NavLink>
          <Link className="btn btn-primary nav-cta" to="/contact" onClick={closeMenu}>
            Start a Project
          </Link>
        </div>
      </nav>
    </header>
  );
}
