import React from 'react';
import CardComponent from '../Card/Card';
import { IData } from '../../global/interfaces';
import { AppContext } from '../../context/contex';
import './cardList.scss';
export interface IPropsFilter {
  filteredItems: Array<IData>;
}

function CardList() {
  const { state } = React.useContext(AppContext);
  return (
    <div className="card-list" role="list">
      {state.items.map((card) => (
        <CardComponent item={card.attributes} key={card.id} />
      ))}
    </div>
  );
}

export default CardList;
