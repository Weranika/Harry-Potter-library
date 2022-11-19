import { IState, IAction, ICard } from './global/interfaces';

export default function (state: IState, action: IAction): IState {
  switch (action.type) {
    case 'inputSearch':
      const inputSearch = action.payload as string;
      return {
        ...state,
        inputSearch: inputSearch,
        isLoading: true,
      };
    case 'setItems':
      return {
        ...state,
        items: action.payload as [],
        isLoading: false,
      };
    case 'setCardInfo':
      return {
        ...state,
        cardInfo: action.payload as ICard,
      };
    default:
      return state;
  }
}
