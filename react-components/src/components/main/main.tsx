import React from 'react';
import heroes from '../../resources/heroes.json';
import CardList from 'components/CardList/cardList';
import './main.scss';

// interface IPropsFilter {
//   filteredItems: Array<ICardInfo>;
// }

class Main extends React.Component {
  render() {
    return (
      <section className="main__container">
        <CardList filteredItems={heroes} />
      </section>
    );
  }
}

export default Main;
