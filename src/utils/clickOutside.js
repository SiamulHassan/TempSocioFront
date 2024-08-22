import { useEffect } from "react";

export const ClickOutside = (ref, fn) => {
  useEffect(() => {
    // logic
    const clickFn = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return false;
      }
      //else
      fn();
    };
    // event listerner
    document.addEventListener("mousedown", clickFn);
    // event listener for mobile (for mobil touch happens not click)
    document.addEventListener("touchstart", clickFn);

    // clean up function
    return () => {
      document.removeEventListener("mousedown", clickFn);
      document.removeEventListener("touchstart", clickFn);
    };
  }, [ref]);
};
