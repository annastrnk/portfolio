import './contactItem.scss';

export default function ContactItem({ icon, alt, title, link, href }) {
  return (
    <div className="contacts-item">
      <img className="contacts-item-img" src={icon} alt={alt} />
      <p>{title}</p>
      <a className='contacts-item-link' href={href}>{link}</a>
    </div>
  );
}
