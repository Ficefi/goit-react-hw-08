import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import { fetchContacts } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage"));
const Phonebook = lazy(() => import("../pages/PhonebookPage"));
const SigninPage = lazy(() => import("../pages/SigninPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Suspense fallback={<b>Loading</b>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="login" element={<SigninPage />} />
        <Route path="register" element={<SignupPage />} />
      </Routes>
    </Suspense>
  );
};
