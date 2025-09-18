import ContactNav from "../../components/contactNav/contactNav";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import AboutPage from "../aboutPage/aboutPage";
import ContactsPage from "../contactsPage/contactsPage";
import PortfolioPage from "../portfolioPage/portfolioPage";
import "./mainPage.scss";
import FadeInWhenVisible from "../../components/animation/fadeInWhenVisible/fadeInWhenVisible";
import BlinkingCat from "../../components/cats/blinkingCat";
import SkillsPage from "../skillsPage/skillsPage";
import Intro from "../../components/intro/intro";

export default function MainPage() {
  return (
    <PageWrapper>
      <section>
        <FadeInWhenVisible>
      <Intro/>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <AboutPage />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <SkillsPage />
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
