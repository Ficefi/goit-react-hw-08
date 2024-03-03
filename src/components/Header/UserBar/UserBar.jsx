import { useAuth } from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import css from "./UserBar.module.css";

export const UserBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.user_wrapper}>
      <p className={css.welcome}>Welcome, {user.name}</p>
      <button className={css.logOut} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
