import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
  const defaultClass = 'nav';

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${defaultClass} active` : defaultClass
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${defaultClass} active` : defaultClass
            }
            to="/products"
          >
            Our Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
