import { content } from '../utils/text-content';
import useLanguageContext from '../hooks/useLanguageContext';

import './ContactForm.css';

export default function ContactForm() {
  const { language } = useLanguageContext();

  const contactContent =
    language === 'bg' ? content.bg.contacts : content.en.contacts;

  return (
    <div className="contacts">
      <img
        src="/location-pin-svgrepo-com.svg"
        alt="location"
        className="contacts-img"
      />
      <p>
        <a
          href={
            'https://www.google.com/maps/place/ul.+%22Ivan+Gyuzelev%22+1%D0%91,+5300+Gabrovo+Center,+Gabrovo/@42.870517,25.317484,18z/data=!4m6!3m5!1s0x40a91ab7612de5bd:0x8854e9c3d8ea846!8m2!3d42.8705174!4d25.3174835!16s%2Fg%2F11c5m1v2cm?hl=en&entry=ttu'
          }
          target="_blank"
        >
          {contactContent.location}
        </a>
      </p>
      <img
        src="/email-address-sign-at-inbox-svgrepo-com.svg"
        alt="email"
        className="contacts-img"
      />
      <p>
        <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
      </p>
      <img src="/phone-svgrepo-com.svg" alt="phone" className="contacts-img" />
      <p>
        <a href={`href=tel:${contactContent.phone}`}>{contactContent.phone}</a>
      </p>
    </div>
  );
}
