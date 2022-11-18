import React, { useReducer, useState } from 'react';
import Form from './Form';
import CardList from '../CardList/CardList';
import './FormPage.scss';
import { IData, initialState } from '../../global/interfaces';

function FormPage() {
  const [cardList, setCardList] = useState<Array<IData>>([]);

  const handleForm = (card: IData) => {
    setCardList([...cardList, card]);
  };

  return (
    <section className="form-page">
      <h1 className="page__title">Now you can be a wizard !</h1>
      <h3 className="form-page__subtitle">
        Сreate your own character. You can add all the necessary data and even choose your new name
        and faculty of Hogwarts!
      </h3>
      <h4 className="form-page__fill-magic">Feel all the magic and become a student with us!</h4>
      <Form handlerForm={handleForm} />
      <CardList />
    </section>
  );
}

export default FormPage;
