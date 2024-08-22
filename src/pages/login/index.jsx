import React from "react";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import Input from "../../components/authpage/Input";
import { loginValidation } from "../../validation/signupValidation";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/api/authApi";
import { loggedInUsers } from "../../features/users/authSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const login = async (loginData) => {
    const { data } = await loginUser(loginData);
    if (data?.data?.loginToken) {
      dispatch(loggedInUsers(data.data));
      localStorage.setItem("socio-user", JSON.stringify(data.data));
      navigate("/");
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidation,
    onSubmit(values) {
      login(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="h-screen flex justify-center items-center bg-pattern">
        <div className="registration w-[450px] lg:w-[40%] h-[450px] bg-white rounded-md shadow-md py-8 px-8 lg:px-14 flex flex-col justify-center">
          <form onSubmit={formik.handleSubmit}>
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

            <button
              type="submit"
              className="border border-secondary_color py-2 px-8 rounded-md mt-4 cursor-pointer"
            >
              Login
            </button>
            <div className="mt-5 text-">
              <p>Don't have an account?</p>
              <Link to="/registration" className="underline font-bold">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
