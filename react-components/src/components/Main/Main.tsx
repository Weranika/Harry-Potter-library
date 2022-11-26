import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import ApiList from '../../Api/Api';
import { IData, IMeta } from '../../global/interfaces';
import { AppContext } from '../../context/contex';
import Pagination from 'components/Pagination/Pagination';
import Sorting from 'components/Sorting/Sorting';
import './main.scss';

function Main() {
  const { state, dispatch } = React.useContext(AppContext);
  const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);

  let promiseGetData;

  if (state.isLoading) {
    if ((state.inputSearch as string).length > 2) {
      promiseGetData = ApiList.getCharacter(state.inputSearch as string);
    } else {
      promiseGetData = ApiList.getList();
    }

    promiseGetData
      .then((data: Array<IData>) => {
        dispatch({ type: 'setItems', payload: data });
      })
      .catch(() => {
        dispatch({ type: 'setItems', payload: [] });
      });
  }

  useEffect(() => {
    let promiseGetData;
    let promiseGetRecords;
    if (state.inputSearch === null || state.inputSearch === '') {
      promiseGetData = ApiList.getList();
      promiseGetRecords = ApiList.getRecords();
    } else {
      promiseGetData = ApiList.getCharacter(state.inputSearch);
      promiseGetRecords = ApiList.getRecords();
    }

    promiseGetData
      .then((data: Array<IData>) => {
        dispatch({ type: 'setItems', payload: data });
        setDataisLoaded(true);
      })
      .catch((err) => {
        setDataisLoaded(true);
        alert(err);
        dispatch({ type: 'setItems', payload: [] });
      });

    (promiseGetRecords as Promise<IMeta>)
      .then((meta: IMeta) => {
        dispatch({ type: 'setRecords', payload: meta.pagination });
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
