import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { setItems, fetchCharacter, fetchList } from '../../reducers/itemSlice';
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
  //const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);

  //let promiseGetData;

  // if (loading) {
  //   if ((input as string).length > 2) {
  //     console.log('fetch input', input);
  //     dispatch(fetchCharacter(input as string));
  //   } else {
  //     console.log('fetch full list');
  //     dispatch(fetchList());
  //   }
  // }

  useEffect(() => {
    //dispatch(fetchCharacter(input as string));
    //setDataisLoaded(true);

    //let promiseGetData;
    //const promiseGetRecords = ApiList.getRecords();
    if (input === null || input === '' || (input as string).length < 3) {
      console.log(1111);
      dispatch(fetchList());
      // promiseGetData = ApiList.getList()
      // .then((data: Array<IData>) => {
      //   dispatch(setItems(data));
      //   setDataisLoaded(true);
      // })
      // .catch((err) => {
      //   setDataisLoaded(true);
      //   alert(err);
      //   dispatch(setItems([]));
      // });
    } else {
      console.log(2222);
      dispatch(fetchCharacter(input as string));
      // promiseGetData = ApiList.getCharacter(input)
      // .then((data: Array<IData>) => {
      //   dispatch(setItems(data));
      //   setDataisLoaded(true);
      // })
      // .catch((err) => {
      //   setDataisLoaded(true);
      //   alert(err);
      //   dispatch(setItems([]));
      // });
    }
    //setDataisLoaded(true);

    // (promiseGetRecords as Promise<IMeta>)
    //   .then((meta: IMeta) => {
    //     dispatch(setRecords(meta.pagination));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err);
    //   });
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
