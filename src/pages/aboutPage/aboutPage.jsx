import SkillsSection from "../../components/skillsSection/skillsSection";
import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import FadeInWhenVisible from "../../components/animation/fadeInWhenVisible/fadeInWhenVisible";
import Experiense from "../../components/experince/experience";

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* <div className="container"> */}
        <div className="about-section">
          <AboutMe />
          <Experiense/>
        </div>
      {/* </div> */}
    </PageWrapper>
  );
}
