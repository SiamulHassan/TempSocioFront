import { Link } from "react-router-dom";
import AuthForm from "../components/authpage/AuthForm";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  //  REGISTRATION AND LOGIN DESIGN WILL BE CHANGED LATER. POSSIBLEY ENTIRE APP DESIGN. FOR NET CONNECTIVITY JUST FOLLOWING THE FLOW OF THE INSTRUCTOR.

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="h-screen flex justify-center items-center bg-pattern">
        <div className="registration w-[450px] lg:w-[40%] h-[500px] bg-white rounded-md shadow-md py-8 px-8 lg:px-14">
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default Registration;
