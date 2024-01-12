import { content } from '../utils/text-content';
import Navigation from './Navigation';
import useLanguageContext from '../hooks/useLanguageContext';

import './Footer.css';

export default function Footer() {
  const { language } = useLanguageContext();

  const footerContent =
    language === 'bg' ? content.bg.footer : content.en.footer;

  return (
    <>
      <footer>
        <Navigation />
        <p className="footer-bar__item">{footerContent}</p>
      </footer>
    </>
  );
}
