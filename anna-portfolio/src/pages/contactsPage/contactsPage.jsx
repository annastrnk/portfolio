import "./contactsPage.scss";
// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import ContactForm from "../../components/contactForm/contactForm";
import ContactItem from "../../components/contacrItem/contactItem";

export default function ContactsPage() {
  // const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="container">
      <h3 className="title contacts-title">
        Contact <span className="content-text-accent">ME</span>
      </h3>

      <div className="contacts-wrapper">
        <ContactItem
          icon="../../../src/assets/icons8-phone-75.png"
          alt="Phone Icon"
          title="PHONE"
          link="38 063 762 74 77"
          href="tel:380637627477"
        />
        <ContactItem
          icon="../../../src/assets/icons8-email-75.png"
          alt="Email Icon"
          title="EMAIL"
          link="starenka.annaa@gmail.com"
          href="mailto:starenka.annaa@gmail.com"
        />
        <ContactItem
          icon="../../../src/assets/icons8-telegram-75.png"
          alt="Telegram Icon"
          title="TELEGRAM"
          link="ann_strnk"
          href="https://t.me/ann_strnk"
        />
      </div>
      <div className="contacts-email">
        <h3 className="title contacts-title">DROP ME AN EMAIL</h3>
        <ContactForm />
      </div>
    </div>
  );
}
