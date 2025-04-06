import "./about.scss";

export default function About() {
  return (
    <section >
      <div className="container">
        <div className="about-section">
        <div className="about-me">
          <h3 className="title about-me-title">
            ABOUT <span className="accent-text-content">ME</span>
          </h3>
          <div className="content-text about-me-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sequi ipsum dolore deleniti explicabo dolores vero repudiandae
              ullam
            </p>
            <p>
              quibusdam ducimus, expedita ea fugiat est soluta! Nihil eos itaque
              molestiae minima? Recusandae
            </p>
            <p>
              praesentium numquam? Distinctio reiciendis ipsa repellendus
              inventore sequi, iure corporis natus.
            </p>
          </div>
        </div>
        <div class="double-line-separator "></div>
        <div className="skills">
          <div className="skills-img">
            <img className="technology-img" src="../../../src/assets/html.png" alt="" />
            <img className="technology-img" src="../../../src/assets/css.png" alt="" />
            <img className="technology-img" src="../../../src/assets/js.png" alt="" />
            <img className="technology-img" src="../../../src/assets/reacr.png" alt="" />
            <img className="technology-img" src="../../../src/assets/sass.png" alt="" />
            <img className="technology-img" src="../../../src/assets/nodeJs.png" alt="" />
            <img className="technology-img" src="../../../src/assets/git.png" alt="" />
            </div>
          <h3 className="title skills-text">
            MY <span className="accent-text-content">SKILLS</span>
          </h3>
        </div>
      </div>
      </div>
    </section>
  );
}
