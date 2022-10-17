import React from 'react';
import { render, screen } from '@testing-library/react';
import InputTextComponent from '../components/FormComponent/InputTextComponent';

test('re-rendering the same component with different props does not remount', () => {
  let patronus = null;
  const { rerender } = render(
    <InputTextComponent
      title={'patronus'}
      type={'text'}
      id={'patronus'}
      className={['form__label']}
      reff={(element: HTMLInputElement) => (patronus = element)}
      required={true}
      minLength={3}
      maxLength={15}
    />
  );
  expect(screen.getByText('patronus')).toBeInTheDocument();

  rerender(
    <InputTextComponent
      title={'parents'}
      type={'text'}
      id={'patronus'}
      className={['form__label']}
      reff={(element: HTMLInputElement) => (patronus = element)}
      required={true}
      minLength={3}
      maxLength={15}
    />
  );
  expect(screen.getByText('parents')).toBeInTheDocument();
});
