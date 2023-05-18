import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/Index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us!</h1>
      </div>
      <div className="form_data">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <br />
            <input
              type="name"
              className="input_field"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form_errors">{errors.name}</p>
            ) : null}
            <br />
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <br />
            <input
              type="email"
              className="input_field"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form_errors">{errors.email}</p>
            ) : null}
            <br />
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <br />
            <input
              type="password"
              className="input_field"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form_errors">{errors.password}</p>
            ) : null}
            <br />
            <label htmlFor="password" className="input-label">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              className="input_field"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm_Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form_errors">{errors.confirm_password}</p>
            ) : null}
            <br />
          </div>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
