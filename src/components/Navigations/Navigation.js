import '../../css/Navigation.css';
import foto from '../images/stud-foto.png';
import { ReactComponent as ArrowDown } from '../images/arrow-down.svg';
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
      <div className="container-user">
        <img
          className="user_foto"
          src={foto}
          alt="foto"
          width="32"
          height="32"
        />
        <ArrowDown width="10" height="5" />
      </div>
    </header>
  );
}

export default Navigation;
