import Accordion from "../ui/accordion";

export default function ExperienceItem({ arr }) {
  return (
    <div className="experience-wrapper">
      {arr.map((item) => (
        <div key={item.id} className="experience-item">
          <Accordion
            title={
              <div className="experience-title">
                <div className="experience-title-top">
                  <p className="experience-item-date">{item.date}</p>
                  {/* <span>
                  {isActive ? (
                    <img src="/public/images/up.png" alt="up" />
                  ) : (
                    <img src="/images/down.png" alt="down" />
                  )}
                </span> */}
                </div>

                <p className="experience-item-name">
                  {item.name ? item.name : item.position}
                </p>
              </div>
            }
            content={
              <div className="experience-content">
                <ul className="experience-item-desc">
                  {item.description.map((line, i) => (
                    <li className="experience-content-text" key={i}>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="experience-content-bottom">
                  {item.certificate && (
                    <a
                      className="experience-item-certificate"
                      href={item.certificate}
                    >
                      Watch Certificate
                    </a>
                  )}
                  <p className="experience-item-company">{item.company}</p>
                </div>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
}
