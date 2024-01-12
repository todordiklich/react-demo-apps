import { content } from '../utils/text-content';

import './Services.css';
import useLanguageContext from '../hooks/useLanguageContext';

export default function Services() {
  const { language } = useLanguageContext();

  const servicesContent =
    language === 'bg' ? content.bg.services : content.en.services;

  return (
    <>
      <section id="services">
        <h1>{servicesContent.info}</h1>
        <div className="services-grid">
          {servicesContent.services.map((service, index) => (
            <div key={index}>
              <img
                src="/law-auction-svgrepo-com.svg"
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
