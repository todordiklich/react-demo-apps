import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';
import Navigation from './Navigation';

import './Footer.css';

export default function Footer() {
  const langCtx = useContext(LanguageContext);

  const footerContent =
    langCtx.language === 'bg' ? content.bg.footer : content.en.footer;

  return (
    <>
      <footer>
        <Navigation />
        <p className="footer-bar__item">{footerContent}</p>
      </footer>
    </>
  );
}
