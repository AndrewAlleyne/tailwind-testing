import React from "react";

export const Pagination = (props) => {
  const pageNumber = Array.from(Array(props.nPages + 1).keys()).slice(1);
  return (
    <div>
      {pageNumber.map((x) => {
        return (
          <button
            onClick={() => props.setCurrentPage(x)}
            className='bg-slate-600 p-1 m-1 rounded'
          >
            {x}
          </button>
        );
      })}
    </div>
  );
};
