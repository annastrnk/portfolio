import SkillsSection from "../../components/skillsSection/skillsSection";
import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container">
        <div className="about-section">
          <AboutMe />
          <div className="double-line-separator "></div>
          <SkillsSection />
        </div>
      </div>
      </PageWrapper>
  );
}
