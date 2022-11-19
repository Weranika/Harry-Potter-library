import { IData } from 'global/interfaces';
import mock from './mock.json';

const PATH_TO_SERVER = 'https://api.potterdb.com/';

const MOCKENABLED = false;
class Api {
  getList() {
    if (MOCKENABLED) {
      return new Promise<Array<IData>>((resolve) => resolve(mock.data as IData[]));
    }

    const listCharacters = `${PATH_TO_SERVER}v1/characters`;
    return fetch(listCharacters)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('some problem with response');
        }
        return res.json();
      })
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getCharacter(name: string) {
    if (MOCKENABLED) {
      return new Promise<Array<IData>>((resolve) => resolve(mock.data.slice(0, 5) as IData[]));
    }

    const characters = `${PATH_TO_SERVER}v1/characters?filter[name_cont_any]=${name}`;
    return fetch(characters)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getSortByNameAsc() {
    const characters = `${PATH_TO_SERVER}v1/characters?sort=name`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getSortByNameDesc() {
    const characters = `${PATH_TO_SERVER}v1/characters?sort=-name`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getSortByYearAsc() {
    const characters = `${PATH_TO_SERVER}v1/characters?sort=born`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getSortByYearDesc() {
    const characters = `${PATH_TO_SERVER}v1/characters?sort=-born`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getPage(page: number) {
    const characters = `${PATH_TO_SERVER}/v1/characters?page[number=10]&page[size=20]`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }
}

export default new Api();
