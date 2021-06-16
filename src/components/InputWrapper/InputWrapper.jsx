import React from "react";
import "./InputWrapper.css";

const InputWrapper = ({ labelFor, labelTitle, children }) => {
  return (
    <div className=" mb-4 flex flex-col">
      <label htmlFor={labelFor} className="font-bold text-gray-700 mb-1">
        {labelTitle}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
