import { useEffect, useState } from "react";
import DesktopHeader from "./desktopHeader/desktopHeader";
import MobileHeader from "./mobileHeader/mobileHeader";
import './header.scss'

export default function Header() {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
  
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return(
        <div className={`header-wrapper ${isVisible ? "visible": "hidden"}`}>
            <DesktopHeader/>
            <MobileHeader/>
        </div>
    )
}