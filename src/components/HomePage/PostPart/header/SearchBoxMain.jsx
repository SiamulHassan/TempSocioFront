import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBoxMain = () => {
  const [showIcon, setShowIcon] = useState(true);
  const initialInput = useRef(null);
  useEffect(() => {
    initialInput.current.focus();
  }, []);
  return (
    <div className="flex items-center gap-2 border border-title_color rounded-full py-2 px-4">
      {showIcon && (
        <div>
          <IoIosSearch />
        </div>
      )}

      <div>
        <input
          ref={initialInput}
          type="text"
          placeholder="Search"
          className="focus:outline-none w-full"
          onFocus={() => setShowIcon(false)}
          onBlur={() => setShowIcon(false)}
        />
      </div>
    </div>
  );
};

export default SearchBoxMain;
