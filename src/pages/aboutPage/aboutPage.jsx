import SkillsSection from "../../components/skillsSection/skillsSection";
import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";

export default function AboutPage() {
  return (
      <div className="container">
        <div className="about-section">
          <AboutMe />
          <div className="double-line-separator "></div>
          <SkillsSection />
        </div>
      </div>
  );
}
