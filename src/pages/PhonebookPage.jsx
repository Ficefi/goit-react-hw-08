import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactList } from "../components/ContactsList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <main>
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
      </main>
    </>
  );
};

export default Phonebook;
