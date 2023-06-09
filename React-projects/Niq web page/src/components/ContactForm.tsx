import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';

import './ContactForm.css';

export default function ContactForm() {
  const langCtx = useContext(LanguageContext);

  const contactContent =
    langCtx.language === 'bg' ? content.bg.contacts : content.en.contacts;

  return (
    <div className="contacts">
      <img
        src="../../public/location-pin-svgrepo-com.svg"
        alt="location"
        className="contacts-img"
      />
      <p>{contactContent.location}</p>
      <img
        src="../../public/email-address-sign-at-inbox-svgrepo-com.svg"
        alt="email"
        className="contacts-img"
      />
      <p>{contactContent.email}</p>
      <img
        src="../../public/phone-svgrepo-com.svg"
        alt="phone"
        className="contacts-img"
      />
      <p>{contactContent.phone}</p>
    </div>
  );
}
