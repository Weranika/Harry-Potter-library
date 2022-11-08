import * as React from 'react';
import './FormSwitches.scss';

interface IFormSwitchesProps {
  reff: (a: HTMLInputElement) => void;
}
class FormSwitches extends React.Component<IFormSwitchesProps> {
  constructor(props: IFormSwitchesProps) {
    super(props);
  }

  render() {
    const {reff} = this.props;
    return (
      <div className="form__switches">
        <p className="form__title">Choose gender</p>
        <div className="form__switches-gender">
          <label className="switch" htmlFor="male">
            male
          </label>
          <label className="switch">
            <input type="checkbox" id="male" ref={this.props.reff} />
            <span className="slider round"></span>
          </label>
          female
        </div>
      </div>
    );
  }
}

export default FormSwitches;
