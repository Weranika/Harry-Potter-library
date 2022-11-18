import { IState, IAction, ICard } from './global/interfaces';

export default function (state: IState, action: IAction): IState {
  switch (action.type) {
    case 'inputSearch':
      return {
        inputSearch: action.payload as string,
        items: state.items,
        cardInfo: state.cardInfo,
      };
    case 'setItems':
      return {
        inputSearch: state.inputSearch,
        items: action.payload as [],
        cardInfo: state.cardInfo,
      };
    case 'setCardInfo':
      return {
        inputSearch: state.inputSearch,
        items: state.items,
        cardInfo: action.payload as ICard,
      };
    default:
      return state;
  }
}
