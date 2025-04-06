import "./contacts.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ContactForm from "../contactForm/contactForm";

export default function Contacts() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="container">
      <h3 className="title contacts-title">
        Contact <span className="accent-text-content">ME</span>
      </h3>

      <div className="contacts-wrapper">
        <div className="contacts-item">
          <div className="contacts-phone-black">
            <img src="../../../src/assets/icons8-phone-75.png" alt="" />
          </div>

          {/* {darkMode ? (
          <div className="contacts-phone-white">
            <img src="../../../src/assets/icons8-phone-100 (6).png" alt="" />
          </div>
        ) : (
          <div className="contacts-phone-black">
            <img src="../../../src/assets/icons8-phone-75.png" alt="" />
          </div>
        )} */}

          <p>PHONE</p>
          <a href="tel:380637627477">38 063 762 74 77</a>
        </div>

        <div className="contacts-item">
          <div className="contacts-phone-black">
            <img src="../../../src/assets/icons8-email-75.png" alt="" />
          </div>
          <p>EMAIL</p>
          <a href="mailto:starenka.annaa@gmail.com">starenka.annaa@gmail.com</a>
        </div>

        <div className="contacts-item">
          <div className="contacts-phone-black">
            <img src="../../../src/assets/icons8-telegram-75.png" alt="" />
          </div>
          <p>TELEGRAM</p>
          <a href="https://t.me/ann_strnk">ann_strnk</a>
        </div>
      </div>
      <div className="contacts-email">
        <h3 className="title contacts-title">DROP ME AN EMAIL</h3>
              <ContactForm/>
      </div>

    </div>
  );
}
