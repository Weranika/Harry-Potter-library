import React from 'react';
import ApiList from '../../Api/Api';
import { AppContext } from '../../context/contex';
import { TablePagination } from '@mui/material';
import { IData } from '../../global/interfaces';
import './pagination.scss';

export default function Pagination() {
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const { state, dispatch } = React.useContext(AppContext);
  const { records, current } = state.pagination;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    dispatch({ type: 'nextPage', payload: newPage });
    ApiList.getPage(current, rowsPerPage).then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    ApiList.getPage(current, rowsPerPage).then((data: Array<IData>) => {
      dispatch({ type: 'setItems', payload: data });
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
