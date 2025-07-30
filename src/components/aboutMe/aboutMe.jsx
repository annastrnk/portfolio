import "./aboutMe.scss";

import studyData from "../../../public/studydata";
import imageStudy from "../../../public/images/study.png";
import TimelineItem from "./TimelineItem/TimelineItem";
import imageWork from "../../../public/images/work.png";
import workData from "../../../public/workData";
import FadeInWhenVisible from "../animation/fadeInWhenVisible/fadeInWhenVisible";


export default function AboutMe() {
  return (
    <>
      <div className="about-me">
      
          <h3 className="title about-me-title">
            ABOUT <span className="content-text-accent">ME</span>
          </h3>
        <div className="content-text">
          <p>
            Front-End Developer with hands-on experience building responsive,
            accessible web applications using React, Redux Toolkit, JavaScript,
            and TypeScript. Experienced in both Single Page Applications (SPA)
            and server-rendered or multi-page setups using frameworks.
          </p>
          <p>
            Skilled in REST API integration, reusable component architecture,
            and agile collaboration.
          </p>

          <p>
            Strong understanding of UI/UX design principles, performance
            optimization, and cross-browser compatibility. Tran- sitioned from a
            10+ year leadership role in veterinary medicine, bringing proven
            adaptability, communication, and problem-solving skills.
          </p>
          <p>
            Fast learner, detail-oriented, and motivated to contribute to
            real-world products in a collaborative environment.
          </p>
        </div>
      </div>
      <div className="about-me-experience">
        <FadeInWhenVisible delay={0.2}>
          <TimelineItem img={imageStudy} arr={studyData} />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <TimelineItem img={imageWork} arr={workData} />
        </FadeInWhenVisible>
      </div>
    </>
  );
}
