import FadeInWhenVisible from "../animation/fadeInWhenVisible/fadeInWhenVisible";
import ExperienceItem from "./experienceItem";
import studyData from "../../data/studydata";
import workData from '../../data/workData'

import "./experience.scss";
import HorizontalTitle from "../animation/horizontalTitle/horizontalTitle";

export default function Experience() {
  return (
    <div className="experience-section">
      <HorizontalTitle text="Experience" from = "-50%"to = "80%" className="title-section title-main-experience"/>
      <div className="experience-section-wrapper" >
      <FadeInWhenVisible delay={0.2}>
        <ExperienceItem  title="STUDY" arr={studyData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <ExperienceItem title="WORK" arr={workData} />
      </FadeInWhenVisible>
    </div>
    </div>
  );
}
