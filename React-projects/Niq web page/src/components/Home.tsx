import { content } from '../utils/text-content';
import ContactForm from './ContactForm';
import useLanguageContext from '../hooks/useLanguageContext';

import './Home.css';

export default function Home() {
  const { language } = useLanguageContext();

  const homeContent = language === 'bg' ? content.bg.home : content.en.home;

  return (
    <>
      <section id="home">
        <div className="flex-container">
          <div className="description home-description">
            <h1>{homeContent.name}</h1>
            <q>{homeContent.quote}</q>

            <ContactForm />
          </div>
          <div className="pic home-pic">
            <img src="/niq.jpg" alt="Адвокат Ния Диклич" />
          </div>
        </div>
      </section>
    </>
  );
}
