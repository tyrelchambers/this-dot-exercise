import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  return (
    <ReactPaginate
      pageCount={props.pageCount}
      containerClassName="flex items-center mt-4"
      pageClassName="w-8 h-8 flex items-center justify-center font-bold bg-white mx-2 rounded-md border-2"
      previousClassName="font-bold bg-white px-2 h-8 text-sm flex items-center justify-center rounded-md border-2"
      nextClassName="font-bold bg-white px-2 h-8 text-sm flex items-center justify-center rounded-md border-2"
      activeClassName="bg-blue-500 text-white"
      {...props}
    />
  );
};

export default Pagination;