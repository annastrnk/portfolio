import AboutMe from "../../components/aboutMe/aboutMe";
import "./aboutPage.scss";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import Experiense from "../../components/experince/experience";

export default function AboutPage() {
  return (
    <PageWrapper>
        <div className="about-section">
          <AboutMe />
          <Experiense/>
        </div>
    </PageWrapper>
  );
}
