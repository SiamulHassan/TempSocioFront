import * as Yup from "yup";

export const signUpValidation = Yup.object({
  fName: Yup.string()
    .min(2, "Too Short")
    .max(15, "Too long")
    .required("First Name is requird field !"),
  lName: Yup.string()
    .min(2, "Too Short")
    .max(15, "Too long")
    .required("Last Name is requird field !"),
  email: Yup.string().required("Email is requird field !"),
  password: Yup.string().required("Password is requird field !"),
  gender: Yup.string().required("Gender is required!"),
});

export const loginValidation = Yup.object({
  email: Yup.string().required("Email is requird field !"),
  password: Yup.string().required("Password is requird field !"),
});
