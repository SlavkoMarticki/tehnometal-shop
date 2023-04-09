import { useFormContext } from 'react-hook-form';
import { IFormInputFieldProps } from '../../types';
import { ErrorMessage } from '.';
import { ReactElement } from 'react';
import './inputs.css';

export default function FormInputField(
  props: IFormInputFieldProps
): ReactElement {
  const {
    name,
    type = 'text',
    value,
    placeholder,
    label,
    validate,
    defaultValue,
    className,
    icon,
    ...rest
  } = props;

  const { register } = useFormContext();

  return (
    <>
      <div className='input-group'>
        {label != null && <label htmlFor={name}>{label}</label>}

        {icon != null && <span className={icon}></span>}
        <input
          className={className}
          {...register(name, { validate })}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...rest}
        />
        <ErrorMessage name={name} />
      </div>
    </>
  );
}
