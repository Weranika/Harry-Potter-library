import React from 'react';
import { useAppSelector } from '../../hook';

import CardComponent from '../Card/Card';
import { IData } from '../../global/interfaces';
import './cardList.scss';

function CardList() {
  const items = useAppSelector((state) => state.items.items) as Array<IData>;
  return (
    <div className="card-list" role="list">
      {items.map((card) => (
        <CardComponent item={card.attributes} key={card.id} />
      ))}
    </div>
  );
}

export default CardList;
