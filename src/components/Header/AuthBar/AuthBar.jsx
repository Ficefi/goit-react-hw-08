import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.header_link, isActive && css.active);
};

export const AuthBar = () => {
  return (
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
  );
};
