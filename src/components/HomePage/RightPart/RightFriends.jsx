import React from "react";
import { Link } from "react-router-dom";
import ReduceText from "../../../utils/ReduceText";

const RightFriends = () => {
  const originalName = "Ali hossain howldf";
  const reducedName = ReduceText(originalName, 8);
  return (
    <>
      <div>
        <div className="flex items-center justify-between px-2">
          <div>
            <h4 className="font-gilroyBold text-lg text-black">
              Friend Request
            </h4>
          </div>
          <div>
            <Link
              to="/friends"
              className="text-base py-3 px-4 border border-black text-black hover:bg-black transition-all ease-linear duration-100 hover:text-white rounded-full"
            >
              See All
            </Link>
          </div>
        </div>
        {/* profile */}
        <div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-[15%]">
              <div className="w-12 h-12 bg-secondary_color rounded-full"></div>
            </div>
            <div className="w-[30%]">
              <h5 className="font-gilroyBold text-base text-black leading-0">
                {reducedName}...
              </h5>
              <span>2 hours ago</span>
            </div>
          </div>
          <div className="flex gap-4 mt-3 mr-4">
            <button className="w-[50%] bg-secondary_color px-4 py-2 rounded-full corsor-pointer">
              Accept
            </button>
            <button className="w-[50%] border border-secondary_color px-4 py-2 rounded-full corsor-pointer">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFriends;
