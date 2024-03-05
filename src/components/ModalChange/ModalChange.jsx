import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsPencilSquare } from "react-icons/bs";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ModalChange.module.css";
import Modal from "react-modal";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name must be less than 50 symb long")
    .matches(/^[^0-9][^@#%^&$*]+$/, "Your name isn`t right")
    .required("This is a required field"),
  number: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "It`s must be a phone number"
    )
    .min(10, "Number must be a 10 symb")
    .max(10, "Number must be a 10 symb")
    .required("This is a required field"),
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "20px",
    background: "linear-gradient(90deg, #adf, #aaf, #bbf)",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalChange = ({ isOpen, modalClose, id }) => {
  const nameID = useId();
  const phoneID = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(changeContact({ id, ...values }))
      .unwrap()
      .then(() => {
        toast.success("You successful change contact");
      })
      .catch(() => {
        toast.error("You don`t change contact");
        toast.error("ERROR!");
      });
    actions.resetForm();
  };

  const init = {
    name: "",
    number: "",
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={modalClose} style={customStyles}>
      <h2 className={css.article}>Change your contact</h2>
      <Formik
        validationSchema={userSchema}
        initialValues={init}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={nameID} className={css.user_label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameID}
              className={css.user_input}
            ></Field>
            <ErrorMessage name="name" component="span" className={css.error} />
            <br />
            <br />
            <label htmlFor={phoneID} className={css.user_label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id={phoneID}
              className={css.user_input}
            ></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <div className={css.btn_wrapper}>
            <button type="submit" className={css.add_btn}>
              Change Contact
              {<BsPencilSquare size={18} className={css.pencil} />}
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};
