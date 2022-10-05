// import * as React from 'react';
// import { ICardInfo, IProps } from './components/card/card';
// import heroes from './resources/heroes.json';
// import Main from 'components/main/main';

// class searchFilter extends React.Component {
//   input: string;

//   constructor(props: IProps) {
//     super(props);
//     this.input = (document.getElementById('input') as HTMLInputElement).value;
//   }

//   filter() {
//     if (this.input) {
//       return heroes.filter((item) => item.name.toLocaleLowerCase()
//         .includes(this.input.toLocaleLowerCase()));
//     }
//     return heroes;
//   }

//   render() {
//     const filteredItems: Array<ICardInfo> = this.filter();
//     return (
//       <Main filteredItems={filteredItems} key={filteredItems.reduce((acc, el) => `${acc}${el.name}`, '')} />
//     )
//   }
// }

// export default searchFilter;
