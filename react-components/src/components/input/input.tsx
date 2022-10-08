import * as React from 'react';
import './input.scss';

interface IInputState {
  inputValue: string;
}
interface IInputProps {
  handlerSearchValue: (a: string) => void;
}
class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.setState({
      inputValue: localStorage.getItem('inputValue') as string,
    });
  }

  submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  componentWillUnmount = () => {
    console.log('unmount');
    localStorage.setItem('inputValue', this.state.inputValue);
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      inputValue: localStorage.getItem('inputValue') as string,
    });
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
              this.setState({
                inputValue: inputValue,
              });
              this.props.handlerSearchValue(inputValue);
            }}
            value={this.state.inputValue}
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
