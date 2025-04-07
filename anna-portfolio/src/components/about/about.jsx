import "./about.scss";

export default function About() {
  return (
    <section>
      <div className="container">
        <div className="about-section">
          <div className="about-me">
            <h3 className="title about-me-title">
              ABOUT <span className="content-text-accent">ME</span>
            </h3>
            <div className="content-text about-me-text">
              <p>
                I’m a Front-End Developer with a background in veterinary
                medicine and team leadership. Now I bring the same precision,
                problem-solving, and empathy into tech.
              </p>
              <p>
                I specialize in building responsive and intuitive user
                interfaces using{" "}
                <span className="content-text-accent">
                  React, JavaScript, HTML and CSS
                </span>
              </p>
              <p>
                A graduate of{" "}
                <span className="content-text-accent"> DAN.IT Education</span>{" "}
                I’ve worked on real-world projects that sharpened my skills in
                state management, routing, and performance optimization.
              </p>
              <a
                className="content-text-accent"
                href="https://certificates.dan-it.com.ua/certificates/frontend/anna-starenka"
                target="_blank"
              >
                Diploma
              </a>
              <p>
                I’m passionate about clean code, great UI/UX, and continuous
                learning
              </p>
              <p>
                Currently based in
                <span className="content-text-accent"> Kyiv</span>
              </p>
            </div>
          </div>
          <div class="double-line-separator "></div>
          <div className="skills">
            <div className="skills-img">
              <div className="skills-img-current">
                <img
                  className="technology-img"
                  src="../../../src/assets/html.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/css.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/js.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/reacr.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/sass.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/nodeJs.png"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/git.png"
                  alt=""
                />
              </div>
              <div className="skills-img-soon">
                <img
                  className="technology-img"
                  src="../../../src/assets/next-js-seeklogo.svg"
                  alt=""
                />
                <img
                  className="technology-img"
                  src="../../../src/assets/typescript.png"
                  alt=""
                />
                <p className="content-text">COMING SOON...</p>
              </div>
            </div>
            <h3 className="title skills-text">
              MY <span className="content-text-accent">SKILLS</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
