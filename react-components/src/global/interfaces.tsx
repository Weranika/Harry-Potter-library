/**********************form*************************/
export interface IWizard {
  name: HTMLInputElement | null;
  alternate_names: HTMLInputElement | null;
  species: HTMLInputElement | null;
  gender: HTMLInputElement | null;
  house: HTMLSelectElement | null;
  born: HTMLInputElement | null;
  blood_status: HTMLInputElement | null;
  ancestry: HTMLInputElement | null;
  eye_color: HTMLInputElement | null;
  hair_color: HTMLInputElement | null;
  wand: {
    wood: HTMLSelectElement | null;
    core: HTMLSelectElement | null;
    length: HTMLSelectElement | null;
  };
  patronus: HTMLInputElement | null;
  hogwartsStudent: HTMLInputElement | null;
  hogwartsStaff: HTMLInputElement | null;
  actor: HTMLInputElement | null;
  alternate_actors: HTMLInputElement | null;
  alive: HTMLInputElement | null;
  image: HTMLInputElement | null;
}

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
