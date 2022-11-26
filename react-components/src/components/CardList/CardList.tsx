import React from 'react';
import CardComponent from '../Card/Card';
import { IData } from '../../global/interfaces';
import './cardList.scss';
import { AppContext } from '../../context/contex';
export interface IPropsFilter {
  filteredItems: Array<IData>;
}

function CardList() {
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <div className="card-list" role="list">
      {state.items.map((card) => (
        <CardComponent item={card.attributes} key={card.id} />
      ))}
    </div>
  );
}

export default CardList;
