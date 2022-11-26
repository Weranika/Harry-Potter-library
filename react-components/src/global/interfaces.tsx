/**********************form*************************/
export const defaultValues: ICard = {
  name: '',
  species: '',
  gender: '',
  house: '',
  born: '',
  blood_status: '',
  eye_color: '',
  hair_color: '',
  wands: [],
  patronus: '',
  image: '',
  alias_names: [],
  family_members: [],
  jobs: [],
  romances: [],
  boggart: '',
  wiki: '',
};
export interface ICard {
  name: string | null;
  species: string | null;
  gender: string | null;
  house: string | null;
  born: string | null;
  blood_status: string | null;
  eye_color: string | null;
  hair_color: string | null;
  wands: Array<string> | null;
  patronus: string | null;
  image: string | null;
  alias_names: Array<string> | null;
  family_members: Array<string> | null;
  jobs: Array<string> | null;
  romances: Array<string> | null;
  boggart: string | null;
  wiki: string | null;
}
export interface IData {
  attributes: ICard;
  id: string;
  type: string;
}

export interface IMeta {
  pagination: IPagination;
  copyright: string;
  generated_at: string;
}
export interface IPagination {
  current: number;
  next: number;
  last: number;
  records: number;
}

export const wizard = {
  name: null,
  alternate_names: null,
  species: null,
  gender: null,
  house: null,
  born: null,
  blood_status: null,
  ancestry: null,
  eye_color: null,
  hair_color: null,
  wand: {
    wood: null,
    core: null,
    length: null,
  },
  patronus: null,
  hogwartsStudent: null,
  hogwartsStaff: null,
  actor: null,
  alternate_actors: null,
  alive: null,
  image: null,
};

export const initialState: IState = {
  //inputSearch: localStorage.getItem('inputValue') as string,
  inputSearch:
    localStorage.getItem('inputValue') === 'null' || localStorage.getItem('inputValue') === null
      ? ''
      : localStorage.getItem('inputValue'),
  items: [],
  cardInfo: defaultValues,
  isLoading: false,
  pagination: {
    current: 0,
    next: 0,
    last: 0,
    records: 0,
  },
};
export interface IState {
  inputSearch: string | null;
  items: Array<IData>;
  cardInfo: ICard;
  isLoading: boolean;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  payload: unknown;
}
