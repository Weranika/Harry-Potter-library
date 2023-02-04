import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { nextPage } from '../../reducers/paginationSlice';
import { fetchPage } from '../../reducers/itemSlice';

import { TablePagination } from '@mui/material';
import './pagination.scss';

export default function Pagination() {
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const dispatch = useAppDispatch();
  const { pagination } = useAppSelector((state) => state.pagination);
  const { records, current } = pagination;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(nextPage(newPage));
    dispatch(fetchPage({ current: current, rowsPerPage: rowsPerPage }));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rows: number = parseInt(event.target.value, 10);
    setRowsPerPage(rows);
    dispatch(fetchPage({ current: current, rowsPerPage: rows }));
  };

  return (
    <div className="pagination__container">
      <p>Page: {current}</p>
      <TablePagination
        component="div"
        count={records}
        page={current}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="pagination__table"
      />
    </div>
  );
}
