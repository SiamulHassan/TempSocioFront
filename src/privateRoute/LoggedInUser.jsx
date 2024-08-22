import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";
const LoggedInUser = () => {
  // useSelector((store) => console.log(store));
  const { userInfo } = useSelector((store) => store.registration);

  return userInfo ? <Outlet /> : <Login />;
};

export default LoggedInUser;
