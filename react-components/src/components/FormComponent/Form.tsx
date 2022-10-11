import React, { FormEvent } from 'react';
import FormSwitches from './FormSwitches';
import InputTextComponent from './InputTextComponent';
import InputImgComponent from './InputImgComponent';
import InputSelectComponent from './InputSelectComponent';

interface IFormState {
  name: string;
  surname: string;
  house: string;
  male: boolean;
  female: boolean;
  bday: string;
  wizard: boolean;
  eye: string;
  hair: string;
  patronus: string;
  wandWood: string;
  wandCore: string;
  wandLength: number;
}
interface IFormProps {
  inputValue: string;
}
// interface ICreatedCardList {
//   createdCardList?: Array<IFormState>;
// }

class Form extends React.Component<IFormProps, IFormState> {
  private stepInput: React.RefObject<HTMLInputElement>;
  //private createdCardList: ICreatedCardList;

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stepInput = React.createRef();
    //this.createdCardList = [];
    this.state = {
      name: '',
      surname: '',
      house: '',
      male: false,
      female: false,
      bday: '',
      wizard: true,
      eye: '',
      hair: '',
      patronus: '',
      wandWood: '',
      wandCore: '',
      wandLength: 10,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    alert((this.stepInput.current as HTMLInputElement).value);
    const target = this.stepInput.current as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    //const card: IFormState= {};

    // if (target.id === 'wizard') {
    //   card.wizard = value as boolean;
    // } else if (target.id === 'name') {

    // }
    event.preventDefault();
  }

  render() {
    return (
      <div className="form__page">
        <form className="form__container" onSubmit={this.handleSubmit}>
          <InputTextComponent
            title={'your wizard name'}
            type={'text'}
            id={'name'}
            className={['form__label']}
          />
          <InputTextComponent
            title={'your wizard surname'}
            type={'text'}
            id={'surname'}
            className={['form__label']}
          />
          <InputSelectComponent
            title={'choose your house'}
            id={'house'}
            className={['form__label']}
            components={['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff']}
          />
          <InputTextComponent
            title={'enter your birthday'}
            type={'date'}
            id={'bday'}
            className={['form__label']}
          />
          <InputTextComponent
            title={'are you wizard?'}
            type={'checkbox'}
            id={'wizard'}
            className={['form__label', 'form__label-checkbox']}
          />
          <InputTextComponent
            title={'eye colour'}
            type={'text'}
            id={'eye'}
            className={['form__label']}
          />
          <InputTextComponent
            title={'hair colour'}
            type={'text'}
            id={'hair'}
            className={['form__label']}
          />
          <InputTextComponent
            title={'patronus'}
            type={'text'}
            id={'patronus'}
            className={['form__label']}
          />
          <InputImgComponent
            title={'add your picture'}
            type={'file'}
            id={'avatar'}
            className={['form-img__container', 'form__img']}
            accept={'image/png, image/jpeg'}
          />
          <FormSwitches inputValue="hi" />
          <p className="form__title">your wand</p>
          <InputSelectComponent
            title={'wand wood'}
            id={'wand-wood'}
            className={['form__label']}
            components={['hawthorn', 'cherry', 'yew', 'cypress', 'walnut', 'mahogany']}
          />
          <InputSelectComponent
            title={'wand core'}
            id={'wand-core'}
            className={['form__label']}
            components={['dragon heartstring', 'unicorn tail-hair', 'phoenix feather']}
          />
          <InputSelectComponent
            title={'wand length'}
            id={'wand-length'}
            className={['form__label']}
            components={['10', '10 1/2', '11', '12', '12 3/4', '13', '14', '15', '16']}
          />

          <input type="submit" value="CREATE CARD" className="submit__btn" />
        </form>
      </div>
    );
  }
}

export default Form;
