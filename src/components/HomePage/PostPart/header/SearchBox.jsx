import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchBoxMain from "./SearchBoxMain";
import { ClickOutside } from "../../../../utils/clickOutside";

const SearchBox = () => {
  const [showBar, setShowBar] = useState(false);
  const clickOut = useRef(null);
  ClickOutside(clickOut, () => {
    setShowBar(false);
  });
  return (
    <div
      className={`flex items-center lg:gap-2 border border-title_color ${
        showBar === true && "border-[0]"
      } rounded-full py-2 px-4 w-10 h-10 lg:h-auto lg:w-full justify-center lg:justify-start`}
      onClick={() => setShowBar(true)}
    >
      <div className={`${showBar === true && "hidden"}`}>
        <IoIosSearch />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className={`focus:outline-none w-full hidden lg:block`}
        />
      </div>
      {showBar && (
        <div
          className="absolute top-0 right-0 lg:left-0 w-[300px] lg:w-full min-h-[300px] max-h-[450px] shadow-lg rounded-md px-8 bg-white"
          ref={clickOut}
        >
          <SearchBoxMain />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
