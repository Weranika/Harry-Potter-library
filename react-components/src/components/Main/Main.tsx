import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './main.scss';
import { AppContext } from '../../context/contex';
import Pagination from 'components/Pagination/Pagination';
import Sorting from 'components/Sorting/Sorting';

function Main() {
  const { state, dispatch } = React.useContext(AppContext);
  const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);

  let promiseGetData;

  if (state.isLoading) {
    if (state.inputSearch.length > 2) {
      console.log('trying to search charachters with - ', state.inputSearch);
      promiseGetData = ApiList.getCharacter(state.inputSearch);
    } else {
      console.log('As input search is empty or too short getting all list');
      promiseGetData = ApiList.getList();
    }

    promiseGetData
      .then((data: Array<IData>) => {
        console.log('data received');
        dispatch({ type: 'setItems', payload: data });
      })
      .catch(() => {
        console.log('some error');
        dispatch({ type: 'setItems', payload: [] });
      });
  }

  useEffect(() => {
    let promiseGetData;

    if (state.inputSearch === null || state.inputSearch === 'null') {
      console.log('getting full list in use effect');
      promiseGetData = ApiList.getList();
    } else {
      console.log('getting character in use effect');
      promiseGetData = ApiList.getCharacter(state.inputSearch);
    }

    promiseGetData
      .then((data: Array<IData>) => {
        console.log('Received data =>>>>', data);
        dispatch({ type: 'setItems', payload: data });
        setDataisLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setDataisLoaded(true);
        alert(err);
        dispatch({ type: 'setItems', payload: [] });
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
