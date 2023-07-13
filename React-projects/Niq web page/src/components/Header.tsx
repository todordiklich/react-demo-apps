import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [headerClass, setHeaderClass] = useState('');

  const menuBtnClickHandler = () => {
    setHeaderClass((prev) => {
      if (prev === 'nav-open') {
        return '';
      } else {
        return 'nav-open';
      }
    });
  };

  const linkClickHandler = () => {
    setHeaderClass((prev) => {
      if (prev === 'nav-open') {
        return '';
      } else {
        return 'nav-open';
      }
    });
  };

  return (
    <header className={headerClass}>
      <Navigation
        onLinkClick={linkClickHandler}
        onMenuBtnClick={menuBtnClickHandler}
      />
    </header>
  );
}
