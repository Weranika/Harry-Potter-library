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
