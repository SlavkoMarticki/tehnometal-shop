import React from 'react';
import './finishCart.css';
import { useAuthUser, useLoader, usePageTitle } from '../../../hooks';
import { observer } from 'mobx-react';
import useStore from '../../../hooks/useStore';
import { formatPriceNum } from '../../../utils';
import { Button } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export default observer(function FinishCartPage(): React.ReactElement {
  usePageTitle('Finish Cart');
  const { setIsLoading } = useLoader();
  const {
    cartStore: { cart, totalPrice }
  } = useStore();

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async (): Promise<void> => {
    setIsLoading(true);
    const lineItems = cart.map((item: any): any => {
      return {
        price_data: {
          currency: 'RSD',
          product_data: {
            name: item.productName,
            images: [item.images[0]]
          },
          unit_amount: Math.round(item.price * 100) // price needs to be multiplied by 100
        },
        quantity: item.quantity
      };
    });
    lineItems.push({
      price_data: {
        currency: 'RSD',
        product_data: {
          name: 'Shipping',
          description: 'Shipping cost (not included in total)'
        },
        unit_amount: 1000 * 100 // price needs to be multiplied by 100
      },
      quantity: 1
    });
    const { data } = await axios.post('https://tehnometal-shop-2ga8-r0y5ildcm-dragansub.vercel.app/checkout', {
      lineItems
    });

    const stripe = await stripePromise;
    await stripe!.redirectToCheckout({ sessionId: data.id });
    setIsLoading(false);
  };

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
            <SignInOrContinueOrder handleCheckout={handleCheckout} />
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

const SignInOrContinueOrder = ({
  handleCheckout
}: {
  handleCheckout: () => void;
}): React.ReactElement => {
  const { user } = useAuthUser();
  const navigate = useNavigate();

  if (user !== null) {
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
        <Button
          className='uppercase checkout-btn cursor-pointer color-w'
          onClick={handleCheckout}
        >
          Continue to payment
        </Button>
      </div>
    );
  }

  return (
    <div className='flex flex-column align-center gap-20'>
      <h1 className='uppercase finish-cart-title'>Do you have an account?</h1>

      <Button
        className='finish--cart-login-btn uppercase cursor-pointer'
        onClick={() => {
          navigate('/auth/login?returnUrl=/cart/finish-cart');
        }}
      >
        Login
      </Button>
      <span className='color-w uppercase'>Or</span>
      <p
        className='uppercase checkout-btn cursor-pointer color-w'
        onClick={handleCheckout}
      >
        Continue without account{' '}
      </p>
    </div>
  );
};
