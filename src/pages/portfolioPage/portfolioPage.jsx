import "./portfolioPage.scss";

import { useSelector } from "react-redux";
import projects from "../../../public/projectsData";
import PortfolioItem from "../../components/projects/projects";
import FilterButtons from "../../components/filrerButtons/filterButtons";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";
import Projects from "../../components/projects/projects";
import HorizontalTitle from "../../components/animation/horizontalTitle/horizontalTitle";

export default function PortfolioPage() {
  const selectedTechnology = useSelector((state) => state.filters.technology);

  const filteredProjects = selectedTechnology
    ? projects.filter((project) => project.tech.includes(selectedTechnology))
    : projects;

  return (
    <PageWrapper>
      <div className="portfolio-section">
      <HorizontalTitle
        text="Projects"
        from = "-80%" to = "40%"
        className="title-section title-portfolio"
      />
      <div className="container">
        <FilterButtons />
        <div className="portfolio-section-grid">
          {filteredProjects.map((project) => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>  
      </div>
    </PageWrapper>
  );
}
