import * as React from 'react';

interface IInputImgProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  accept: string;
  reff: (a: React.RefObject<HTMLInputElement>) => void;
}
class InputImgComponent extends React.Component<IInputImgProps> {
  constructor(props: IInputImgProps) {
    super(props);
  }

  render() {
    return (
      <label className={this.props.className[0]} htmlFor={this.props.id}>
        {this.props.title}
        <div className="form-img__btn">add</div>
        <input
          type={this.props.type}
          id={this.props.id}
          name={this.props.id}
          className={this.props.className[1]}
          //ref={this.props.reff}
        />
      </label>
    );
  }
}

export default InputImgComponent;
