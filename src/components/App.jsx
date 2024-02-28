import "./App.css";
import { useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactsList/ContactList";
import { fetchContacts } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";

const key = "saved-users";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Phonebook
      </h2>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
