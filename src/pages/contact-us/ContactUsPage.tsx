import React from 'react';
import './contactUs.css';
import { usePageTitle } from '../../hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInputField, TextAreaField } from '../../components/inputs';
import { Button } from '../../components';

export default function ContactUsPage(): React.ReactElement {
  usePageTitle('Contact Us');
  const methods = useForm({ mode: 'onChange' });
  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='contact-us--container'>
        <h1 className='contact-us--title'>CONTACT US</h1>
        <div className='contact-us--content'>
          <div className='contact-us--label'>
            <div className='contact-us--label-wrap'>
              <h2 className='contact-us--label-title'>
                We want to hear from you!!
              </h2>
              <h3 className='contact-us--label-content'>
                Contact us if you have any additional questions.
              </h3>
            </div>
          </div>
          <div className='contact-us--form'>
            <FormProvider {...methods}>
              <FormInputField
                className='form--input--about '
                placeholder='EMAIL'
                name='email'
              />
              <TextAreaField
                className='form--input--textarea'
                name='message'
                placeholder='MESSAGE'
                cols={20}
                rows={10}
              />
              <Button
                className='contact--us-btn'
                type='submit'
              >
                Send
              </Button>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
