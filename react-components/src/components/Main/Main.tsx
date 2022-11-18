import React, { useState, useEffect, useReducer } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './main.scss';
import { AppContext } from '../../context/contex';

function Main() {
  const { state, dispatch } = React.useContext(AppContext);
  const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);

  if (state.inputSearch.length > 2) {
    ApiList.getCharacter(state.inputSearch).then((data: Array<IData>) => {
      // dispatch({ type: 'inputSearch', payload: state.inputSearch });
      dispatch({ type: 'setItems', payload: data });
    });
  } else {
    ApiList.getList().then((data: Array<IData>) => {
      // dispatch({ type: 'inputSearch', payload: state.inputSearch });
      dispatch({ type: 'setItems', payload: data });
    });
  }

  useEffect(() => {
    if (state.inputSearch === null || state.inputSearch === 'null') {
      ApiList.getList().then((data: Array<IData>) => {
        dispatch({ type: 'setItems', payload: data });
        setDataisLoaded(true);
      });
    } else {
      ApiList.getCharacter(state.inputSearch)
        .then((data: Array<IData>) => {
          dispatch({ type: 'setItems', payload: data });
          setDataisLoaded(true);
        })
        .catch((err) => console.log(err));
    }
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
          <Input />
          <CardList />
        </section>
      )}
    </main>
  );
}

export default Main;
