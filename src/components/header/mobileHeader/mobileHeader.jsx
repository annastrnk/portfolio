import { useContext, useState } from "react";
import NavLinks from "../navLinks/navLinks";
import Toggle from "../../toggle/toggle";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import "./mobileHeader.scss";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [click, setClick] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => setClick((prev) => !prev);
  const closeMenu = () => setClick(false);

  return (
    <div className={`mobileNavigation ${click ? "open" : "closed"}`}>
      <div
        className="mobileHeader-bar"
        style={{
          backgroundColor: darkMode ? "#6D6B6B" : "#292828",
        }}
      >

    <NavLink to="/">
     <img src="/images/Logo_AS.svg" alt="logo" className="logo" />
    </NavLink>


        {click ? (
          <MdClose className="hamburgerMenu" size="30px" onClick={toggleMenu} />
        ) : (
          <MdOutlineMenu
            className="hamburgerMenu"
            size="30px"
            onClick={toggleMenu}
          />
        )}
      </div>

      {click && (
        <div
          className="mobileNavigation-menu"
          style={{
            backgroundColor: darkMode ? "#6D6B6B":"#292828"
          }}
        >
          <NavLinks isClicked={true} closeMenu={closeMenu} />
          <Toggle />
        </div>
      )}
    </div>
  );
}
