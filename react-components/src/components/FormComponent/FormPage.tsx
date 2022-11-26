import React, { useEffect } from 'react';
import Form from './Form';
import CardList from '../CardList/CardList';
import { AppContext } from '../../context/contex';
import './FormPage.scss';

function FormPage() {
  const { dispatch } = React.useContext(AppContext);

  useEffect(() => {
    dispatch({ type: 'setItems', payload: [] });
  }, []);

  return (
    <section className="form-page">
      <h1 className="page__title">Now you can be a wizard !</h1>
      <h3 className="form-page__subtitle">
        Сreate your own character. You can add all the necessary data and even choose your new name
        and faculty of Hogwarts!
      </h3>
      <h4 className="form-page__fill-magic">Feel all the magic and become a student with us!</h4>
      <Form />
      <CardList />
    </section>
  );
}

export default FormPage;
