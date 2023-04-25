import { useFormContext } from 'react-hook-form';
import { IFormInputFieldProps } from '../../types';
import { ErrorMessage } from '.';
import { ReactElement } from 'react';
import './inputs.css';
import classNames from 'classnames';
import { AiOutlineInfoCircle } from 'react-icons/ai';
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
    required,
    pattern,
    infoMessage,
    ...rest
  } = props;

  const { register } = useFormContext();
  const {
    formState: { errors }
  } = useFormContext();

  const error: any = errors[name];

  const inputWithErrorClassName = classNames(className, {
    'input--has-error': error?.message != null
  });

  return (
    <>
      <div className='input-group'>
        {label != null && <label htmlFor={name}>{label}</label>}

        {icon != null && <span className={icon}></span>}
        <input
          className={inputWithErrorClassName}
          {...register(name, {
            validate,
            required: 'This field is required.',
            pattern
          })}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          {...rest}
        />
        {infoMessage != null && (
          <>
            <span
              className='input--info-icon'
              data-title={infoMessage}
            >
              <AiOutlineInfoCircle />
            </span>
          </>
        )}

        <ErrorMessage name={name} />
      </div>
    </>
  );
}
