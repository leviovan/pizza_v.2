import React from "react";

import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setPageCounter } from "../../Redux/store/Slice/filterSlice";
import style from "./Paginate.module.scss";

const Pagination = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setPageCounter(e.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={4}
        forcePage={value - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
