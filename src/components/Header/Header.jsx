import { NavigationBar } from "./NavigationBar/NavigationBar";
import { AuthBar } from "./AuthBar/AuthBar";
import { UserBar } from "./UserBar/UserBar";
import { useAuth } from "../../hooks/useAuth";
import css from "./Header.module.css";

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <NavigationBar />
      {isLoggedIn ? <UserBar /> : <AuthBar />}
    </header>
  );
};
