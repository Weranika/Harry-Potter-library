import * as React from 'react';

interface IInputSelectProps {
  title: string;
  id: string;
  className: Array<string>;
  components: Array<string>;
  reff: (a: HTMLSelectElement) => void;
  required: boolean;
}
class InputSelectComponent extends React.Component<IInputSelectProps> {
  private selectRef: React.RefObject<HTMLSelectElement>;

  constructor(props: IInputSelectProps) {
    super(props);
    this.selectRef = React.createRef();
  }

  render() {
    return (
      <label className={this.props.className[0]} htmlFor={this.props.id}>
        {this.props.title}
        <select
          id={this.props.id}
          ref={this.props.reff}
          name={this.props.id}
          defaultValue={this.props.components[0]}
          required={this.props.required}
        >
          {this.props.components.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default InputSelectComponent;
