import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { nextPage } from '../../reducers/paginationSlice';
import { setItems } from '../../reducers/itemSlice';

import { TablePagination } from '@mui/material';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './pagination.scss';

export default function Pagination() {
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.pagination);
  const { records, current } = pagination.pagination;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    dispatch(nextPage(newPage));
    ApiList.getPage(current, rowsPerPage).then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    ApiList.getPage(current, rowsPerPage).then((data: Array<IData>) => {
      dispatch(setItems(data));
    });
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
