import { IData } from 'global/interfaces';

const PATH_TO_SERVER = 'https://api.potterdb.com/';
class Api {
  getList() {
    const listCharacters = `${PATH_TO_SERVER}v1/characters`;
    return fetch(listCharacters)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }

  getCharacter(name: string) {
    const characters = `${PATH_TO_SERVER}v1/characters?filter[name_cont_any]=${name}`;
    return fetch(characters)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      }) as Promise<Array<IData>>;
  }
}

export default new Api();
