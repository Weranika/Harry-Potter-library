import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CardList from 'components/CardList/cardList';
import Input from 'components/input/input';
import ApiList from '../../Api/Api';
import { IData } from '../../global/interfaces';
import './main.scss';
interface IMainState {
  inputSearch: string;
  DataisLoaded: boolean;
  items: Array<IData>;
}
interface IMainProps {
  filteredItems: Array<IData>;
}
class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);
    this.state = {
      inputSearch: localStorage.getItem('inputValue') as string,
      DataisLoaded: false,
      items: [],
    };
  }

  handleSearhSubmit = (value: string) => {
    if (value.length > 2) {
      ApiList.getCharacter(value).then((data: Array<IData>) => {
        this.setState({
          items: data,
          inputSearch: value,
        });
      });
    } else {
      ApiList.getList().then((data: Array<IData>) => {
        this.setState({
          items: data,
          inputSearch: value,
        });
      });
    }
  };

  componentDidMount() {
    console.log('didmount');
    const inputSearch = this.state.inputSearch;
    if (inputSearch === null || inputSearch === 'null') {
      ApiList.getList().then((data: Array<IData>) => {
        console.log(data.length);
        this.setState({
          items: data,
          DataisLoaded: true,
        });
      });
    } else {
      ApiList.getCharacter(inputSearch)
        .then((data: Array<IData>) => {
          this.setState({
            items: data,
            DataisLoaded: true,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    console.log('render');
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {
      return (
        <div className="please-wait">
          <h1> Please wait some time...</h1>
          <LinearProgress color="inherit" />
        </div>
      );
    }
    return (
      <section className="main__container">
        <Input handlerSearchValue={this.handleSearhSubmit} />
        <CardList filteredItems={items} />
      </section>
    );
  }
}

export default Main;
