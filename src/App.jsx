import "./styles/index.scss";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";

import MainPage from "./pages/mainPage/mainPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import PortfolioPage from "./pages/portfolioPage/portfolioPage";
import ContactsPage from "./pages/contactsPage/contactsPage";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
