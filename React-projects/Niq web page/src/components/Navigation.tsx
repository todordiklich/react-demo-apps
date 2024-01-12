import { content } from '../utils/text-content';
import useLanguageContext from '../hooks/useLanguageContext';

import './Navigation.css';

type NavigationProps = {
  onMenuBtnClick?: () => void;
  onLinkClick?: () => void;
};

export default function Navigation(props: NavigationProps) {
  const { language, onChangeLanguage } = useLanguageContext();

  document.title =
    language === 'bg' ? 'Адвокат Ния Диклич' : 'Lawyer Niya Diklich';

  const navContent =
    language === 'bg' ? content.bg.navigation : content.en.navigation;

  return (
    <>
      <nav>
        <ul className="nav-bar">
          {Object.keys(navContent).map((key) => (
            <li key={key} className="nav-bar__item">
              <a onClick={props.onLinkClick} href={`#${key}`}>
                {navContent[key as keyof typeof navContent]}
              </a>
            </li>
          ))}
          <li className="nav-bar__item">
            <select
              id="lang-select"
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value as 'bg' | 'en')}
            >
              <option value="bg">Български</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={props.onMenuBtnClick}>
        <img
          className="mobile-nav-icon"
          src="../../public/Bars3.svg"
          alt="mobile navigation menu button"
          role="img"
          data-name="menu-outline"
          aria-label="menu outline"
        />
        <img
          className="mobile-nav-icon"
          src="../../public//XMark.svg"
          alt="mobile navigation close button"
          role="img"
          data-name="close-outline"
          aria-label="close outline"
        />
      </button>
    </>
  );
}
