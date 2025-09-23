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
      {[ "/about", "/skills","/portfolio", "/contacts"].map((path, index) => {
        const labels = ["About me", "Skills","Portfolio", "Contacts"];
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
