import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
      <div className="footer-section">
        <nav className="footer-nav">
          <NavLink className="accent-text-title nav-link" to="/about">
            ABOUT
          </NavLink>
          <NavLink className="accent-text-title nav-link" to="/portfolio">
            PORTFOLIO
          </NavLink>
          <NavLink className="accent-text-title nav-link" to="/contacts">
            CONTACTS
          </NavLink>
        </nav>
      </div>
      </div>
    </footer>
  );
}
