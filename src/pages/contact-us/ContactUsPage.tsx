import React from 'react';
import './contactUs.css';
import { useNotification, usePageTitle } from '../../hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInputField, TextAreaField } from '../../components/inputs';
import { Button } from '../../components';
import { sendSupportEmail } from '../../common/email/emailServiceConfig';

export default function ContactUsPage(): React.ReactElement {
  usePageTitle('Contact Us');
  const methods = useForm<any>({ mode: 'onChange' });

  const { handleSubmit, reset } = methods;

  const { showSuccessPopup } = useNotification();

  const handleSubmitData = (data: any): void => {
    sendSupportEmail('#contact-form');
    reset();
    showSuccessPopup(
      "Your message is sent to our support team. We'll be back with you soon."
    );
  };

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
              <form
                onSubmit={handleSubmit(handleSubmitData)}
                id='contact-form'
                className='flex flex-column gap-20'
              >
                <FormInputField
                  className='form--input--about place'
                  placeholder='Username'
                  name='name'
                />
                <FormInputField
                  className='form--input--about place'
                  placeholder='Your email'
                  name='send_to'
                  type='email'
                />
                <TextAreaField
                  className='form--input--textarea'
                  name='message'
                  placeholder='MESSAGE'
                  cols={20}
                  rows={10}
                />
                <div className='btn-contact-submit'>
                  <Button
                    className='contact--us-btn'
                    type='submit'
                  >
                    Send
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
