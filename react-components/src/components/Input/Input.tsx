import React, { useState, useEffect } from 'react';
import './input.scss';
interface IInputProps {
  handlerSearchValue: (a: string) => void;
}
function Input(props: IInputProps) {
  localStorage.getItem('inputValue') === 'null' ? '' : localStorage.getItem('inputValue');
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem('inputValue') as string
  );

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  });

  return (
    <div className="search-container">
      <form onSubmit={submitForm}>
        <input
          placeholder="Accio more information"
          autoFocus
          onChange={(event) => {
            const value = event.target.value;
            setInputValue(value);
            props.handlerSearchValue(value);
          }}
          value={inputValue}
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
