import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';
import ContactForm from './ContactForm';

import './Contact.css';

export default function Contact() {
  const langCtx = useContext(LanguageContext);

  const contactContent =
    langCtx.language === 'bg' ? content.bg.contacts : content.en.contacts;

  return (
    <>
      <section id="contact">
        <div className="flex-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.0275586497295!2d25.3168397696197!3d42.87051739819689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a91ab7612de5bd%3A0x8854e9c3d8ea846!2sul.%20%22Ivan%20Gyuzelev%22%201%D0%91%2C%205300%20Gabrovo%20Center%2C%20Gabrovo!5e0!3m2!1sen!2sbg!4v1686229147225!5m2!1sen!2sbg"
              loading="lazy"
              width="100%"
              height="420px"
            ></iframe>
          </div>
          <div className="contact-info">
            <h2>{contactContent.title}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
