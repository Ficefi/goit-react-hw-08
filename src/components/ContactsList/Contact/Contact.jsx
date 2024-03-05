import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsTrash3,
  BsPencilSquare,
} from "react-icons/bs";
import { useState } from "react";
import { ModalChange } from "../../ModalChange/ModalChange";
import { ModalDelete } from "../../ModalDelete/ModalDelete";
import css from "./Contact.module.css";

export const Contact = ({ user }) => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [changeIsOpen, setChangeIsOpen] = useState(false);
  const { name, number, id } = user;

  const changeOpen = () => {
    setChangeIsOpen(true);
  };

  const deleteOpen = () => {
    setDeleteIsOpen(true);
  };

  const changeClose = () => {
    setChangeIsOpen(false);
  };

  const deleteClose = () => {
    setDeleteIsOpen(false);
  };

  return (
    <li className={css.user_card}>
      <p>
        {<BsFillPersonFill className={css.user_icon} />}
        {name}
      </p>
      <p>
        {<BsFillTelephoneFill className={css.user_icon} />}
        {number}
      </p>
      <button className={css.change_btn} onClick={changeOpen}>
        <BsPencilSquare size={24} className={css.change_icon} />
      </button>
      <button className={css.delete_btn} onClick={deleteOpen}>
        <BsTrash3 size={24} className={css.trash_icon} />
      </button>
      <ModalChange isOpen={changeIsOpen} modalClose={changeClose} id={id} />
      <ModalDelete isOpen={deleteIsOpen} modalClose={deleteClose} id={id} />
    </li>
  );
};
