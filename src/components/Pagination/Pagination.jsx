import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = (props) => {
  const bodyWidth = document.body.clientWidth;
  return (
    // imported library - not my code
    <ReactPaginate
      pageCount={props.pageCount}
      containerClassName="flex items-center mt-4 paginate-wrapper"
      pageClassName="px-4 py-1 flex items-center justify-center font-bold bg-white mx-2 rounded-md border-2 paginate-btn"
      previousClassName="font-bold bg-white px-2 h-8 text-sm flex items-center justify-center rounded-md border-2 paginate-btn"
      nextClassName="font-bold bg-white px-2 h-8 text-sm flex items-center justify-center rounded-md border-2 paginate-btn"
      activeClassName="bg-blue-500 text-white"
      {...props}
      marginPagesDisplayed={bodyWidth <= 539 ? 1 : 3}
    />
  );
};

export default Pagination;
