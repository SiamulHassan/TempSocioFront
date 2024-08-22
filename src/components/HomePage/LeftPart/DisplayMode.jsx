import React from "react";
import { IoMoonOutline } from "react-icons/io5";
// import { Navigate } from "react-router-dom";

const DisplayMode = ({ setVisible }) => {
  const handleBack = () => {
    setVisible(false);
  };
  // const handleBack = () => {
  //   Navigate(-1);
  // };
  return (
    <div className="bg-white w-[300px shadow-lg rounded-md p-4">
      <div className="flex gap-2 items-center">
        <span className="text-[30px] cursor-pointer" onClick={handleBack}>
          &larr;
        </span>
        <h4 className="font-gilroyBold text-base text-black">
          Display & Accecibility
        </h4>
      </div>
      <div className="flex gap-3">
        <div>
          <IoMoonOutline />
        </div>
        <div className="w-9/12">
          <h4>Dark Mode</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="white" className="cursor-pointer">
            White
          </label>
          <input type="radio" id="white" name="darkMode" />
        </div>
        <div className="flex justify-between items-center ">
          <label htmlFor="dark" className="cursor-pointer">
            Dark
          </label>
          <input type="radio" id="dark" name="darkMode" />
        </div>
      </div>
    </div>
  );
};

export default DisplayMode;
