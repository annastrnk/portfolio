import { useState } from "react";

export default function ExperienceItem({ arr, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <div className="container experience-wrapper">
      <h3 className="experience-title">{title}</h3>
      {arr.map((item) => (
        <div key={item.id} className="experience-item">
          <div
            className="experience-item-title"
            onClick={() => toggleItem(item.id)}
          >
            <div className="experience-title-top">
              <p className="experience-item-date">{item.date}</p>
              <div
                className={`experience-item-icon ${
                  activeIndex === item.id ? "active" : ""
                }`}
              >
                <img src="/images/down.webp" alt="down" />
              </div>
            </div>

            <p className="experience-item-name">
              {item.name ? item.name : item.position}
            </p>
          </div>

          {activeIndex === item.id && (
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
          )}
        </div>
      ))}
    </div>
  );
}
