import LeftPart from "../components/HomePage/LeftPart";
import { Outlet } from "react-router-dom";
import Header from "../components/HomePage/PostPart/header/Header";
import RightHome from "../components/HomePage/RightPart";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr,1fr] gap-x-8 mt-5 ml-5 lg:ml-0">
      <div className="hidden lg:block py-4">
        <LeftPart />
      </div>
      <div className="">
        <div>
          <Header />
        </div>
        <Outlet />
      </div>
      <div className="hidden lg:block">
        <RightHome />
      </div>
    </div>
  );
};

export default RootLayout;
