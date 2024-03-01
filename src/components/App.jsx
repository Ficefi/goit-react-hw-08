import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import { fetchContacts } from "../redux/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage"));
const Search = lazy(() => import("../pages/SearchPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
