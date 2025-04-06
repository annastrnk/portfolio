import "./main-page.scss";

export default function MainPage() {
  return (
    <section >
      <div className="container">
        <div className="main-section">
          <div className="title">
            <p>Hi there!</p>
            <performance>
              I`m <span className="accent-text-title">Anna Starenka</span>
            </performance>
            <p>
              <span className="accent-text">Front-end developer</span> with a
              passion for creating beautiful and responsetive websites
            </p>
          </div>
          <img
            className="main-photo"
            src="../../../src/assets/IMG_2844.jpg"
            alt="main-photo"
          />
        </div>
        <div className="contacts-nav">
          <a href="https://github.com/annastrnk" target="_blank">
            <img src="../../../src/assets/github-logo.png" alt="" />
          </a>
          <a href="https://gitlab.com/Anna_Starenka" target="_blank">
            <img src="../../../src/assets/gitlab-logo.png" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/anna-starenka/" target="_blank">
            <img src="../../../src/assets/linkedin-logo.png" alt="" />
          </a>
          <a
            href="../../../src/assets/SrarenkaAnna_cv_Frontend.pdf"
            download="Dowmload CV"
          >
            <div className="cv-block">
              <img src="../../../src/assets/download30.png" alt="" />
              <p>Dowmload my CV</p>
            
            </div>
            
          </a>
        </div>
      </div>
    </section>
  );
}
