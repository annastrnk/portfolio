import { NavLink } from "react-router-dom";
import "./header.scss";

import Toggle from "../toggle/toggle";

export default function Header() {

  return (
    <header>
      <NavLink className="logo" to="/">
        anna starenka
      </NavLink>

      <Toggle />
    </header>
  );
}
