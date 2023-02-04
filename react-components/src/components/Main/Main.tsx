import React, { Fragment, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { fetchCharacter, fetchList } from '../../reducers/itemSlice';
import { fetchRecords } from '../../reducers/paginationSlice';

import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import Pagination from '../Pagination/Pagination';
import Sorting from '../Sorting/Sorting';
import './main.scss';

function Main() {
  const loading = useAppSelector((state) => state.items.isLoading);
  const searchValue = useAppSelector((state) => state.search.inputSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      searchValue === null ||
      searchValue === '' ||
      (searchValue as string).length < 3
    ) {
      dispatch(fetchList());
    } else {
      dispatch(fetchCharacter(searchValue as string));
    }

    dispatch(fetchRecords());
  }, []);

  return (
    <Fragment>
      {!loading ? (
        <div className="please-wait">
          <h1> Please wait some time...</h1>
          <LinearProgress color="inherit" />
        </div>
      ) : (
        <section className="main__container">
          <Sorting />
          <Input />
          <CardList />
          <Pagination />
        </section>
      )}
    </Fragment>
  );
}

export default Main;
