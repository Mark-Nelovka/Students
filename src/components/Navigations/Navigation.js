// import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          SCHOOL 1
        </NavLink>

        <NavLink
          to="#"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          ANALYTICS
        </NavLink>
        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          GRADEBOOKS
        </NavLink>

        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          TESTS
        </NavLink>
        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          STUDENTS
        </NavLink>

        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          TEACHERS
        </NavLink>
        <NavLink
          to="/"
          // className={({ isActive }) => `${isActive ? s.active : s.link}`}
        >
          ARCHIVE
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
