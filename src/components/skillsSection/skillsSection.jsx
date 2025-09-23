import "./skillsSection.scss";
import skills from "../../../public/skills";
import HorizontalTitle from "../animation/horizontalTitle/horizontalTitle";
import { useState } from "react";

export default function SkillsSection() {
  const [hoveredTitle, setHoveredTitle] = useState("");
  return (
    <div className="skills">
      <HorizontalTitle
        text="MY SKILLS "
        className="title-section skills-title"
      />
      <div className="skills-section dark-section">
        <div className="container skills-wrapper">
          {skills.map((skill) => (
            <div key={skill.id} className="skills-item mobile-view">
              <p className="skills-item-title">{skill.title}</p>
              <p className="skills-item-desc">
                {skill.technogies.join(", ")}{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="desktop-view container">
            <div className="skills-column-left">
              {hoveredTitle && <p className="skills-item-title">{hoveredTitle}</p>}
            </div>
            <div className="skills-column-right">
              {skills.map((skill) =>
                skill.technogies.map((tech) => (
                  <div
                    key={tech}
                    className="skills-item-desc"
                    onMouseEnter={() => setHoveredTitle(skill.title)}
                    onMouseLeave={() => setHoveredTitle("")}
                  >
                    {tech}
                  </div>
                ))
              )}
            </div>
            </div>
      </div>
    </div>
  );
}
