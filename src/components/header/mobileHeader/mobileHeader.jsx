import { useContext, useState } from "react";
import NavLinks from "../navLinks/navLinks";
import Toggle from "../../toggle/toggle";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import "./mobileHeader.scss";
import { ThemeContext } from "../../../context/ThemeContext";

export default function MobileHeader() {
  const [click, setClick] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => setClick((prev) => !prev);
  const closeMenu = () => setClick(false);

  return (
    <div className={`mobileNavigation ${click ? "open" : "closed"}`}>
      <div
        className="mobileHeader-bar container"
        style={{
          backgroundColor: darkMode ? "#2E2E2E" : "rgb(214 215 211)",
        }}
      >
        <span className="mobileHeader-bar-logo">AS</span>

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
          className="mobileNavigation-menu container"
          style={{
            backgroundColor: darkMode ? "#2E2E2E" : "rgb(214 215 211)",
          }}
        >
          <NavLinks isClicked={true} closeMenu={closeMenu} />
          <Toggle />
        </div>
      )}
    </div>
  );
}
