import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import FormSwitches from './FormSwitches';
import InputTextComponent from './InputTextComponent';
//import InputImgComponent from './InputImgComponent';
import InputSelectComponent from './InputSelectComponent';
import InputDateComponent from './InputDateComponent';
import { IWizard, ICard, IData, wizard } from '../../global/interfaces';
import templateImg from '../../assets/img/aboutUs-1.png';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import './FormSwitches.scss';
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

function Form(props: IFormProps) {
  const [card, setCard] = useState<unknown>({});
  const [cardList, setCardList] = useState<Array<IData>>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleImage = (imageSrc: string) => setSelectedImage(imageSrc);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit } = useForm<ICard>();
  const onSubmit = (data: ICard) => {
    console.log(data);
  };
  const houses: Array<string> = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const wandWood: Array<string> = ['hawthorn', 'cherry', 'yew', 'cypress', 'walnut', 'mahogany'];
  const wandCore: Array<string> = ['dragon heartstring', 'unicorn tail-hair', 'phoenix feather'];
  const wandLength: Array<string> = ['10', '10 1/2', '11', '12', '12 3/4', '13', '14', '15', '16'];

  // function handleInputSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const card: ICard = {
  //     name: wizard.name?.value as string,
  //     species: '',
  //     gender: (wizard.gender?.checked as boolean) ? 'female' : 'male',
  //     house: wizard.house?.value as string,
  //     born: wizard.born?.value as string,
  //     blood_status: wizard.blood_status?.checked.toString() as string,
  //     eye_color: wizard.eye_color?.value as string,
  //     hair_color: wizard.hair_color?.value as string,
  //     wands: [
  //       `${wizard.wand.wood?.value as string},
  //       ${wizard.wand.core?.value as string},
  //       ${wizard.wand.length?.value as string}`,
  //     ],
  //     patronus: wizard.patronus?.value as string,
  //     image: selectedImage,
  //     alias_names: [],
  //     family_members: [],
  //     jobs: [],
  //     romances: [],
  //     boggart: '',
  //     wiki: '',
  //   };

  //   cardList.push({
  //     attributes: card,
  //     type: 'kkk',
  //     id: '1',
  //   });
  //   props.handlerForm(cardList);
  //   (wizard.name as HTMLInputElement).value = '';
  //   (wizard.born as HTMLInputElement).value = '';
  //   (wizard.eye_color as HTMLInputElement).value = '';
  //   (wizard.hair_color as HTMLInputElement).value = '';
  //   (wizard.patronus as HTMLInputElement).value = '';
  //   (wizard.house as HTMLSelectElement).value = '';
  //   (wizard.wand.wood as HTMLSelectElement).value = '';
  //   (wizard.wand.core as HTMLSelectElement).value = '';
  //   (wizard.wand.length as HTMLSelectElement).value = '';
  //   handleOpen();
  // }

  return (
    <div className="form__page">
      <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label" htmlFor="name">
          your wizard name
          <input
            type="text"
            id="name"
            {...register('name')}
            required={true}
            minLength={3}
            maxLength={20}
            pattern="^[a-zA-Zа-яА-Я_ ]*$"
          />
        </label>

        <label className="form__label" htmlFor="house">
          your wizard name
          <select id="house" {...register('house')} required={true}>
            {houses.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label" htmlFor="bday">
          enter your birthday
          <input
            type="date"
            id="bday"
            {...register('born')}
            required={true}
            min="1900-01-01"
            max="2016-01-01"
          />
        </label>

        <label className="form__label" htmlFor="blood_status">
          are you wizard?
          <input
            type="checkbox"
            id="blood_status"
            {...register('blood_status')}
            className="form__label-checkbox"
          />
        </label>

        <label className="form__label" htmlFor="eye">
          eye colour
          <input
            type="text"
            id="eye"
            {...register('eye_color')}
            required={true}
            minLength={3}
            maxLength={20}
            pattern="^[a-zA-Zа-яА-Я_ ]*$"
          />
        </label>

        <label className="form__label" htmlFor="hair">
          hair colour
          <input
            type="text"
            id="hair"
            {...register('hair_color')}
            required={true}
            minLength={3}
            maxLength={20}
            pattern="^[a-zA-Zа-яА-Я_ ]*$"
          />
        </label>

        <label className="form__label" htmlFor="patronus">
          patronus
          <input
            type="text"
            id="patronus"
            {...register('patronus')}
            required={true}
            minLength={3}
            maxLength={20}
            pattern="^[a-zA-Zа-яА-Я_ ]*$"
          />
        </label>

        <label className="form-img__container" htmlFor="avatar">
          add your picture
          <div className="form-img__btn">add</div>
          <input
            type="file"
            id="avatar"
            className="form__img"
            accept={'image/png, image/jpeg'}
            onChange={(event) => {
              const el = event.target as HTMLInputElement;
              const file = (el.files as FileList)[0];
              const src = URL.createObjectURL(file);
              setSelectedImage(src);
            }}
          />
        </label>
        {selectedImage ? (
          <img alt="add img" width={'50px'} src={selectedImage} />
        ) : (
          <img alt="add img" width={'50px'} src={templateImg} />
        )}

        <div className="form__switches">
          <p className="form__title">Choose gender</p>
          <div className="form__switches-gender">
            <label className="switch" htmlFor="gender">
              male
            </label>
            <label className="switch">
              <input type="checkbox" id="gender" {...register('gender')} />
              <span className="slider round"></span>
            </label>
            female
          </div>
        </div>

        <p className="form__title">your wand</p>
        {/* <label className="form__label" htmlFor="wand-core">
          wand core
          <select id="wand-core" {...register('wands')} required={true}>
            {wandCore.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label> */}

        <label className="form__label" htmlFor="wand-wood">
          wand wood
          <select id="wand-wood" {...register('wands')} required={true}>
            {wandWood.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label" htmlFor="wand-length">
          wand length
          <select id="wand-length" {...register('wands')} required={true}>
            {wandLength.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>
        {/*
        <InputImgComponent
          title={'add your picture'}
          type={'file'}
          id={'avatar'}
          callback={handleImage}
          className={['form-img__container', 'form__img']}
          accept={'image/png, image/jpeg'}
          reff={(element: HTMLInputElement) => (wizard.image = element)}
        />
        {selectedImage ? (
          <img alt="add img" width={'50px'} src={selectedImage} />
        ) : (
          <img alt="add img" width={'50px'} src={templateImg} />
        )}

        <FormSwitches reff={(element: HTMLInputElement) => (wizard.gender = element)} />
        <p className="form__title">your wand</p>
        <InputSelectComponent
          title={'wand wood'}
          id={'wand-wood'}
          className={['form__label']}
          components={['hawthorn', 'cherry', 'yew', 'cypress', 'walnut', 'mahogany']}
          reff={(element: HTMLSelectElement) => (wizard.wand.wood = element)}
          required={true}
        />
        <InputSelectComponent
          title={'wand core'}
          id={'wand-core'}
          className={['form__label']}
          components={['dragon heartstring', 'unicorn tail-hair', 'phoenix feather']}
          reff={(element: HTMLSelectElement) => (wizard.wand.core = element)}
          required={true}
        />
        <InputSelectComponent
          title={'wand length'}
          id={'wand-length'}
          className={['form__label']}
          components={['10', '10 1/2', '11', '12', '12 3/4', '13', '14', '15', '16']}
          reff={(element: HTMLSelectElement) => (wizard.wand.length = element)}
          required={true}
        /> */}
        <input type="submit" value="CREATE CARD" className="submit__btn" />
      </form>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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

export default Form;
