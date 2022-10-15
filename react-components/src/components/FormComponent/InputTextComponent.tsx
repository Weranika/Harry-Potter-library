import * as React from 'react';

interface IInputTextProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  reff: (a: HTMLInputElement) => void;
  required: boolean;
  minLength: number;
  maxLength: number;
}
class InputTextComponent extends React.Component<IInputTextProps> {
  constructor(props: IInputTextProps) {
    super(props);
  }

  render() {
    return (
      <label className={this.props.className[0]} htmlFor={this.props.id}>
        {this.props.title}
        <input
          type={this.props.type}
          id={this.props.id}
          ref={this.props.reff}
          name={this.props.id}
          className={this.props.className[1]}
          required={this.props.required}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          pattern="^[a-zA-Zа-яА-Я_ ]*$"
        />
      </label>
    );
  }
}

export default InputTextComponent;
