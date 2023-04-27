import React, { useRef, useState } from 'react';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { Button, FormInputField, Datepicker } from '../../../components';
import './register.css';
import CartIcon from '../../../common/assets/cart-form-icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { serverTimestamp, storage } from '../../../common/firebase/firebase';
import { ISignUpFormData } from '../../../types';
import { useAuthUser, useNotification, usePageTitle } from '../../../hooks';
import {
  emailFieldPatternValidationInfo,
  passwordFieldPatternValidationInfo
} from '../../../common';
import { validatePassword } from '../../../utils/validate';
import useStore from '../../../hooks/useStore';
import { useDropzone } from 'react-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import classNames from 'classnames';

export default function RegisterPage(): React.ReactElement {
  usePageTitle('Sign Up');
  const [image, setImage] = useState<any>([]);
  const [imageUpload, setImageUpload] = useState<any>(null);
  const methods = useForm<ISignUpFormData>({ mode: 'onChange' });
  const { handleSubmit, watch, reset, control } = methods;
  const navigate = useNavigate();
  const { showErrorPopup, showSuccessPopup } = useNotification();
  const { setUser } = useAuthUser();

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 16);
  const password = useRef({});
  const email = useRef({});
  password.current = watch('password', '');
  email.current = watch('email', '');

  const {
    userStore: { register }
  } = useStore();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
      setImageUpload(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const uploadFile = (email: string): void => {
    if (image == null || image.length === 0) return;

    const imageRef = ref(
      storage,
      `tehnometal-shop/profile/${email}/${image.name}`
    );

    uploadBytes(imageRef, image).then((snapshot: any) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUpload(url);
      });
    });
  };

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
        uploadFile(res.data.data.email);
        setUser(res.data);
        navigate('/');
        showSuccessPopup('User successfully created!');
      }
    } catch (error: any) {
      reset();
      showErrorPopup(error.message);
    }
  };

  const handleImageUpload = (event: any): void => {
    setImage(event.target.files[0]);
  };

  const dropzoneClassName = classNames('dropzone', {
    'dropzone--active': isDragActive
  });

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
              maxDate={maxDate}
              infoMessage={"User can't be younger than 16."}
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
                value === email.current || 'The emails do not match'
              }
            />

            <div className='register--img-dnd flex flex-column'>
              <Controller
                name='image'
                control={control}
                render={({ field }) => (
                  <div
                    {...getRootProps({})}
                    className={dropzoneClassName}
                  >
                    <input
                      {...getInputProps()}
                      onChange={(e) => {
                        handleImageUpload(e);
                        field.onChange(e);
                      }}
                      onBlur={field.onBlur}
                    />
                    {isDragActive ? (
                      <p>Drop your files here...</p>
                    ) : (
                      <label
                        htmlFor='image'
                        className='text-center cursor-pointer flex flex-column gap-20'
                      >
                        <span>Image (optional):</span>
                        <span>
                          <Button className='add-img-btn'>Add Image</Button> or
                          drop files here
                        </span>
                      </label>
                    )}
                  </div>
                )}
              />
              <aside>
                {imageUpload !== null && !isDragActive && (
                  <div className='flex justify-center align-center'>
                    <img
                      className='register--profile-img'
                      src={imageUpload[0]?.preview}
                      alt='Loading..'
                      // Revoke data uri after img is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(imageUpload[0]?.preview);
                      }}
                    />
                  </div>
                )}
              </aside>
            </div>
            <Button
              className='btn login--btn'
              type='submit'
            >
              Register
            </Button>
            <AlreadyHaveAccount />
          </form>
        </FormProvider>
      </div>
    </section>
  );
}

const AlreadyHaveAccount = (): React.ReactElement => {
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
