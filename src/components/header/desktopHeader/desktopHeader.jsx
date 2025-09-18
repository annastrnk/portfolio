import NavLinks from "../navLinks/navLinks";
import Toggle from "../../toggle/toggle";
import "./desktopHeader.scss";

export default function DesktopHeader() {
  return (
    <nav className="header-main desktopNavigation">
      <img src="/images/Logo_AS.svg" alt="logo" className="logo"/>
      <NavLinks />
      <Toggle />
    </nav>
  );
}
