import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { fetchCharacter, fetchList } from '../../reducers/itemSlice';
import { fetchRecords } from '../../reducers/paginationSlice';

import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import Pagination from 'components/Pagination/Pagination';
import Sorting from 'components/Sorting/Sorting';
import './main.scss';

function Main() {
  const loading = useAppSelector((state) => state.items.isLoading);
  const input = useAppSelector((state) => state.search.inputSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (input === null || input === '' || (input as string).length < 3) {
      dispatch(fetchList());
    } else {
      dispatch(fetchCharacter(input as string));
    }

    dispatch(fetchRecords());
  }, []);

  return (
    <main>
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
    </main>
  );
}

export default Main;
