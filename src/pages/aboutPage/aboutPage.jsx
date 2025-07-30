import SkillsSection from "../../components/skillsSection/skillsSection";
import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import FadeInWhenVisible from "../../components/animation/fadeInWhenVisible/fadeInWhenVisible";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container">
        <div className="about-section">
          <AboutMe />
          <div className="double-line-separator "></div>
          <FadeInWhenVisible delay={0.2}>
            <SkillsSection />
          </FadeInWhenVisible>
        </div>
      </div>
    </PageWrapper>
  );
}
