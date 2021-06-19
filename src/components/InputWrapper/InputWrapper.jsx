import React from "react";
import "./InputWrapper.css";

/* 
  Adds a label above a provided component, ideally an input. 

  @param {string} labelFor Used to associate the label a particular input field's name property
  @param {string} labelTitle The actual string to show as the label
*/

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
