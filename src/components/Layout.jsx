import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header/Header";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  });

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
