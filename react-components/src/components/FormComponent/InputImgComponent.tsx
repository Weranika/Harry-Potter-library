import * as React from 'react';

interface IInputImgProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  accept: string;
  reff: (a: HTMLInputElement) => void;
  callback: (src: string) => void;
}
interface IInputImgState {
  selectedImage: File | null;
}
class InputImgComponent extends React.Component<IInputImgProps, IInputImgState> {
  constructor(props: IInputImgProps) {
    super(props);
  }

  render() {
    const {type, id, reff, className, title} = this.props;
    return (
      <label className={className[0]} htmlFor={id}>
        {title}
        <div className="form-img__btn">add</div>
        <input
          type={type}
          id={id}
          name={id}
          className={className[1]}
          onChange={(event) => {
            const el = event.target as HTMLInputElement;
            const file = (el.files as FileList)[0];
            const src = URL.createObjectURL(file);
            this.props.callback(src);
            this.setState({
              selectedImage: (el.files as FileList)[0],
            });
          }}
          ref={reff}
        />
      </label>
    );
  }
}

export default InputImgComponent;
