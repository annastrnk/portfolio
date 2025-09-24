import BlinkingCat from "../cats/blinkingCat";
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <>
      <div className="title-about-me-wrapper">
        <h3 className="title-about-me">
          AB
          <span className="title-letter-o">
            O
            <span className="title-about-me-cat">
              <img
                src="/images/f1108dee5d74f6afd1c7c2be40e8923b5845efe1.png"
                alt=""
              />
            </span>
          </span>
          UT ME
        </h3>
      </div>

      <p className="container text-main-about">
        Front-End Developer with hands-on experience building responsive,
        accessible web applications using React, Redux Toolkit, JavaScript, and
        TypeScript.
      </p>
      <div className="dark-section">
        <div className="container about-me-content">
          <div className="about-me-content-img">
            <img src="/images/image-about-me.webp" alt="about-me-image" />
          </div>

          <div className="about-me-content-desk">
            <p className="about-me-content-title">Experienced in</p>
            <p className="about-me-content-text">
              both Single Page Applications (SPA) and server-rendered or
              multi-page setups using frameworks. Skilled in REST API
              integration, reusable component architecture, and agile
              collaboration.
            </p>
            <p className="about-me-content-title">Strong understanding of</p>
            <p className="about-me-content-text">
              UI/UX design principles, performance optimization, and
              cross-browser compatibility. Tran- sitioned from a 10+ year
              leadership role in veterinary medicine, bringing proven
              adaptability, communication, and problem-solving skills.
            </p>
            <p className="about-me-content-title"> Fast learner</p>
            <p className="about-me-content-text">
              detail-oriented, and motivated to contribute to real-world
              products in a collaborative environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
