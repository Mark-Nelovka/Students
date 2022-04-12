import '../../css/Navigation.css';
import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="link">
          SCHOOL 1
        </NavLink>
        <ul className="list-menu">
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
            >
              ANALYTICS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
            >
              GRADEBOOKS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
            >
              TESTS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/students"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
            >
              STUDENTS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
            >
              TEACHERS
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : 'link'}`}
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
