import LeftProfile from "./LeftProfile";
import { leftIconData } from "./Data";
import LeftHomeData from "./LeftHomeData";
const LeftPart = () => {
  return (
    <>
      <div>
        <LeftProfile />
      </div>
      <div>
        {leftIconData.map((icons, index) => (
          <LeftHomeData key={index} icons={icons} />
        ))}
      </div>
    </>
  );
};

export default LeftPart;
