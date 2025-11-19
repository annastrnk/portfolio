import { useDispatch, useSelector } from 'react-redux';
import './filterButtons.scss';
import { clearFilters, setTechnology } from '../../store/filtersSlice';

export default function FilterButtons(){

    const dispatch = useDispatch();
    const selectedTechnology = useSelector((state) => state.filters.technology);

    return(

        <div className="filter-btns" role="group" aria-label="Filter projects by technology">
        <button
          className={`filter-btns-item ${
            !selectedTechnology ? "active-btn" : ""
          }`}
          onClick={() => dispatch(clearFilters())}
          aria-pressed={!selectedTechnology}
          aria-label="Show all projects"
        >
          All
        </button>
        <button
          className={`filter-btns-item ${
            selectedTechnology === "REACT" ? "active-btn" : ""
          }`}
          onClick={() => dispatch(setTechnology("REACT"))}
          aria-pressed={selectedTechnology === "REACT"}
          aria-label="Filter projects by React"
        >
          REACT
        </button>
        <button
          className={`filter-btns-item ${
            selectedTechnology === "JAVASCRIPT" ? "active-btn" : ""
          }`}
          onClick={() => dispatch(setTechnology("JAVASCRIPT"))}
          aria-pressed={selectedTechnology === "JAVASCRIPT"}
          aria-label="Filter projects by JavaScript"
        >
          JavaScript
        </button>
        <button
          className={`filter-btns-item ${
            selectedTechnology === "TypeScript" ? "active-btn" : ""
          }`}
          onClick={() => dispatch(setTechnology("TypeScript"))}
          aria-pressed={selectedTechnology === "TypeScript"}
          aria-label="Filter projects by TypeScript"
        >
          TypeScript
        </button>
        <button
          className={`filter-btns-item ${
            selectedTechnology === "NEXTJS" ? "active-btn" : ""
          }`}
          onClick={() => dispatch(setTechnology("NEXTJS"))}
          aria-pressed={selectedTechnology === "NEXTJS"}
          aria-label="Filter projects by Next.js"
        >
       NEXTJS
        </button>
        <button
          className={`filter-btns-item ${
            selectedTechnology === "EXPRESS" ? "active-btn" : ""
          }`}
          onClick={() => dispatch(setTechnology("EXPRESS"))}
          aria-pressed={selectedTechnology === "EXPRESS"}
          aria-label="Filter projects by Express"
        >
          EXPRESS
        </button>
      </div>
    )
}