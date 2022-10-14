import React, { FormEvent } from 'react';
import FormSwitches from './FormSwitches';
import InputTextComponent from './InputTextComponent';
import InputImgComponent from './InputImgComponent';
import InputSelectComponent from './InputSelectComponent';
import InputDateComponent from './InputDateComponent';

interface IFormState {
  card: unknown;
  cardList: Array<ICard>;
}
export interface IWizard {
  name: HTMLInputElement | null;
  alternate_names: HTMLInputElement | null;
  species: HTMLInputElement | null;
  gender: HTMLInputElement | null;
  house: HTMLSelectElement | null;
  dateOfBirth: HTMLInputElement | null;
  yearOfBirth: HTMLInputElement | null;
  wizard: HTMLInputElement | null;
  ancestry: HTMLInputElement | null;
  eyeColour: HTMLInputElement | null;
  hairColour: HTMLInputElement | null;
  wand: {
    wood: HTMLSelectElement | null;
    core: HTMLSelectElement | null;
    length: HTMLSelectElement | null;
  };
  patronus: HTMLInputElement | null;
  hogwartsStudent: HTMLInputElement | null;
  hogwartsStaff: HTMLInputElement | null;
  actor: HTMLInputElement | null;
  alternate_actors: HTMLInputElement | null;
  alive: HTMLInputElement | null;
  image: HTMLInputElement | null;
}
export interface ICard {
  name: string;
  alternate_names: Array<string>;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number | string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | string;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<string>;
  alive: boolean;
  image: string;
}
export interface IFormProps {
  handlerForm: (cardList: Array<ICard>) => void;
}
const nullWizard = {
  name: null,
  alternate_names: null,
  species: null,
  gender: null,
  house: null,
  dateOfBirth: null,
  yearOfBirth: null,
  wizard: null,
  ancestry: null,
  eyeColour: null,
  hairColour: null,
  wand: {
    wood: null,
    core: null,
    length: null,
  },
  patronus: null,
  hogwartsStudent: null,
  hogwartsStaff: null,
  actor: null,
  alternate_actors: null,
  alive: null,
  image: null,
};

class Form extends React.Component<IFormProps, IFormState> {
  private stepInput: React.RefObject<HTMLInputElement>;
  private wizard: IWizard;

  constructor(props: IFormProps) {
    super(props);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.stepInput = React.createRef();
    this.wizard = nullWizard;
    this.state = {
      card: {},
      cardList: [],
    };
  }

  handleInputSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('wizard:', this.wizard.wizard?.checked);

    const card: ICard = {
      name: this.wizard.name?.value as string,
      alternate_names: [],
      species: '',
      gender: (this.wizard.wizard?.checked as boolean) ? 'female' : 'male',
      house: this.wizard.house?.value as string,
      dateOfBirth: this.wizard.dateOfBirth?.value as string,
      yearOfBirth: '',
      wizard: this.wizard.wizard?.checked as boolean,
      ancestry: '',
      eyeColour: this.wizard.eyeColour?.value as string,
      hairColour: this.wizard.hairColour?.value as string,
      wand: {
        wood: this.wizard.wand.wood?.value as string,
        core: this.wizard.wand.core?.value as string,
        length: this.wizard.wand.length?.value as string,
      },
      patronus: this.wizard.patronus?.value as string,
      hogwartsStudent: true,
      hogwartsStaff: true,
      actor: '',
      alternate_actors: [],
      alive: true,
      image: '',
    };
    this.state.cardList.push(card);
    this.props.handlerForm(this.state.cardList);
    (this.wizard.name as HTMLInputElement).value = '';
    (this.wizard.dateOfBirth as HTMLInputElement).value = '';
    (this.wizard.eyeColour as HTMLInputElement).value = '';
    (this.wizard.hairColour as HTMLInputElement).value = '';
    (this.wizard.patronus as HTMLInputElement).value = '';
    (this.wizard.house as HTMLSelectElement).value = '';
    (this.wizard.wand.wood as HTMLSelectElement).value = '';
    (this.wizard.wand.core as HTMLSelectElement).value = '';
    (this.wizard.wand.length as HTMLSelectElement).value = '';
    alert('Tour data is saved');
  }

  render() {
    return (
      <div className="form__page">
        <form className="form__container" onSubmit={this.handleInputSubmit}>
          <InputTextComponent
            title={'your wizard name'}
            type={'text'}
            id={'name'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.name = element)}
            required={true}
            minLength={3}
            maxLength={20}
          />
          <InputSelectComponent
            title={'choose your house'}
            id={'house'}
            className={['form__label']}
            components={['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']}
            reff={(element: HTMLSelectElement) => (this.wizard.house = element)}
            required={true}
          />
          <InputDateComponent
            title={'enter your birthday'}
            type={'date'}
            id={'bday'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.dateOfBirth = element)}
            required={true}
          />
          <InputTextComponent
            title={'are you wizard?'}
            type={'checkbox'}
            id={'wizard'}
            className={['form__label', 'form__label-checkbox']}
            reff={(element: HTMLInputElement) => (this.wizard.wizard = element)}
            required={false}
            minLength={3}
            maxLength={30}
          />
          <InputTextComponent
            title={'eye colour'}
            type={'text'}
            id={'eye'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.eyeColour = element)}
            required={true}
            minLength={3}
            maxLength={15}
          />
          <InputTextComponent
            title={'hair colour'}
            type={'text'}
            id={'hair'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.hairColour = element)}
            required={true}
            minLength={3}
            maxLength={15}
          />
          <InputTextComponent
            title={'patronus'}
            type={'text'}
            id={'patronus'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.patronus = element)}
            required={true}
            minLength={3}
            maxLength={15}
          />
          {/* <InputImgComponent
            title={'add your picture'}
            type={'file'}
            id={'avatar'}
            className={['form-img__container', 'form__img']}
            accept={'image/png, image/jpeg'}
          /> */}
          <FormSwitches reff={(element: HTMLInputElement) => (this.wizard.gender = element)} />
          <p className="form__title">your wand</p>
          <InputSelectComponent
            title={'wand wood'}
            id={'wand-wood'}
            className={['form__label']}
            components={['hawthorn', 'cherry', 'yew', 'cypress', 'walnut', 'mahogany']}
            reff={(element: HTMLSelectElement) => (this.wizard.wand.wood = element)}
            required={true}
          />
          <InputSelectComponent
            title={'wand core'}
            id={'wand-core'}
            className={['form__label']}
            components={['dragon heartstring', 'unicorn tail-hair', 'phoenix feather']}
            reff={(element: HTMLSelectElement) => (this.wizard.wand.core = element)}
            required={true}
          />
          <InputSelectComponent
            title={'wand length'}
            id={'wand-length'}
            className={['form__label']}
            components={['10', '10 1/2', '11', '12', '12 3/4', '13', '14', '15', '16']}
            reff={(element: HTMLSelectElement) => (this.wizard.wand.length = element)}
            required={true}
          />

          <input type="submit" value="CREATE CARD" className="submit__btn" />
        </form>
      </div>
    );
  }
}

export default Form;
