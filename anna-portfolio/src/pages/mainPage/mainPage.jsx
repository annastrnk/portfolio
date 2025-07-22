import ContactNav from "../../components/contactNav/contactNav";
import "./mainPage.scss"



export default function MainPage() {
  return (
    <section >
      <div className="container">
        <div className="main-section">
          <div className="title">
            <p>Hi there!</p>
            <p>
              I`m <span className="accent-text-title">Anna Starenka</span>
            </p>
            <p>
              <span className="content-text-accent">Front-end developer</span> with a
              passion for creating beautiful and responsetive websites
            </p>
          </div>
          <img
            className="main-photo"
            src="../../../src/assets/IMG_2844.jpg"
            alt="main-photo"
          />
        </div>
        <ContactNav/>
      </div>
    </section>
  );
}
