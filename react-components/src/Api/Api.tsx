import { IData, IMeta } from 'global/interfaces';
import mock from './mock.json';

const PATH_TO_SERVER = 'https://api.potterdb.com/';
const listCharacters = `${PATH_TO_SERVER}v1/characters`;

const MOCK_ENABLED = false;
class Api {
  getList() {
    if (MOCK_ENABLED) {
      return new Promise<Array<IData>>((resolve) => resolve(mock.data as IData[]));
    }

    return fetch(listCharacters)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('some problem with response');
        }
        return res.json();
      })
      .then((json) => {
        return json.data as Promise<Array<IData>>;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getRecords() {
    if (MOCK_ENABLED) {
      return new Promise<IMeta>((resolve) => resolve(mock.meta as IMeta));
    }

    return fetch(listCharacters)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('some problem with response');
        }
        return res.json();
      })
      .then((json) => {
        return json.meta as Promise<IMeta>;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCharacter(name: string) {
    if (MOCK_ENABLED) {
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
        return json.data as Promise<Array<IData>>;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSortBy(param: string, order: string) {
    let characters = '';
    order === 'asc'
      ? (characters = `${PATH_TO_SERVER}v1/characters?sort=${param}`)
      : (characters = `${PATH_TO_SERVER}v1/characters?sort=-${param}`);
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data as Promise<Array<IData>>;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPage(number: number, size: number) {
    const characters = `${PATH_TO_SERVER}/v1/characters?page[number=${number}]&page[size=${size}]`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data as Promise<Array<IData>>;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new Api();
