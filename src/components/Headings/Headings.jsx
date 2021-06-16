import React from "react";
import "./Headings.css";

export const H1 = (props) => {
  return (
    <h1 className={`h1 ${props.className ? props.className : ""}`}>
      {props.children}
    </h1>
  );
};
export const H2 = (props) => {
  return (
    <h2 className={`h2 ${props.className ? props.className : ""}`}>
      {props.children}
    </h2>
  );
};
