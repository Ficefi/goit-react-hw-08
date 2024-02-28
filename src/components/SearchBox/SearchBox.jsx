import { useId } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filterSearch } from "../../redux/filterSlice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const searchID = useId();
  const dispatch = useDispatch();

  return (
    <form className={css.search_box}>
      <label htmlFor={searchID} className={css.search_label}>
        Find contacts by name
      </label>
      <div className={css.input_wrapper}>
        <input
          type="text"
          id={searchID}
          className={css.search_input}
          onChange={(event) => dispatch(filterSearch(event.target.value))}
          placeholder="Search your contact"
        />
        <BsSearch className={css.search_icon} />
      </div>
    </form>
  );
};
