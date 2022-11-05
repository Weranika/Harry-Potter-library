import React from 'react';
import heroes from '../../resources/heroes.json';
import CardList from '../CardList/CardList';
import Input from '../Input/Input';
import './main.scss';

interface IMainState {
  inputSearch: string;
}
class Main extends React.Component<IMainState, IMainState> {
  constructor(props: IMainState) {
    super(props);
    this.state = {
      inputSearch: '',
    };
  }

  handleSearhSubmit = (value: string) => {
    this.setState({
      inputSearch: value,
    });
  };

  filter(inputSearch: string) {
    if (inputSearch) {
      return heroes.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()) ||
          item.house.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()) ||
          item.actor.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
      );
    }
    return heroes;
  }

  render() {
    return (
      <section className="main__container">
        <Input handlerSearchValue={this.handleSearhSubmit} />
        <CardList filteredItems={this.filter(this.state.inputSearch)} />
      </section>
    );
  }
}

export default Main;
