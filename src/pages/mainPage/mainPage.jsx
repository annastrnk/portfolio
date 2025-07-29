import ContactNav from "../../components/contactNav/contactNav";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import AboutPage from "../aboutPage/aboutPage";
import ContactsPage from "../contactsPage/contactsPage";
import PortfolioPage from "../portfolioPage/portfolioPage";
import "./mainPage.scss";
import FadeInWhenVisible from "../../components/animation/fadeInWhenVisible/fadeInWhenVisible";

export default function MainPage() {
  return (
    <PageWrapper>
      <section>
        <FadeInWhenVisible>
          <div className="container">
            <div className="main-section">
              <div className="main-section-text title">
                <p className="accent-text-title">Anna Starenka</p>
                <p>
                  <span className="content-text-accent">
                    Front-end developer{" "}
                  </span>
                  with a passion for creating beautiful and responsetive
                  websites
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
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <AboutPage />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <PortfolioPage />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <ContactsPage />
        </FadeInWhenVisible>
      </section>
    </PageWrapper>
  );
}
