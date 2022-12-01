import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook';
import { inputSearch } from '../../reducers/searchSlice';
import { fetchCharacter, fetchList } from '../../reducers/itemSlice';

import './input.scss';

function Input() {
  const input = useAppSelector((state) => state.search.inputSearch);
  const dispatch = useAppDispatch();
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="search-container">
      <form onSubmit={submitForm}>
        <input
          placeholder="Accio more information"
          autoFocus
          onChange={(event) => {
            const value = event.target.value;
            dispatch(inputSearch(value));
            if ((value as string).length > 2) {
              dispatch(fetchCharacter(value as string));
            } else {
              dispatch(fetchList());
            }
            localStorage.setItem('inputValue', value);
          }}
          value={input as string}
          type="text"
          className="search-input"
          autoComplete="off"
          name="search-input"
          data-testid="search-input"
        />
        <button type="submit" className="search-container__button">
          &gt;
        </button>
        <div className="search-clear"></div>
      </form>
    </div>
  );
}

export default Input;
