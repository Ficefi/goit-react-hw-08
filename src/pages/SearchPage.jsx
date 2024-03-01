import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactList } from "../components/ContactsList/ContactList";

const Search = () => {
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

export default Search;
