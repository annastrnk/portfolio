import "./timeLineItem.scss";

export default function TimelineItem({ arr, img }) {
  return (
    <div className="timeLine">
      <img className="timeLine-img" src={img} />
      <div className="timeLine-wrapper">
        {arr.map((item) => (
          <div key={item.id} className="timeLine-item">
            <p className="timeline-item-data">{item.date}</p>
            <p className="timeline-item-name">
              {item.name ? item.name : item.position}
            </p>
            <p className="timeline-item-company">{item.company}</p>
            <p className="timeline-item-desc">{item.description}</p>
            {item.certificate ? (
              <a className="timeline-item-link" href={item.certificate}>
                Certificate
              </a>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
