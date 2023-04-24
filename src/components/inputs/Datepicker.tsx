import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';
import ReactDatePicker from 'react-datepicker';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker.css';
interface IProps {
  icon?: string;
  name: string;
  validate?: any;
  maxDate?: Date;
  placeholder: string;
  infoMessage?: string;
}

export default function DatePicker(props: IProps): React.ReactElement {
  const { control, register } = useFormContext();

  const { icon, name, validate, placeholder, maxDate, infoMessage } = props;
  return (
    <div className='input-group'>
      {icon != null && <span className={icon}></span>}
      <Controller
        render={(ref) => (
          <>
            <ReactDatePicker
              selected={
                ref.field.value ? new Date(Number(ref.field.value)) : undefined
              }
              onChange={(date: Date) => {
                ref.field.onChange(date.getTime());
              }}
              locale='en'
              maxDate={maxDate}
              showMonthDropdown
              showYearDropdown
              dropdownMode='scroll'
              dateFormat={'MMMM d, yyyy'}
              placeholderText={placeholder}
              className='form--input'
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
          </>
        )}
        {...register(name, { validate })}
        control={control}
        rules={{ required: true }}
      />

      <ErrorMessage name={name} />
    </div>
  );
}
