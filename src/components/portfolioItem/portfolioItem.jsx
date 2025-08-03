import "./portfolioItem.scss";

export default function PortfolioItem({ project }) {
  return (
    <div className="portfolio-item">
      <img
        className="portfolio-item-img"
        src={project.image}
        alt={project.title}
        loading="lazy"
      />
      <p className="title-item">{project.title}</p>
      <p>{project.technologies}</p>
      <p >{project.description}</p>
      <div className="portfolio-item-links">
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
