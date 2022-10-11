import * as React from 'react';

interface IInputImgProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  accept: string;
}
class InputImgComponent extends React.Component<IInputImgProps> {
  private input: React.RefObject<HTMLInputElement>;

  constructor(props: IInputImgProps) {
    super(props);
    this.input = React.createRef();
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
          ref={this.input}
          className={this.props.className[1]}
        />
      </label>
    );
  }
}

export default InputImgComponent;
