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
    const {type, id, reff, className, title, required} = this.props;
    return (
      <label className={className[0]} htmlFor={id}>
        {title}
        <input
          type={type}
          id={id}
          ref={reff}
          name={id}
          className={className[1]}
          required={required}
          min="1900-01-01"
          max="2016-01-01"
        />
      </label>
    );
  }
}

export default InputDateComponent;
