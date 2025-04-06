
import MainPage from "./components/main-page/main-page";
import About from "./components/about/about";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";
import Contacts from "./components/contacts/contacts";
import Portfolio from "./components/portfolio/portfolio";


function App() {
  return (
   <ThemeProvider>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes> 
       <Footer />
    </ThemeProvider>
  );
}

export default App;
