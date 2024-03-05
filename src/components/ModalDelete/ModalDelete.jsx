import { useDispatch } from "react-redux";
import { deleteFromList } from "../../redux/contacts/operations";
import css from "./ModalDelete.module.css";
import clsx from "clsx";
import Modal from "react-modal";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "linear-gradient(90deg, #adf, #aaf, #bbf)",
    marginRight: "-50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalDelete = ({ isOpen, modalClose, id }) => {
  const dispatch = useDispatch();

  const deleteUser = () => {
    dispatch(deleteFromList(id))
      .unwrap()
      .then(() => {
        toast.success("You successful delete contact");
      })
      .catch(() => {
        toast.error("Contact wasn`t deleted");
        toast.error("ERROR!");
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={modalClose} style={customStyles}>
      <h2 className={css.article}>
        Ви впевнені, що хочете видалити цей контакт?
      </h2>
      <div className={css.button_wrapper}>
        <button
          onClick={() => deleteUser()}
          className={clsx(css.button, css.yes)}
        >
          Так
        </button>
        <button
          onClick={() => modalClose()}
          className={clsx(css.button, css.no)}
        >
          Ні
        </button>
      </div>
    </Modal>
  );
};
