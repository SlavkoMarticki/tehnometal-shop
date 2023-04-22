import { useFormContext } from 'react-hook-form';
import { ITextAreaInputFieldProps } from '../../types';
import { ErrorMessage } from '.';
import { ReactElement } from 'react';
import './inputs.css';

export default function TextAreaField(
  props: ITextAreaInputFieldProps
): ReactElement {
  const {
    name,
    value,
    placeholder,
    label,
    validate,
    defaultValue,
    className,
    rows,
    cols,
    ...rest
  } = props;

  const { register } = useFormContext();

  return (
    <>
      <div className='input-group'>
        {label != null && <label htmlFor={name}>{label}</label>}

        <textarea
          className={className}
          {...register(name, { validate })}
          name={name}
          rows={rows}
          cols={cols}
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
