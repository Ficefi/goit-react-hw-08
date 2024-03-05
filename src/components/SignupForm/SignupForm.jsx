import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./SignupForm.module.css";

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name must be less than 50 symb long")
    .matches(/^[^0-9][^@#%^&$*]+$/, "Your name is incorrect")
    .required("This is a required field"),
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,16}$/, "Your email is incorrect")
    .required("This is a required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symb long")
    .max(99, "Password is too long, change it!")
    .required("This is a required field"),
});

export const SignupForm = () => {
  const nameID = useId();
  const emailID = useId();
  const passwordID = useId();
  const dispatch = useDispatch();

  const initForm = {
    name: "",
    email: "",
    password: "",
  };

  const registerForm = (event) => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Register Successful");
      })
      .catch(() => {
        toast.error("Register Error");
      });

    form.reset();
  };

  return (
    <Formik validationSchema={signupSchema} initialValues={initForm}>
      <Form className={css.form} onSubmit={registerForm}>
        <label htmlFor={nameID} className={css.user_label}>
          Name
        </label>
        <Field type="text" name="name" id={nameID} className={css.user_input} />
        <ErrorMessage name="name" component="span" className={css.error} />
        <br />
        <label htmlFor={emailID} className={css.user_label}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id={emailID}
          className={css.user_input}
        />
        <ErrorMessage name="email" component="span" className={css.error} />
        <br />
        <label htmlFor={passwordID} className={css.user_label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordID}
          className={css.user_input}
        />
        <ErrorMessage name="password" component="span" className={css.error} />
        <button type="submit" className={css.add_btn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};
