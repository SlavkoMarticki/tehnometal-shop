import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '.';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface IProps {
  icon?: string;
  name: string;
  validate?: any;
  maxDate?: Date;
  placeholder: string;
}

export default function DatePicker(props: IProps): React.ReactElement {
  const { control, register } = useFormContext();

  const { icon, name, validate, placeholder, maxDate } = props;
  return (
    <div className='input-group'>
      {icon != null && <span className={icon}></span>}
      <Controller
        render={(ref) => (
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
        )}
        {...register(name, { validate })}
        control={control}
        rules={{ required: true }}
      />

      <ErrorMessage name={name} />
    </div>
  );
}
