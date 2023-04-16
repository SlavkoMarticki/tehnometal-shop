import React from 'react';
import './finishCart.css';
import { useAuthUser, usePageTitle } from '../../../hooks';
import { observer } from 'mobx-react';
import useStore from '../../../hooks/useStore';
import { formatPriceNum } from '../../../utils';
import { Button } from '../../../components';
import { useNavigate } from 'react-router-dom';

export default observer(function FinishCartPage(): React.ReactElement {
  usePageTitle('Finish Cart');
  const {
    cartStore: { cart, totalPrice }
  } = useStore();

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
              {cart.map((c: any) => {
                return (
                  <CartItem
                    key={c.id}
                    name={c.productName}
                    total={c.prodTotalPrice}
                    currency={c.currency}
                    quantity={c.quantity}
                  />
                );
              })}
            </div>
            <div className='finish--cart-total'>
              <div className='flex justify-spaceBetween align-center'>
                <p className='finish--cart-total-label'>TOTAL : </p>
                <p className='finish--cart-total-price'>
                  {formatPriceNum(totalPrice)}
                  <span>RSD</span>
                </p>
              </div>
            </div>
          </div>

          <div className='finish--cart-form'>
            <SignInOrContinueOrder />
          </div>
        </div>
      </div>
    </div>
  );
});

interface ICartItemProps {
  name: string;
  quantity: number;
  total: number;
  currency: string;
}

const CartItem = (props: ICartItemProps): React.ReactElement => {
  const { name, quantity, total, currency } = props;

  return (
    <div className='finish--cart-item'>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>
        {formatPriceNum(total)}
        <em>{currency}</em>
      </p>
    </div>
  );
};

const SignInOrContinueOrder = (): React.ReactElement => {
  const { user } = useAuthUser();
  const navigate = useNavigate();

  if (user === null) {
    return (
      <div className='flex flex-column align-center gap-20'>
        <h1 className='uppercase finish-cart-title'>You need more items?</h1>
        <Button
          className='finish--cart-login-btn uppercase cursor-pointer'
          onClick={() => {
            navigate('/categories');
          }}
        >
          Go order some more!!
        </Button>
        <span className='color-w uppercase'>or</span>
        <p className='uppercase  cursor-pointer color-w'>Continue to payment</p>
      </div>
    );
  }

  return (
    <div className='flex flex-column align-center gap-20'>
      <h1 className='uppercase finish-cart-title'>Do you have an account?</h1>

      <Button
        className='finish--cart-login-btn uppercase cursor-pointer'
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        Login
      </Button>
      <span className='color-w uppercase'>Or</span>
      <p className='uppercase color-w'>Continue without account </p>
    </div>
  );
};
