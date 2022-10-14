import * as React from 'react';

interface IInputTextProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  reff: (a: HTMLInputElement) => void;
  required: boolean;
}
class InputDateComponent extends React.Component<IInputTextProps> {
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
          value="2000-01-01"
          min="1900-01-01"
          max="2016-01-01"
        />
      </label>
    );
  }
}

export default InputDateComponent;
