import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormInputField } from '../../../components';
import './signInPage.css';
import GoogleIcon from '../../../common/assets/google-icon.png';
import CartIcon from '../../../common/assets/cart-form-icon.png';
import { Link } from 'react-router-dom';
import { ISignInFormData } from '../../../types';
import { signInServiceInstance } from '../../../services';

export default function SignInPage(): React.ReactElement {
  const methods = useForm<ISignInFormData>({ mode: 'onChange' });
  const { handleSubmit } = methods;

  const handleSubmitForm = (data: ISignInFormData): void => {
    signInServiceInstance.login(data);
  };

  return (
    <section className='login--container'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='membership--wrapper'>
        <FormProvider {...methods}>
          <form
            className='form'
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <img
              src={CartIcon}
              className='form--cart-icon'
              alt='cart-icon'
            />
            <FormInputField
              name='email'
              className='form--input'
              placeholder='EMAIL'
              icon='form--icon email-icon'
              type='email'
            />
            <FormInputField
              name='password'
              className='form--input pass-icon'
              type='password'
              placeholder='PASSWORD'
              icon='form--icon pass-icon'
            />
            <Button
              className='btn login--btn'
              type='submit'
            >
              Login
            </Button>
            <SignInWithGoogleOption />
          </form>
        </FormProvider>
      </div>
    </section>
  );
}

const SignInWithGoogleOption = (): React.ReactElement => {
  const { doSignInWithGoogle } = signInServiceInstance;
  return (
    <>
      <span className='link--label'>
        You don&apos;t have an account? &nbsp;
        <Link
          to='/auth/register'
          className='underline'
        >
          Register here
        </Link>
      </span>

      <span className='or--opt'>OR</span>
      <div
        className='google--sign-in flex'
        onClick={doSignInWithGoogle}
      >
        <Button className='btn google--opt'>Sign in with g-mail</Button>
        <img
          src={GoogleIcon}
          className='form--google-icon'
          alt='google icon'
        />
      </div>
    </>
  );
};
