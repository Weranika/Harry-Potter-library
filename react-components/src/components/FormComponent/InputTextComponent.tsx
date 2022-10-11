import * as React from 'react';

interface IInputTextProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
}
class InputTextComponent extends React.Component<IInputTextProps> {
  private input: React.RefObject<HTMLInputElement>;

  constructor(props: IInputTextProps) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    return (
      <label className={this.props.className[0]} htmlFor={this.props.id}>
        {this.props.title}
        <input
          type={this.props.type}
          id={this.props.id}
          ref={this.input}
          name={this.props.id}
          className={this.props.className[1]}
        />
      </label>
    );
  }
}

export default InputTextComponent;
