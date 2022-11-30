import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { setItems } from '../../reducers/itemSlice';
import { setRecords } from '../../reducers/paginationSlice';

import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import ApiList from '../../Api/Api';
import { IData, IMeta } from '../../global/interfaces';
import Pagination from 'components/Pagination/Pagination';
import Sorting from 'components/Sorting/Sorting';
import './main.scss';

function Main() {
  const loading = useAppSelector((state) => state.items.isLoading);
  const input = useAppSelector((state) => state.search.inputSearch);
  const dispatch = useAppDispatch();
  const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);

  let promiseGetData;

  if (loading) {
    if ((input as string).length > 2) {
      promiseGetData = ApiList.getCharacter(input as string);
    } else {
      promiseGetData = ApiList.getList();
    }

    promiseGetData
      .then((data: Array<IData>) => {
        dispatch(setItems(data));
      })
      .catch(() => {
        dispatch(setItems([]));
      });
  }

  useEffect(() => {
    let promiseGetData;
    let promiseGetRecords;
    if (input === null || input === '') {
      promiseGetData = ApiList.getList();
      promiseGetRecords = ApiList.getRecords();
    } else {
      promiseGetData = ApiList.getCharacter(input);
      promiseGetRecords = ApiList.getRecords();
    }

    promiseGetData
      .then((data: Array<IData>) => {
        dispatch(setItems(data));
        setDataisLoaded(true);
      })
      .catch((err) => {
        setDataisLoaded(true);
        alert(err);
        dispatch(setItems([]));
      });

    (promiseGetRecords as Promise<IMeta>)
      .then((meta: IMeta) => {
        dispatch(setRecords(meta.pagination));
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return (
    <main>
      {!dataisLoaded ? (
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
