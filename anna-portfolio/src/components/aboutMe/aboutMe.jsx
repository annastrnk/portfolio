import './aboutMe.scss';

export default function AboutMe(){

    return(
        <div className="about-me">
        <h3 className="title about-me-title">
          ABOUT <span className="content-text-accent">ME</span>
        </h3>
        <div className="content-text">
          <p>
            I’m a Front-End Developer with a background in veterinary
            medicine and team leadership. Now I bring the same precision,
            problem-solving, and empathy into tech.
          </p>
          <p>
            I specialize in building responsive and intuitive user
            interfaces using
            <span className="content-text-accent">
              React, JavaScript, HTML and CSS
            </span>
          </p>
          <p>
            A graduate of
            <span className="content-text-accent"> DAN.IT Education</span>
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
    )
}

