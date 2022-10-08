import React from 'react';
import CardComponent from 'components/card/card';
import { ICardInfo } from '../card/card';
import './cardList.scss';

export interface IPropsFilter {
  filteredItems: Array<ICardInfo>;
}

class CardList extends React.Component<IPropsFilter> {
  constructor(props: IPropsFilter) {
    super(props);
  }
  render() {
    return (
      <div className="card-list" role="list">
        {this.props.filteredItems.map((card) => (
          <CardComponent item={card} key={card.name} />
        ))}
      </div>
    );
  }
}

export default CardList;
