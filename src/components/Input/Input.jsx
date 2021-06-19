import React from "react";

/* 
  Accepts general component props. Purpose is to apply general styling
*/

const Input = (props) => {
  return (
    <input className="bg-gray-700 p-2 px-4 rounded-md text-white" {...props} />
  );
};

export default Input;
