import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../redux/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

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

export const ContactForm = () => {
  const nameID = useId();
  const phoneID = useId();
  const dispatch = useDispatch();

  const init = {
    name: "",
    number: "",
  };

  return (
    <Formik
      validationSchema={userSchema}
      initialValues={init}
      onSubmit={(values, actions) => {
        dispatch(addToList({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
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
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.add_btn}>
          Add contact {<BsFillPersonPlusFill size={18} />}
        </button>
      </Form>
    </Formik>
  );
};
