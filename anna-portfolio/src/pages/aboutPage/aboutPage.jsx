import SkillsSection from "../../components/skillsSection/skillsSection";
import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";

export default function AboutPage() {
  return (
    <section>
      <div className="container">
        <div className="about-section">
          <AboutMe />
          <div class="double-line-separator "></div>
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}
