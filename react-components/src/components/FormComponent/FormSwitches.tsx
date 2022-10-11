import * as React from 'react';
import './FormSwitches.scss';

interface IFormState {
  inputValue: string;
}
interface IFormProps {
  inputValue: string;
}
class FormSwitches extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
  }

  render() {
    return (
      <div className="form__switches">
        <p className="form__title">Choose gender</p>
        <div className="form__switches-gender">
          <label className="switch" htmlFor="male">
            male
          </label>
          <label className="switch">
            <input type="checkbox" id="male" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="form__switches-gender">
          <label className="switch" htmlFor="female">
            female
          </label>
          <label className="switch">
            <input type="checkbox" id="female" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default FormSwitches;
