import "./timeLineItem.scss";

export default function TimelineItem({ arr, img }) {
  return (
    <div className="timeLine">
      <img className="timeLine-img" src={img} />
      <div className="timeLine-wrapper">
        {arr.map((item) => (
          <div key={item.id} className="timeLine-item">
            <p className="timeLine-item-data">{item.date}</p>
            <p className="timeLine-item-name">
              {item.name ? item.name : item.position}
            </p>
            <p className="timeLine-item-company">{item.company}</p>
            <ul className="timeLine-item-desc">
              {item.description.map((line,index)=>(
                <li className="content-text" key={index}>{line}</li>
              ))}
            
            </ul>
            {item.certificate ? (
              <a className="timeLine-item-link" href={item.certificate}>
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
