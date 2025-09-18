import "./intro.scss";

import ContactNav from "../contactNav/contactNav";

export default function Intro() {
  return (
    <div className="intro-section">
      <div className="container text-main text-intro">
        <p className="text-main ">
          <span className="text-intro-contrast">Front-end developer </span>
          with a passion for creating beautiful and responsetive websites
        </p>
        <p className="text-intro-name">Anna Starenka</p>

        <ContactNav />
      </div>
    </div>
  );
}
