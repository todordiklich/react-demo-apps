import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';

import './About.css';

export default function About() {
  const langCtx = useContext(LanguageContext);

  const aboutContent =
    langCtx.language === 'bg' ? content.bg.about : content.en.about;

  return (
    <>
      <section id="about">
        <div className="flex-container">
          <div className="pic experiance-pic">
            <img src="../../public/niq_1.jpg" />
          </div>
          <div className="description experiance-description">
            <p>{aboutContent}</p>
          </div>
        </div>
      </section>
    </>
  );
}
