import "./App.css";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/operations";
import { PrivateRoute } from "../components/PrivateRoute";
import { RestrictedRoute } from "../components/RestrictedRoute";
import { Layout } from "./Layout";

const Home = lazy(() => import("../pages/HomePage"));
const Phonebook = lazy(() => import("../pages/PhonebookPage"));
const SigninPage = lazy(() => import("../pages/SigninPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#aaf"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{ margin: "0 auto" }}
      wrapperClass=""
      visible={true}
    />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<SignupPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<SigninPage />}
              />
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
