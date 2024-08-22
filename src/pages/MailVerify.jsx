import React from "react";
import { useParams } from "react-router-dom";

const MailVerify = () => {
  const params = useParams();
  const userID = params.userID;
  // send server req with this user id and make the verified to true
  return <div>Loading...</div>;
};

export default MailVerify;
