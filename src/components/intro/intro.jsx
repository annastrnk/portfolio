import "./intro.scss";

import ContactNav from "../contactNav/contactNav";

export default function Intro() {
  return (
    <div className="intro-section dark-section">
      <div className="container text-intro">
        <div className="text-accent ">
         <p >
          <span className="text-intro-contrast">Front-end developer </span>
          with a passion for creating beautiful and responsive websites
        </p>
        <p className="text-intro-name">Anna Starenka</p>
        </div>
        <ContactNav />
      </div>
    </div>
  );
}
