import { content } from '../utils/text-content';
import useLanguageContext from '../hooks/useLanguageContext';

import './About.css';

export default function About() {
  const { language } = useLanguageContext();

  const aboutContent = language === 'bg' ? content.bg.about : content.en.about;

  return (
    <>
      <section id="about">
        <div className="flex-container">
          <div className="pic experiance-pic">
            <img src="/niq_1.jpg" />
          </div>
          <div className="description experiance-description">
            <p>{aboutContent}</p>
          </div>
        </div>
      </section>
    </>
  );
}
