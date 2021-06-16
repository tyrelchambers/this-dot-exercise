import React from "react";
import "./Headings.css";

export const H1 = (props) => {
  return (
    <h1 className={`h1 ${props.className ? props.className : ""}`}>
      {props.children}
    </h1>
  );
};
