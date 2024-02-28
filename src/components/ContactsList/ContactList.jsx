import { useSelector } from "react-redux";
import { Contact } from "./Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilters } from "../../redux/selectors";

export const ContactList = () => {
  const useContacts = useSelector(getContacts);
  const contacts = useContacts.items;
  const filters = useSelector(getFilters);

  let newContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contact_list}>
      {newContacts.map((user) => (
        <Contact user={user} key={user.id} />
      ))}
    </ul>
  );
};
