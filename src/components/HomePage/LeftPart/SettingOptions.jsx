import { useState } from "react";
import { IoMoonOutline, IoLogOutOutline } from "react-icons/io5";
import DisplayMode from "./DisplayMode";

const SettingOptions = () => {
  const [visible, setVisible] = useState(false);
  if (visible) {
    return <DisplayMode setVisible={setVisible} />;
  }
  return (
    <ul>
      <li
        className={`flex gap-2 items-center cursor-pointer`}
        onClick={() => setVisible(true)}
      >
        <span>
          <IoMoonOutline />
        </span>
        <p className="text-base font-bold">Display & Accecibility</p>
      </li>
      <li className="flex gap-2 items-center cursor-pointer mt-2">
        <span>
          <IoLogOutOutline />
        </span>
        <p className="text-base font-bold">Logout</p>
      </li>
    </ul>
  );
};

export default SettingOptions;
