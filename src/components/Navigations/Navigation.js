import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>
          SCHOOL 1
        </NavLink>
        <ul className={s.listMenu}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              ANALYTICS
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              GRADEBOOKS
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              TESTS
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/students"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              STUDENTS
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              TEACHERS
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? s.active : s.link}`}
            >
              ARCHIVE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
