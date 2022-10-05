import * as React from 'react';
import './input.scss';

interface IInputState {
  inputValue: string;
}
class Input extends React.Component<unknown, IInputState> {
  constructor() {
    super({});
    this.state = {
      inputValue: '',
    };
  }

  submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(this.state.inputValue);
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.submitForm}>
          <input
            placeholder="Accio more information"
            autoFocus
            onChange={(event) => {
              const inputValue = event.target.value;
              localStorage.setItem('inputValue', inputValue);
              this.setState({
                inputValue: inputValue,
              });
              console.log(inputValue);
            }}
            value={localStorage.getItem('inputValue') || ''}
            type="text"
            className="search-input"
            autoComplete="off"
          />
          <button type="submit" className="search-container__button">
            &gt;
          </button>
          <div className="search-clear"></div>
        </form>
      </div>
    );
  }
}

export default Input;
