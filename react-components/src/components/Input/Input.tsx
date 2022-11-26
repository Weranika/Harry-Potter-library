import React from 'react';
import { AppContext } from '../../context/contex';
import './input.scss';

function Input() {
  const { state, dispatch } = React.useContext(AppContext);
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
            dispatch({ type: 'inputSearch', payload: value });
            localStorage.setItem('inputValue', value);
          }}
          value={state.inputSearch as string}
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
