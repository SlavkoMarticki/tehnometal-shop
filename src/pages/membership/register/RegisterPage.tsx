import React, { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormInputField, Datepicker } from '../../../components';
import './register.css';
import CartIcon from '../../../common/assets/cart-form-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { serverTimestamp, storage } from '../../../common/firebase/firebase';
import { ISignUpFormData } from '../../../types';
import { registerServiceInstance } from '../../../services';
import { useAuthUser, useNotification, usePageTitle } from '../../../hooks';
import {
  emailFieldPatternValidationInfo,
  passwordFieldPatternValidationInfo
} from '../../../common';
import { validatePassword } from '../../../utils/validate';
import useStore from '../../../hooks/useStore';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function RegisterPage(): React.ReactElement {
  usePageTitle('Sign Up');
  const [image, setImage] = useState<any>([]);
  const [imageUpload, setImageUpload] = useState<any>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);

      setImage(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });
  // #region dropzone
  // const imagesListRef = ref(storage, 'images/');

  const uploadFile = (email: string): void => {
    console.log(image[0]);
    if (image == null) return;

    const imageRef = ref(storage, `tehnometal-shop/profile/${email}/${image}`);
    uploadBytes(imageRef, image).then((snapshot: any) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUpload(url);
      });
    });
  };

  const thumbs = image?.map((img: any) => (
    <div key={img.name}>
      <div>
        <img
          src={img.preview}
          alt='Loading..'
          // Revoke data uri after img is loaded
          onLoad={() => {
            URL.revokeObjectURL(img.preview);
          }}
        />
      </div>
    </div>
  ));

  // #endregion

  const methods = useForm<ISignUpFormData>({ mode: 'onChange' });
  const { handleSubmit, watch, reset } = methods;

  const {
    userStore: { register }
  } = useStore();

  const password = useRef({});
  const email = useRef({});
  password.current = watch('password', '');
  email.current = watch('email', '');

  const navigate = useNavigate();
  const { setUser } = useAuthUser();
  const { showErrorPopup } = useNotification();

  const handleSignUpForm = async (data: ISignUpFormData): Promise<any> => {
    try {
      const { username, password, email, dateOfBirth } = data;
      const modifiedData = {
        username,
        password,
        email,
        dateOfBirth,
        timeStamp: serverTimestamp(),
        moneySpent: 0,
        averageBillPrice: 0
      };
      const res = await register(modifiedData);
      if (res.success) {
        setUser(res.data);
        navigate('/');
      }
    } catch (error: any) {
      reset();
      showErrorPopup(error.message);
    }
  };

  return (
    <section className='register--container full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='membership--wrapper'>
        <FormProvider {...methods}>
          <form
            className='form'
            onSubmit={handleSubmit(handleSignUpForm)}
          >
            <img
              src={CartIcon}
              className='form--cart-icon'
              alt='cart-icon'
            />
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
              validate={validatePassword}
              icon='form--icon pass-icon'
              infoMessage={passwordFieldPatternValidationInfo}
            />
            <FormInputField
              name='repeatPassword'
              className='form--input'
              type='password'
              placeholder='REPEAT PASSWORD'
              icon='form--icon pass-icon'
              validate={(value: string) =>
                value === password.current || 'The passwords do not match'
              }
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
              pattern={{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Your address is invalid'
              }}
              infoMessage={emailFieldPatternValidationInfo}
              icon='form--icon email-icon'
            />
            <FormInputField
              name='repeatEmail'
              className='form--input'
              type='email'
              placeholder='REPEAT EMAIL'
              icon='form--icon email-icon'
              validate={(value: string) =>
                value === email.current || 'The passwords do not match'
              }
            />

            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside>{thumbs}</aside>
            </section>

            <Button
              className='btn login--btn'
              type='submit'
            >
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
        <Link
          to='/auth/login'
          className='underline'
        >
          Login here
        </Link>
      </span>
    </>
  );
};
