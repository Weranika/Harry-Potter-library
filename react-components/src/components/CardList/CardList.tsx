import React from 'react';
import CardComponent from '../Card/Card';
import { IData } from '../../global/interfaces';
import './cardList.scss';

export interface IPropsFilter {
  filteredItems: Array<IData>;
}

function CardList(props: IPropsFilter) {
  return (
    <div className="card-list" role="list">
      {props.filteredItems.map((card) => (
        <CardComponent item={card.attributes} key={card.id} />
      ))}
    </div>
  );
}

export default CardList;
