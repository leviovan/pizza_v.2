import React from 'react';

import ReactPaginate from 'react-paginate';
import style from './Paginate.module.scss';
const Pagination = ({ setPageNumber }) => {
  return (
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setPageNumber(e.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
