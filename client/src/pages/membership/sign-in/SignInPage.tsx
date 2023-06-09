import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormInputField } from '../../../components';
import './signInPage.css';
import GoogleIcon from '../../../common/assets/google-icon.png';
import CartIcon from '../../../common/assets/cart-form-icon.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ISignInFormData } from '../../../types';
import { signInServiceInstance } from '../../../services';
import { useAuthUser, usePageTitle, useNotification } from '../../../hooks';
import { emailFieldPatternValidationInfo } from '../../../common';
import { isNullOrWhitespace } from '../../../utils/validate';
import useStore from '../../../hooks/useStore';

export default function SignInPage(): React.ReactElement {
  usePageTitle('Sign In');
  const methods = useForm<ISignInFormData>({ mode: 'onChange' });
  const { handleSubmit, reset } = methods;
  const { setUser } = useAuthUser();
  const navigate = useNavigate();
  const { showErrorPopup } = useNotification();
  const location = useLocation();
  const {
    userStore: { login }
  } = useStore();
  // get return url from search params
  const searchParams = new URLSearchParams(location.search);
  let returnUrl = searchParams.get('returnUrl');

  const handleSubmitForm = async (data: ISignInFormData): Promise<any> => {
    try {
      const res = await login(data);
      if (res.success) {
        setUser(res.data);
        if (returnUrl !== null) {
          navigate(returnUrl, { replace: true });
          returnUrl = null;
        } else {
          navigate('/');
        }
      }
    } catch (error: any) {
      console.log(error);
      reset();
      showErrorPopup(error.message);
    }
  };

  return (
    <section className='login--container full'>
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
              placeholder='EMAIL*'
              icon='form--icon email-icon'
              type='email'
              pattern={{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Invalid email address'
              }}
              infoMessage={emailFieldPatternValidationInfo}
              required
            />

            <FormInputField
              name='password'
              className='form--input pass-icon'
              type='password'
              placeholder='PASSWORD*'
              icon='form--icon pass-icon'
              validate={(value: string): any =>
                isNullOrWhitespace(value) || 'Password not valid.'
              }
              required
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
