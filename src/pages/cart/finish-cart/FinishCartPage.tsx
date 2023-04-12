import React from 'react';
import './finishCart.css';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, FormInputField } from '../../../components';
import { usePageTitle } from '../../../hooks';

export default function FinishCartPage(): React.ReactElement {
  const methods = useForm({ mode: 'onChange' });
  usePageTitle('Finish Cart');

  return (
    <div className='finish--cart full'>
      <div className='flex flex-column cart--container finish--cart'>
        <h1 className='finish--cart-main-title'>Finish purchase</h1>
        <div className='flex finish--cart-group'>
          <div className='finish--cart-details'>
            <div className='finish--cart-labels'>
              <h1>Product</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
            </div>
            <div className='finish--cart-items'>
              <div className='finish--cart-item'>
                <p>Washing machine</p>
                <p>2</p>
                <p>
                  59 999 <em>RSD</em>
                </p>
              </div>
              <div className='finish--cart-item'>
                <p>Washing machine</p>
                <p>2</p>
                <p>
                  59 999 <em>RSD</em>
                </p>
              </div>
              <div className='finish--cart-item'>
                <p>Washing machine</p>
                <p>2</p>
                <p>
                  59 999 <em>RSD</em>
                </p>
              </div>
              <div className='finish--cart-item'>
                <p>Washing machine</p>
                <p>2</p>
                <p>
                  59 999 <em>RSD</em>
                </p>
              </div>
              <div className='finish--cart-item'>
                <p>Washing machine</p>
                <p>2</p>
                <p>
                  59 999 <em>RSD</em>
                </p>
              </div>
            </div>

            <div className='finish--cart-total'>
              <div className='flex justify-spaceBetween align-center'>
                <p className='finish--cart-total-label'>TOTAL : </p>
                <p className='finish--cart-total-price'>
                  129 999<span>RSD</span>
                </p>
              </div>
            </div>
          </div>

          <div className='finish--cart-form'>
            <FormProvider {...methods}>
              <form className='form finish--cart-form-wrap'>
                <FormInputField
                  name='address'
                  placeholder='Address'
                  className='form--input finish--cart-input'
                />
                <FormInputField
                  name='city'
                  placeholder='City'
                  className='form--input finish--cart-input'
                />
                <FormInputField
                  name='country'
                  placeholder='Country'
                  className='form--input finish--cart-input'
                />
                <FormInputField
                  name='zipCode'
                  placeholder='ZIP Code'
                  className='form--input finish--cart-input'
                />

                <Button className='finish--cart-btn'>Buy</Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
