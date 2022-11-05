import React, { InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { IWizard, ICard, IData, wizard } from '../../global/interfaces';

interface IInputTextProps {
  title: string;
  type: string;
  id: string;
  className: Array<string>;
  //ref: UseFormRegister<ICard>;//LegacyRef<HTMLInputElement> | undefined;//UseFormRegister<FieldValues>;//
  required: boolean;
  minLength: number;
  maxLength: number;
}
function InputTextComponent(props: IInputTextProps) {

  return (
    <label className={props.className[0]} htmlFor={props.id}>
      {props.title}
      <input
        type={props.type}
        id={props.id}
        
        className={props.className[1]}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern="^[a-zA-Zа-яА-Я_ ]*$"
      />
    </label>
  );
}

export default InputTextComponent;
