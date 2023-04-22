import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { IErrorMessage } from '../../types';
import { Fade } from 'react-reveal';

export default function ErrorMessage(
  props: IErrorMessage
): ReactElement | null {
  const { name } = props;
  const {
    formState: { errors }
  } = useFormContext();
  if (Object.keys(errors).length === 0) {
    return null;
  }
  const error: any = errors[name];

  return <div className='customized-error-field-message'>{error?.message}</div>;
}
