import ContactNav from "../../components/contactNav/contactNav";
import AboutPage from "../aboutPage/aboutPage";
import ContactsPage from "../contactsPage/contactsPage";
import PortfolioPage from "../portfolioPage/portfolioPage";
import "./mainPage.scss";

export default function MainPage() {
  return (
    <section>
      <div className="container">
        <div className="main-section">
          <div className="main-section-text title">
            <p className="accent-text-title">Anna Starenka</p>
            <p>
              <span className="content-text-accent">Front-end developer</span>
              with a passion for creating beautiful and responsetive websites
            </p>
            <ContactNav />
          </div>
          <img
            className="main-section-photo"
            src="/images/IMG_7808.jpg"
            alt="main-photo"
          />
        </div>
      </div>
      <AboutPage />
      <PortfolioPage />
      <ContactsPage />
    </section>
  );
}
