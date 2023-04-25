import { ISearchInputFieldProps } from '../../types';
import { ReactElement } from 'react';
import './inputs.css';
import { useFormContext } from 'react-hook-form';

export default function FormInputField(
  props: ISearchInputFieldProps
): ReactElement {
  const {
    name,
    type = 'text',
    value,
    placeholder,
    defaultValue,
    className,
    icon
  } = props;

  const { register } = useFormContext();
  return (
    <>
      <div className='input-group'>
        {icon != null && <span className={icon}></span>}
        <input
          className={className}
          {...register(name!)}
          type={type}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
}
