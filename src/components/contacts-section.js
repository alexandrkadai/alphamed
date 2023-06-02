import { Fragment } from 'react';
import './contacts.module.css';

const ContactsSection = () => {
  return (
    <Fragment>
      <section>
        <div>
          <span>Form of For Contacts</span>
          <span>Street 14L </span>
          <span>Number 12:00 </span>
        </div>

        <div>
          <span>Form of For Contacts</span>
          <span>Table of Contects</span>
        </div>
      </section>
      <div>
        <span>Google Maps</span>
      </div>
    </Fragment>
  );
};

export default ContactsSection;
