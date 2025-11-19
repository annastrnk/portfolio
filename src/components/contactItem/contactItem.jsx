import './contactItem.scss';

export default function ContactItem({ title, link, href }) {
  return (
    <div className="contacts-item">
      <p className='contacts-item-title'>{title}:</p>
      <a className='contacts-item-link' href={href}>{link}</a>
    </div>
  );
}
