import { Header } from "../components/Header/Header";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactList } from "../components/ContactsList/ContactList";

const Phonebook = () => {
  return (
    <>
      <Header />
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
