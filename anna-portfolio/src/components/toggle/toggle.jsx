import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./toggle.scss";

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="toggle">
    <label className="toggle__switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <span className="toggle__slider">
      <span className="toggle__label">
            {darkMode ? 'Night Mode' : 'Day Mode'}
          </span>
          <span className="toggle__thumb">
            {darkMode ? '🌙' : '☀️'}
          </span>
      </span>
    </label>
  </div>
  );
}
