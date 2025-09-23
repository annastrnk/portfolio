import "./projects.scss";

export default function Projects({ project }) {
  return (
    <div className="project-item">
      <img
        className="project-item-img"
        src={project.image}
        alt={project.title}
        loading="lazy"
      />
      <p className="project-item-title">{project.title}</p>
      <p className="project-item-desc" >{project.description}</p>
      <div className="project-item-links">
        <a className="link-project content-text" href={project.link} target="_blank">
         Live Website
        </a>
        <a className="link-project content-text" href={project.linkCode} target="_blank">
         Code
        </a>
      </div>
    </div>
  );
}
