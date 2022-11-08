import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './main.scss';

function Main() {
  const [inputSearch, setInputSearch] = useState<string>(
    localStorage.getItem('inputValue') as string
  );
  const [dataisLoaded, setDataisLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Array<IData>>([]);

  const handleSearhSubmit = (value: string) => {
    if (value.length > 2) {
      ApiList.getCharacter(value).then((data: Array<IData>) => {
        setItems(data);
        setInputSearch(value);
      });
    } else {
      ApiList.getList().then((data: Array<IData>) => {
        setItems(data);
        setInputSearch(value);
      });
    }
  };

  useEffect(() => {
    if (inputSearch === null || inputSearch === 'null') {
      ApiList.getList().then((data: Array<IData>) => {
        setItems(data);
        setDataisLoaded(true);
      });
    } else {
      ApiList.getCharacter(inputSearch)
        .then((data: Array<IData>) => {
          setItems(data);
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
          <Input handlerSearchValue={handleSearhSubmit} />
          <CardList filteredItems={items} />
        </section>
      )}
    </main>
  );
}

export default Main;
