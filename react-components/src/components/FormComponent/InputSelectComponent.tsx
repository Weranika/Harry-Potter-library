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
    const {components, id, reff, className, required, title} = this.props;
    return (
      <label className={className[0]} htmlFor={id}>
        {title}
        <select
          id={id}
          ref={reff}
          name={id}
          defaultValue={components[0]}
          required={required}
        >
          {components.map((el) => (
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
