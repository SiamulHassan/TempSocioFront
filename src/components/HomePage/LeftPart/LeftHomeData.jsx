import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOptions";
import { ClickOutside } from "../../../utils/clickOutside";

const LeftHomeData = ({ icons }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const clickOut = useRef(null);
  ClickOutside(clickOut, () => {
    setShowDropdown(false);
  });
  const SocialIcon = icons.icon;
  // settings dropdown
  const settingsDropdown = icons.title === "Settings" && (
    <div className="relative">
      <div
        className={`lg:flex items-center gap-x-4 hover:bg-black lg:my-5 lg:px-4 xl:px-8 lg:py-2 xl:py-3 lg:rounded-full xl:w-3/4 xl:mx-auto hover:text-white transition-all duration-150 cursor-pointer ${
          showDropdown === true && "bg-black text-white"
        }`}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div>{<SocialIcon />}</div>
        <div className="hidden lg:block">
          <p className="font-gilroyReguler text-base">{icons.title}</p>
        </div>
      </div>
      {showDropdown && (
        <div
          className="absolute top-[25px] lg:top-[53px] right-0 lg:left-[71px] w-[250px] h-[100px] bg-white shadow-lg p-3"
          ref={clickOut}
        >
          <SettingOptions />
        </div>
      )}
    </div>
  );
  return (
    <>
      {settingsDropdown ? (
        settingsDropdown
      ) : (
        <NavLink
          to={icons.to}
          className="lg:flex items-center gap-x-4 hover:bg-black lg:my-5 lg:px-4 xl:px-8 lg:py-2 xl:py-3 lg:rounded-full xl:w-3/4 xl:mx-auto hover:text-white transition-all duration-150 cursor-pointer"
        >
          <div>{<SocialIcon />}</div>
          <div className="hidden lg:block">
            <p className="font-gilroyReguler text-base">{icons.title}</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
