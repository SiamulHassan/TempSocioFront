import { useState } from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { leftIconData } from "../../LeftPart/Data";
import LeftHomeData from "../../LeftPart/LeftHomeData";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h4 className="font-gilroyBold text-2xl text-black hidden lg:block">
        Feed
      </h4>
      <div className="w-[33%] lg:hidden">
        <div className="w-12 h-12 rounded-full bg-single_color"></div>
        {/* <img src="" className="w-full h-full object-cover" alt="" /> */}
      </div>
      <div className="w-[33%] lg:hidden flex gap-5 justify-center items-center">
        {leftIconData.map((data, i) => (
          <LeftHomeData key={i} icons={data} />
        ))}
      </div>
      <div className="w-[33%] lg:w-[250px] xl:w-[33%] relative">
        <div className="px-8 flex justify-end lg:ml-0">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
