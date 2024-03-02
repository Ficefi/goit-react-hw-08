import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.header_link, isActive && css.active);
};

export const Header = () => {
  return (
    <header className={css.header}>
      <ul className={css.nav_list}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/phonebook" className={buildLinkClass}>
            Phonebook
          </NavLink>
        </li>
      </ul>
      <ul className={css.authentication_list}>
        <li>
          <NavLink to="/register" className={buildLinkClass}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={buildLinkClass}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
