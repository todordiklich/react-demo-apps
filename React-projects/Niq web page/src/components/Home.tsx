import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';
import ContactForm from './ContactForm';

import './Home.css';

export default function Home() {
  const langCtx = useContext(LanguageContext);

  const homeContent =
    langCtx.language === 'bg' ? content.bg.home : content.en.home;

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
