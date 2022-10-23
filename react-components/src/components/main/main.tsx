import React from 'react';
import CardList from 'components/CardList/cardList';
import Input from 'components/input/input';
// import ApiList from '../../Api/Api';
import { IData, ICard } from '../../global/interfaces';
import './main.scss';

const PATH_TO_SERVER = 'https://api.potterdb.com/';
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
      inputSearch: '',
      DataisLoaded: false,
      items: [],
    };
  }

  handleSearhSubmit = (value: string) => {
    this.setState({
      inputSearch: value,
    });
  };

  async componentDidMount() {
    try {
      const inputSearch = this.state.inputSearch;
      const listCharacters = `${PATH_TO_SERVER}v1/characters?filter[name_cont_any]=${inputSearch}`;
      // if (inputSearch && inputSearch.length > 2) {
      //   listCharacters = `${PATH_TO_SERVER}v1/characters?filter[name_cont_any]=${inputSearch}`;
      //   console.log('2');
      // } else {
      //   listCharacters = `${PATH_TO_SERVER}v1/characters`;
      //   console.log('lisst');
      // }
      const responce = await fetch(listCharacters);
      const data = await responce.json();
      this.setState({
        items: data.data,
        DataisLoaded: true,
      });
      //console.log(this.state.items);
    } catch (err) {
      console.log(err);
    }
  }

  // async filter(inputSearch: string) {
  //   if (inputSearch && inputSearch.length > 2) {
  //     //   // ApiList.getCharacter(inputSearch).then((json) => {
  //     //   //   this.setState({
  //     //   //     items: json.data,
  //     //   //     DataisLoaded: true,
  //     //   //   });
  //     //   // });
  //     //   this.setState({
  //     //     items: ApiList.getList(),
  //     //     DataisLoaded: true,
  //     //   });
  //     //   return ApiList.getList();
  //     console.log('harryyyyy');
  //     return []; //ApiList.getCharacter('harry');
  //   } else {
  //     const arr:IData = await ApiList.getList();
  //     console.log(arr);
  //     return arr;
  //     // let promise = new Promise(function(resolve) {
  //     //   resolve(ApiList.getList());
  //     // });
  //   }
  // }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) {
      return (
        <div className="please-wait">
          <h1> Please wait some time...</h1>
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
