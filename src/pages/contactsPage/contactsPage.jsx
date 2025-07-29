import "./contactsPage.scss";
import ContactForm from "../../components/contactForm/contactForm";
import ContactItem from "../../components/contacrItem/contactItem";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";

export default function ContactsPage() {

  return (
    <PageWrapper>
    <div className="container">
      <h3 className="title contacts-title">
        Contact <span className="content-text-accent">ME</span>
      </h3>

      <div className="contacts-wrapper">
        <ContactItem
          icon="/images/phone.png"
          alt="Phone Icon"
          title="PHONE"
          link="38 063 762 74 77"
          href="tel:380637627477"
        />
        <ContactItem
          icon="/images/email.png"
          alt="Email Icon"
          title="EMAIL"
          link="starenka.annaa@gmail.com"
          href="mailto:starenka.annaa@gmail.com"
        />
        <ContactItem
          icon="/images/telegram.png"
          alt="Telegram Icon"
          title="TELEGRAM"
          link="ann_strnk"
          href="https://t.me/ann_strnk"
        />
      </div>
      <div className="contacts-email">
        <h3 className="title contact-form-title">DROP ME AN EMAIL</h3>
        <ContactForm />
      </div>
    </div>
    </PageWrapper>
  );
}
