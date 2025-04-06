import "./portfolio.scss";
import PortfolioItem from "./portfolioItem/portfolioItem";

import { useDispatch, useSelector } from "react-redux";
import { setTechnology, clearFilters } from "../../store/filtersSlice";
import projects from "../../../public/projectsData";

export default function Portfolio() {
  const dispatch = useDispatch();
  const selectedTechnology = useSelector((state) => state.filters.technology);

  const filteredProjects = selectedTechnology
    ? projects.filter((project) => project.tech.includes(selectedTechnology))
    : projects;

  return (
    <div className="container">
      <h2 className="title title-portfolio">MY WORKS</h2>

      <div>
        <div className="filter-btns">
          <button
            className={`filter-btns-item ${
              !selectedTechnology ? "active-btn" : ""
            }`}
            onClick={() => dispatch(clearFilters())}
          >
            All
          </button>
          <button
            className={`filter-btns-item ${
              selectedTechnology === "REACT" ? "active-btn" : ""
            }`}
            onClick={() => dispatch(setTechnology("REACT"))}
          >
            REACT
          </button>
          <button
            className={`filter-btns-item ${
              selectedTechnology === "JAVASCRIPT" ? "active-btn" : ""
            }`}
            onClick={() => dispatch(setTechnology("JAVASCRIPT"))}
          >
            JavaScript
          </button>
          <button
            className={`filter-btns-item ${
              selectedTechnology === "HTML + CSS" ? "active-btn" : ""
            }`}
            onClick={() => dispatch(setTechnology("HTML + CSS"))}
          >
            HTML + CSS
          </button>
        </div>
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
