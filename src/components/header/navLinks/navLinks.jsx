import { NavLink } from "react-router-dom";
import "./navLinks.scss";

export default function NavLinks({ isClicked = false, closeMenu = () => {} }) {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const handleClick = () => {
    if (isClicked) closeMenu();
  };

  return (
    <nav className="header-main-nav">
      {["/", "/about", "/portfolio", "/contacts"].map((path, index) => {
        const labels = ["Main", "About me", "Portfolio", "Contacts"];
        return (
          <NavLink
            key={index}
            to={path}
            className={getNavLinkClass}
            onClick={handleClick}
          >
            {labels[index]}
          </NavLink>
        );
      })}
    </nav>
  );
}
