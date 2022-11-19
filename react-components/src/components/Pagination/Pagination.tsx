import React, { useState, useEffect } from 'react';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';

interface PaginationProps {
  size: number;
  number: number;
}

export default function Pagination() {
  const [currPage, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  useEffect(() => {
    ApiList.getPage(currPage).then((data) => {
      console.log(data);
    });
  }, [currPage]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <p>Page: {currPage}</p>
      <TablePagination
        component="div"
        count={100}
        page={currPage}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
