// import React from 'react'

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotLoggedIn = () => {
  const { userInfo } = useSelector((store) => store.registration);
  return userInfo ? Navigate("/") : <Outlet />;
};

export default NotLoggedIn;
