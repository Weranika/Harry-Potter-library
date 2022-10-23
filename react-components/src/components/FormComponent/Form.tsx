import React, { FormEvent } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import FormSwitches from './FormSwitches';
import InputTextComponent from './InputTextComponent';
import InputImgComponent from './InputImgComponent';
import InputSelectComponent from './InputSelectComponent';
import InputDateComponent from './InputDateComponent';
import { IWizard, ICard, IData, nullWizard } from '../../global/interfaces';
import templateImg from '../../assets/img/aboutUs-1.png';

interface IFormState {
  card: unknown;
  cardList: Array<IData>;
  setOpen: boolean;
  selectedImage: string;
}
export interface IFormProps {
  handlerForm: (cardList: Array<IData>) => void;
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
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
      setOpen: false,
      selectedImage: '',
    };
  }

  handleImage = (imageSrc: string) =>
    this.setState({
      selectedImage: imageSrc,
    });

  handleOpen = () =>
    this.setState({
      setOpen: true,
    });

  handleClose = () =>
    this.setState({
      setOpen: false,
    });

  handleInputSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const card: ICard = {
      name: this.wizard.name?.value as string,
      alternate_names: [],
      species: '',
      gender: (this.wizard.gender?.checked as boolean) ? 'female' : 'male',
      house: this.wizard.house?.value as string,
      born: this.wizard.born?.value as string,
      blood_status: this.wizard.blood_status?.checked.toString() as string,
      ancestry: '',
      eye_color: this.wizard.eye_color?.value as string,
      hair_color: this.wizard.hair_color?.value as string,
      wands: [
        `${this.wizard.wand.wood?.value as string},
        ${this.wizard.wand.core?.value as string},
        ${this.wizard.wand.length?.value as string}`,
      ],
      patronus: this.wizard.patronus?.value as string,
      hogwartsStudent: true,
      hogwartsStaff: true,
      actor: '',
      alternate_actors: [],
      alive: true,
      image: this.state.selectedImage,
    };
    this.state.cardList.push({
      attributes: card,
      type: 'kkk',
      id: '1',
    });
    this.props.handlerForm(this.state.cardList);
    (this.wizard.name as HTMLInputElement).value = '';
    (this.wizard.born as HTMLInputElement).value = '';
    (this.wizard.eye_color as HTMLInputElement).value = '';
    (this.wizard.hair_color as HTMLInputElement).value = '';
    (this.wizard.patronus as HTMLInputElement).value = '';
    (this.wizard.house as HTMLSelectElement).value = '';
    (this.wizard.wand.wood as HTMLSelectElement).value = '';
    (this.wizard.wand.core as HTMLSelectElement).value = '';
    (this.wizard.wand.length as HTMLSelectElement).value = '';
    this.handleOpen();
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
            reff={(element: HTMLInputElement) => (this.wizard.born = element)}
            required={true}
          />
          <InputTextComponent
            title={'are you wizard?'}
            type={'checkbox'}
            id={'wizard'}
            className={['form__label', 'form__label-checkbox']}
            reff={(element: HTMLInputElement) => (this.wizard.blood_status = element)}
            required={false}
            minLength={3}
            maxLength={30}
          />
          <InputTextComponent
            title={'eye colour'}
            type={'text'}
            id={'eye'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.eye_color = element)}
            required={true}
            minLength={3}
            maxLength={15}
          />
          <InputTextComponent
            title={'hair colour'}
            type={'text'}
            id={'hair'}
            className={['form__label']}
            reff={(element: HTMLInputElement) => (this.wizard.hair_color = element)}
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
          <InputImgComponent
            title={'add your picture'}
            type={'file'}
            id={'avatar'}
            callback={this.handleImage}
            className={['form-img__container', 'form__img']}
            accept={'image/png, image/jpeg'}
            reff={(element: HTMLInputElement) => (this.wizard.image = element)}
          />
          {this.state.selectedImage ? (
            <img alt="add img" width={'50px'} src={this.state.selectedImage} />
          ) : (
            <img alt="add img" width={'50px'} src={templateImg} />
          )}
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.setOpen}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.setOpen}>
            <Box sx={style}>
              <Typography
                id="transition-modal-description"
                textAlign="center"
                sx={{ m: 5, borderRadius: '10' }}
              >
                Your data is saved sussessful
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default Form;
