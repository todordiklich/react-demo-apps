import { useContext } from 'react';

import LanguageContext from '../store/lang-context';
import { content } from '../utils/text-content';

import './Navigation.css';

export default function Navigation() {
  const langCtx = useContext(LanguageContext);

  const navContent =
    langCtx.language === 'bg' ? content.bg.navigation : content.en.navigation;

  return (
    <>
      <nav>
        <ul className="nav-bar">
          {Object.keys(navContent).map((key) => (
            <li key={key} className="nav-bar__item">
              <a href={`#${key}`}>
                {navContent[key as keyof typeof navContent]}
              </a>
            </li>
          ))}
          <li className="nav-bar__item">
            <select
              id="lang-select"
              value={langCtx.language}
              onChange={(e) =>
                langCtx.onChangeLanguage(e.target.value as 'bg' | 'en')
              }
            >
              <option value="bg">Български</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </nav>
    </>
  );
}
