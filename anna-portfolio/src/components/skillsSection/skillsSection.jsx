import "./skillsSection.scss";
import skillsCurrent from "../../../public/skillsCurrent";
import skillsUpcoming from "../../../public/skillsUpcoming";


export default function SkillsSection() {
  return (
    <div className="skills">
      <div className="skills-img">
        <div className="skills-img-current">
          {skillsCurrent.map((img) => (
            <img
              className="technology-img"
              key={img.id}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
        <div className="skills-img-soon">
          {skillsUpcoming.map((img) => (
            <img
              className="technology-img"
              key={img.id}
              src={img.src}
              alt={img.alt}
            />
          ))}

          <p className="content-text">COMING SOON...</p>
        </div>
      </div>
      <h3 className="title skills-text">
        MY <span className="content-text-accent">SKILLS</span>
      </h3>
    </div>
  );
}
