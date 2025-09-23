import NavLinks from "../navLinks/navLinks";
import Toggle from "../../toggle/toggle";
import "./desktopHeader.scss";
import { NavLink } from "react-router-dom";

export default function DesktopHeader() {
  return (
    <nav className="header-main desktopNavigation">

<NavLink to="/">
     <img src="/images/Logo_AS.svg" alt="logo" className="logo" />
    </NavLink>
      <div className="header-main-links">
        <NavLinks />
        <Toggle />
      </div>
    </nav>
  );
}
