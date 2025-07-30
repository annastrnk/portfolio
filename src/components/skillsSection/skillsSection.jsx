import "./skillsSection.scss";
import skillsCurrent from "../../../public/skillsCurrent";
import SleepingCat from "../cats/sleepingCat";

export default function SkillsSection() {
  return (
    <div className="skills">
      <div className="skills-img">
        <div className="skills-img-wrapper">
          {skillsCurrent.map((img) => (
            <div key={img.id}  className="skills-img-wrapper-item">
            <img
              src={img.src}
              alt={img.alt}
            />
            <span className="content-text">{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="title skills-text">
        MY <span className="content-text-accent">SKILLS</span>
        <SleepingCat/>
      </h3>
    </div>
  );
}
