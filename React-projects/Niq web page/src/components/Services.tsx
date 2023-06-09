import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';

import './Services.css';

export default function Services() {
  const langCtx = useContext(LanguageContext);

  const servicesContent =
    langCtx.language === 'bg' ? content.bg.services : content.en.services;

  return (
    <>
      <section id="services">
        <h1>{servicesContent.info}</h1>
        <div className="services-grid">
          {servicesContent.services.map((service, index) => (
            <div key={index}>
              <img
                src="../../public/law-auction-svgrepo-com.svg"
                alt="location"
                className="service-img"
              />
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}