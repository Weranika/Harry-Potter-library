import React from 'react';
import CardComponent from 'components/card/Card';
import { IData } from '../../global/interfaces';
import './cardList.scss';

export interface IPropsFilter {
  filteredItems: Array<IData>;
}
class CardList extends React.Component<IPropsFilter> {
  constructor(props: IPropsFilter) {
    super(props);
  }

  render() {
    return (
      <div className="card-list" role="list">
        {this.props.filteredItems.map((card) => (
          <CardComponent item={card.attributes} key={card.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
