import "./projects.scss";
import PropTypes from "prop-types";

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
        <a 
          className="link-project content-text" 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live website`}
        >
         Live Website
        </a>
        <a 
          className="link-project content-text" 
          href={project.linkCode} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code`}
        >
         Code
        </a>
      </div>
    </div>
  );
}

Projects.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkCode: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
