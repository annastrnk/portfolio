import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import Experience from "../../components/experience/experience";

export default function AboutPage() {
  return (
    <PageWrapper>
        <div className="about-section">
          <AboutMe />
          <Experience/>
        </div>
    </PageWrapper>
  );
}
