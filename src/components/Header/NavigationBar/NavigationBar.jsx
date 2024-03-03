import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import clsx from "clsx";
import css from "./NavigationBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.header_link, isActive && css.active);
};

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ul className={css.nav}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/phonebook" className={buildLinkClass}>
            Phonebook
          </NavLink>
        </li>
      )}
    </ul>
  );
};
