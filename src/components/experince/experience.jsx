import FadeInWhenVisible from "../animation/fadeInWhenVisible/fadeInWhenVisible";
import ExperienseItem from "./experienceItem";
import studyData from "../../../public/studydata";
import workData from '../../../public/workData.js'

import "./experiense.scss";
import HorizontalTitle from "../animation/horizontalTitle/horizontalTitle";

export default function Experiense() {
  return (
    <div className="experiense-section">
      <HorizontalTitle text="Experience" from = "-50%"to = "80%" className="title-section title-main-experience"/>
      <div className="experiense-section-wrapper" >
      <FadeInWhenVisible delay={0.2}>
        <ExperienseItem  title="STUDY" arr={studyData} />
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <ExperienseItem title="WORK" arr={workData} />
      </FadeInWhenVisible>
    </div>
    </div>
  );
}
