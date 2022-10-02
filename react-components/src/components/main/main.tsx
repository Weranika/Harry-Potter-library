import React from 'react';
import CardComponent from 'components/card/card';
import heroes from '../../resources/heroes.json';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <section className="main__container">
        <h2 className="main__title">Characters</h2>
        <div className="card-list">
          {heroes.map((card) => (
            <CardComponent item={card} key={card.name} />
          ))}
        </div>
      </section>
    );
  }
}

export default Main;
