import "./contactsPage.scss";
import ContactForm from "../../components/contactForm/contactForm";
import ContactItem from "../../components/contacrItem/contactItem";
import PageWrapper from "../../components/animation/pageWrapper/pageWrapper";

export default function ContactsPage() {

  return (
    <PageWrapper>
    <footer className="contacts-section dark-section">

     
<div className="container">

<div className="contacts-wrapper">


      <div className="contacts-items">
         <h3 className=" title-contacts">
        Contact ME
      </h3>
        <ContactItem
          title="PHONE"
          link="38 063 762 74 77"
          href="tel:380637627477"
        />
        <ContactItem
          title="EMAIL"
          link="starenka.annaa@gmail.com"
          href="mailto:starenka.annaa@gmail.com"
        />
        <ContactItem
          title="WRITE ME"
          link="ann_strnk"
          href="https://t.me/ann_strnk"
        />
      </div>
      <div className="contacts-email">
        <h3 className=" contact-form-title">DROP ME AN EMAIL</h3>
        <ContactForm />
      </div>
      </div>
      </div>
    </footer>
    </PageWrapper>
  );
}
