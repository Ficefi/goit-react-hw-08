import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./SigninForm.module.css";

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,16}$/, "Your email is incorrect")
    .required("This is a required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symb long")
    .max(99, "Password is too long, change it!")
    .required("This is a required field"),
});

export const SigninForm = () => {
  const emailID = useId();
  const passwordID = useId();
  const dispatch = useDispatch();

  const initForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login Success");
      })
      .catch(() => {
        toast.error("Login Error");
      });

    form.reset();
  };

  return (
    <Formik validationSchema={signinSchema} initialValues={initForm}>
      <Form className={css.form} onSubmit={loginSubmit}>
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
          Sign In
        </button>
      </Form>
    </Formik>
  );
};
