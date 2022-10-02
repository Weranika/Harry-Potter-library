import * as React from 'react';
import './input.scss';

// const focus = function setFocus() {
//   const input = document.getElementById('input') as HTMLInputElement;
//   input.focus();
// };

export default function Input() {
  return (
    <div className="search-container">
      <input
        //onLoad={focus}
        placeholder="Accio more information"
        autoFocus
        //onChange={(event) => dispatch(filterForSearch())}
        type="search"
        className="search-input"
        id="input"
        autoComplete="off"
        name="name"
      />
      <div className="search-clear"></div>
    </div>
  );
}
