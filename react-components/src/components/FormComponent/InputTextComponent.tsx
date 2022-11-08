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
    const {type, id, reff, className, required, title, minLength, maxLength} = this.props;
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
          minLength={minLength}
          maxLength={maxLength}
          pattern="^[a-zA-Zа-яА-Я_ ]*$"
        />
      </label>
    );
  }
}

export default InputTextComponent;
