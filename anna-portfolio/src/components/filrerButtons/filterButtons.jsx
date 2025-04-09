import { useDispatch, useSelector } from 'react-redux';
import './filterButtons.scss';
import { clearFilters, setTechnology } from '../../store/filtersSlice';

export default function FilterButtons(){

    const dispatch = useDispatch();
    const selectedTechnology = useSelector((state) => state.filters.technology);

    return(

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
    )
}