import * as React from 'react';
import Form from './Form';
import CardList from 'components/CardList/cardList';
import './FormPage.scss';
import { ICard } from '../../global/interfaces';

interface IFormPageState {
  cardList: Array<ICard>;
}
class FormPage extends React.Component<IFormPageState, IFormPageState> {
  constructor(props: IFormPageState) {
    super(props);
    this.state = {
      cardList: [],
    };
  }

  handleForm = (cardList: Array<ICard>) => {
    this.setState({
      cardList: cardList,
    });
  };

  render() {
    return (
      <section className="form-page">
        <h1 className="page__title">Now you can be a wizard !</h1>
        <h3 className="form-page__subtitle">
          Сreate your own character. You can add all the necessary data and even choose your new
          name and faculty of Hogwarts!
        </h3>
        <h4 className="form-page__fill-magic">Feel all the magic and become a student with us!</h4>
        <Form handlerForm={this.handleForm} />
        <CardList filteredItems={this.state.cardList} />
      </section>
    );
  }
}

export default FormPage;
