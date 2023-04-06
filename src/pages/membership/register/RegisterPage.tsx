import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormInputField, Datepicker } from '../../../components';
import './register.css';
import GoogleIcon from '../../../common/assets/google-icon.png';
import CartIcon from '../../../common/assets/cart-form-icon.png';
import { Link } from 'react-router-dom';
import { serverTimestamp } from '../../../common/firebase/firebase';
import { ISignUpFormData } from '../../../types';
import { registerServiceInstance } from '../../../services';

export default function RegisterPage(): React.ReactElement {
  const methods = useForm<ISignUpFormData>({ mode: 'onChange' });
  const { handleSubmit } = methods;

  const handleSignUpForm = async (data: ISignUpFormData): Promise<any> => {
    const { username, password, email, dateOfBirth } = data;
    const modifiedData = {
      username,
      password,
      email,
      dateOfBirth,
      timeStamp: serverTimestamp()
    };
    await registerServiceInstance.registerUser(modifiedData);
  };

  return (
    <section className='register--container'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='membership--wrapper'>
        <FormProvider {...methods}>
          <form className='form' onSubmit={handleSubmit(handleSignUpForm)}>
            <img src={CartIcon} className='form--cart-icon' alt='cart-icon' />
            <FormInputField
              name='username'
              className='form--input'
              placeholder='USERNAME'
              icon='form--icon user-icon'
            />
            <FormInputField
              name='password'
              className='form--input'
              type='password'
              placeholder='PASSWORD'
              icon='form--icon pass-icon'
            />
            <FormInputField
              name='repeatPassword'
              className='form--input'
              type='password'
              placeholder='REPEAT PASSWORD'
              icon='form--icon pass-icon'
            />
            <Datepicker
              name='dateOfBirth'
              placeholder='DATE OF BIRTH'
              icon='form--icon calendar-icon'
            />
            <FormInputField
              name='email'
              className='form--input'
              type='email'
              placeholder='EMAIL'
              icon='form--icon email-icon'
            />
            <FormInputField
              name='repeatEmail'
              className='form--input'
              type='email'
              placeholder='REPEAT EMAIL'
              icon='form--icon email-icon'
            />
            <Button className='btn login--btn' type='submit'>
              Register
            </Button>
            <SignUpWithGoogleOption />
          </form>
        </FormProvider>
      </div>
    </section>
  );
}

const SignUpWithGoogleOption = (): React.ReactElement => {
  return (
    <>
      <span className='link--label'>
        You already have an account?{' '}
        <Link to='/auth/login' className='underline'>
          Login here
        </Link>
      </span>
    </>
  );
};
