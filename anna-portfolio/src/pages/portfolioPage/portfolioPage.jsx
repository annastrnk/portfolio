import "./portfolioPage.scss";

import { useSelector } from "react-redux";
import projects from "../../../public/projectsData";
import PortfolioItem from "../../components/portfolioItem/portfolioItem";
import FilterButtons from "../../components/filrerButtons/filterButtons";

export default function PortfolioPage() {
  const selectedTechnology = useSelector((state) => state.filters.technology);

  const filteredProjects = selectedTechnology
    ? projects.filter((project) => project.tech.includes(selectedTechnology))
    : projects;

  return (
    <div className="container">
      <h2 className="title title-portfolio">MY WORKS</h2>
      <FilterButtons />
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
