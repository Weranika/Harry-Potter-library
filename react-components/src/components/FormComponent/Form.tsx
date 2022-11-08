import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { ICard, IData } from '../../global/interfaces';
import templateImg from '../../assets/img/aboutUs-1.png';
import './FormSwitches.scss';
export interface IFormProps {
  handlerForm: (cardList: IData) => void;
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
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, reset } = useForm<ICard>();
  const houses: Array<string> = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const wandWood: Array<string> = ['hawthorn', 'cherry', 'yew', 'cypress', 'walnut', 'mahogany'];
  const wandCore: Array<string> = ['dragon heartstring', 'unicorn tail-hair', 'phoenix feather'];
  const wandLength: Array<string> = ['10', '10 1/2', '11', '12', '12 3/4', '13', '14', '15', '16'];
  const wandInfo = {
    'wand core': wandCore,
    'wand wood': wandWood,
    'wand length': wandLength,
  };

  const onSubmit = (data: ICard) => {
    const card: ICard = {
      name: data.name as string,
      species: '',
      gender: (data.gender as string) ? 'female' : 'male',
      house: data.house as string,
      born: data.born as string,
      blood_status: data.blood_status as string,
      eye_color: data.eye_color as string,
      hair_color: data.hair_color as string,
      wands: data.wands as Array<string>,
      patronus: data.patronus as string,
      image: selectedImage,
      alias_names: [],
      family_members: [],
      jobs: [],
      romances: [],
      boggart: '',
      wiki: '',
    };

    props.handlerForm({
      attributes: card,
      type: 'i',
      id: data.name as string,
    });

    handleOpen();
    reset();
  };

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
          your house
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
        {Object.entries(wandInfo).map(([key, value], ind) => {
          return (
            <label className="form__label" htmlFor="wand-core" key={key}>
              {key}:
              <select id={key} {...register(`wands.${ind}`)} required={true}>
                {value.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </label>
          );
        })}
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
