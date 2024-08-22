import { useFormik } from "formik";
import Input from "./Input";
import { signUpValidation } from "../../validation/signupValidation";
import BirthDate from "./BirthDate";
import Gender from "./Gender";
import { useState } from "react";
import { useAddUserMutation } from "../../features/api/authApi";
import { Link } from "react-router-dom";

const initialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: "",
};
const AuthForm = () => {
  const [ageErr, setAgeErr] = useState(null);
  // api
  const [addUser, { isLoading }] = useAddUserMutation();

  const registration = async (formikUserValues) => {
    const singupRes = await addUser(formikUserValues);
    console.log(singupRes.data);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit(values) {
      // age error
      const currentDate = new Date();
      const pickedDate = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const timeStamp18Years = new Date(1970 + 18, 0, 1);
      const timeStamp70Years = new Date(1970 + 70, 0, 1);
      if (currentDate - pickedDate < timeStamp18Years) {
        setAgeErr("You are not 18");
      } else if (currentDate - pickedDate > timeStamp70Years) {
        setAgeErr("You are more than 70");
      }
      registration(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        formik={formik}
        placeholder="Frist Name"
        name="fName"
        type="text"
        value={formik.values.fName}
      />
      {formik.touched.fName && formik.errors.fName ? (
        <p className="text-secondary_color">{formik.errors.fName}</p>
      ) : (
        ""
      )}
      <Input
        formik={formik}
        placeholder="Last Name"
        name="lName"
        type="text"
        value={formik.values.lName}
      />
      {formik.touched.lName && formik.errors.lName ? (
        <p className="text-secondary_color">{formik.errors.lName}</p>
      ) : (
        ""
      )}
      <Input
        formik={formik}
        placeholder="Email"
        name="email"
        type="email"
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="text-secondary_color">{formik.errors.email}</p>
      ) : (
        ""
      )}
      <Input
        formik={formik}
        placeholder="Password"
        name="password"
        type="password"
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <p className="text-secondary_color">{formik.errors.password}</p>
      ) : (
        ""
      )}
      <BirthDate formik={formik} />
      {ageErr && <p className="font-md text-red-500">{ageErr}</p>}
      <Gender formik={formik} />
      {formik.touched.gender && formik.errors.gender ? (
        <p>{formik.errors.gender}</p>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="border border-secondary_color py-2 px-8 rounded-md mt-4 cursor-pointer"
      >
        Sign Up
      </button>
      <div className="mt-5 text-">
        <p>Already have an account?</p>
        <Link to="/login" className="underline font-bold">
          Login
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;
