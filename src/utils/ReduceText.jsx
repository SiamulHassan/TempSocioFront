import React from "react";

const ReduceText = (text, maxlength) => {
  if (text.length > maxlength) {
    return text.substring(0, maxlength);
  } else {
    return text;
  }
};

export default ReduceText;
