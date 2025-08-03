import "./styles/index.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";

import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import PortfolioPage from "./pages/portfolioPage/portfolioPage";
import ContactsPage from "./pages/contactsPage/contactsPage";
import ScrollToTop from "./components/animation/scrollToTop/scrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
