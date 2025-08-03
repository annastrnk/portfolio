import React, { createContext, useState, useEffect, useMemo } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // const contexValue =useMemo(()=>({
  //   darkMode,
  //   toggleDarkMode
  // }), [darkMode])

  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
