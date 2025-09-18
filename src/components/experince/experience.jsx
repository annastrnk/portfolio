import FadeInWhenVisible from "../animation/fadeInWhenVisible/fadeInWhenVisible";
import ExperienseItem from "./experienceItem";
import studyData from "../../../public/studydata";
import workData from '../../../public/workData.js'

import "./experiense.scss";
import HorizontalTitle from "../animation/horizontalTitle/horizontalTitle";

export default function Experiense() {
  return (
    <div className="experiense-section">
      <HorizontalTitle text="Experiense" className="title-section title-experience"/>
      <FadeInWhenVisible delay={0.2}>
        <ExperienseItem  arr={studyData} />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible delay={0.2}>
        <ExperienseItem  arr={workData} />
      </FadeInWhenVisible> */}
    </div>
  );
}
