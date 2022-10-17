/**********************form*************************/
export interface IWizard {
  name: HTMLInputElement | null;
  alternate_names: HTMLInputElement | null;
  species: HTMLInputElement | null;
  gender: HTMLInputElement | null;
  house: HTMLSelectElement | null;
  dateOfBirth: HTMLInputElement | null;
  yearOfBirth: HTMLInputElement | null;
  wizard: HTMLInputElement | null;
  ancestry: HTMLInputElement | null;
  eyeColour: HTMLInputElement | null;
  hairColour: HTMLInputElement | null;
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
  name: string;
  alternate_names: Array<string>;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number | string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | string;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<string>;
  alive: boolean;
  image: string;
}

export const nullWizard = {
  name: null,
  alternate_names: null,
  species: null,
  gender: null,
  house: null,
  dateOfBirth: null,
  yearOfBirth: null,
  wizard: null,
  ancestry: null,
  eyeColour: null,
  hairColour: null,
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
