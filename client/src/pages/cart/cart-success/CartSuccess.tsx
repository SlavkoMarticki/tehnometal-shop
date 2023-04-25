import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './cartSuccess.css';
import { formatPriceNum } from '../../../utils';
import { Button } from '../../../components';
import { useAuthUser, useLoader, usePageTitle } from '../../../hooks';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { sendOrderConfirmationEmail } from '../../../common/email/emailServiceConfig';

interface SendOrderConfirmationEmailParams {
  email_reply: string;
  userName: string;
  totalAmount: number;
  order_id: string;
  shippingAddress_city: string;
  shippingAddress_country: string;
  shippingAddress_line1: string;
  shippingAddress_postal: string;
  billingAddress_city: string;
  billingAddress_country: string;
  billingAddress_line1: string;
  billingAddress_postal: string;
}

export default observer(function CartSuccess(): React.ReactElement | null {
  usePageTitle('Successful Cart Details');
  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const location = useLocation();
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const { setIsLoading } = useLoader();
  const {
    cartStore: { savePurchaseOnUser, findIfOrderAlreadyExists, clearCart },
    userStore: { getUserById }
  } = useStore();

  // check if location object has search params
  const hasSearchParams = location.search !== '';

  // guard this route without search params
  if (!hasSearchParams) {
    // navigate to home if there is no search params
    navigate('/', { replace: true });
  }

  // get session id from search params
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://tehnometal-shop.vercel.app/payment-data?session_id=${sessionId}`
        );
        const data = await response.data;
        const additionalData = {
          purchaseQuantity: 1,
          purchasePrice: data.amount
        };

        // if purchase is successful, remove cart from store
        if (data != null) {
          if (user?.uid != null) {
            await fetch(
              `${process.env.REACT_APP_BASE_DB_URL!}users/${
                user.uid
              }/cart.json`,
              {
                method: 'DELETE'
              }
            );
          }
          clearCart();
        }
        const emailInfo: SendOrderConfirmationEmailParams = {
          order_id: data.id,
          email_reply: data.email,
          userName: data.name,
          totalAmount: data.amount,
          shippingAddress_city: data.shippingAddress.city,
          shippingAddress_country: data.shippingAddress.country,
          shippingAddress_line1: data.shippingAddress.line1,
          shippingAddress_postal: data.shippingAddress.postal_code,
          billingAddress_city: data.billingAddress.city,
          billingAddress_country: data.billingAddress.country,
          billingAddress_line1: data.billingAddress.line1,
          billingAddress_postal: data.billingAddress.postal_code
        };

        const isOrderAlreadyPlaced = await findIfOrderAlreadyExists(data.id);

        await getUserById();
        // if order already exists in db, redirect to home page

        if (isOrderAlreadyPlaced?.success) {
          navigate('/', { replace: true });
        } else {
          if (user != null && typeof user !== 'string') {
            // save purchase info
            await savePurchaseOnUser(data, data.id, additionalData);
          } else {
            sendOrderConfirmationEmail(emailInfo);
            navigate('/', { replace: true });
          }
        }
        sendOrderConfirmationEmail(emailInfo);

        // save order on user if user is signed in

        setPaymentInfo(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        navigate('/cart');
      }
    };

    fetchData();
    /* eslint-disable-next-line */
  }, []);

  if (paymentInfo == null) {
    return <div className='full'></div>;
  }

  const date = new Date(paymentInfo.date);
  const dateString = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <div className='full flex justify-center align-center'>
      <div className='cart--success-container'>
        <h1 className='cart--success-title-main uppercase'>
          Transaction details:
        </h1>
        <div className='cart--success-item flex'>
          <p className='cart--success-label'>Name: </p>
          <p className='cart--success-info'>{paymentInfo.name}</p>
        </div>
        <div className='cart--success-item flex'>
          <p className='cart--success-label'>Status: </p>
          <p className='cart--success-info c-success'>{paymentInfo.status}</p>
        </div>
        <div className='cart--success-item flex'>
          <p className='cart--success-label'>Amount: </p>
          <p className='cart--success-info'>
            {formatPriceNum(paymentInfo.amount)} RSD
          </p>
        </div>
        <div className='cart--success-item flex'>
          <p className='cart--success-label'>Payment Method: </p>
          <p className='cart--success-info uppercase'>
            {paymentInfo.paymentMethod[0]}
          </p>
        </div>
        <div className='cart--success-item flex'>
          <p className='cart--success-label'>Transaction Date: </p>
          <p className='cart--success-info'>{dateString}</p>
        </div>
        <div className='cart--success-item p-1 flex flex-column'>
          <p className='cart--success-label'>Billing Address: </p>
          <div className='cart--success-item-address '>
            <div className='flex'>
              <p className='cart--success-label-sml'>City: </p>
              <p className='cart--success-info-sml'>
                {paymentInfo.billingAddress.city}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Country: </p>
              <p className='cart--success-info-sml'>
                {paymentInfo.billingAddress.country}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Address: </p>
              <p className='cart--success-info-sml'>
                {paymentInfo.billingAddress.line1}
              </p>
            </div>
            {paymentInfo.billingAddress.line1 != null &&
              paymentInfo.billingAddress.line1.length !== 0 && (
                <div className='flex'>
                  <p className='cart--success-label-sml'>Appartmant: </p>
                  <p className='cart--success-info-sml'>
                    {paymentInfo.billingAddress.line2}
                  </p>
                </div>
              )}
            <div className='flex'>
              <p className='cart--success-label-sml'>Postal Code: </p>
              <p className='cart--success-info-sml'>
                {paymentInfo.billingAddress.postal_code}
              </p>
            </div>
          </div>
        </div>
        {paymentInfo.shippingAddress !== null && (
          <div className='cart--success-item flex flex-column'>
            <p className='cart--success-label'>Shipping Address: </p>
            <div className='cart--success-item-address '>
              <div className='flex'>
                <p className='cart--success-label-sml'>City: </p>
                <p className='cart--success-info-sml'>
                  {paymentInfo.shippingAddress.city}
                </p>
              </div>
              <div className='flex'>
                <p className='cart--success-label-sml'>Country: </p>
                <p className='cart--success-info-sml'>
                  {paymentInfo.shippingAddress.country}
                </p>
              </div>
              <div className='flex'>
                <p className='cart--success-label-sml'>Address: </p>
                <p className='cart--success-info-sml'>
                  {paymentInfo.shippingAddress.line1}
                </p>
              </div>
              {paymentInfo.shippingAddress.line1 != null &&
                paymentInfo.shippingAddress.line1.length !== 0 && (
                  <div className='flex'>
                    <p className='cart--success-label-sml'>Appartmant: </p>
                    <p className='cart--success-info-sml'>
                      {paymentInfo.shippingAddress.line2}
                    </p>
                  </div>
                )}
              <div className='flex'>
                <p className='cart--success-label-sml'>Postal Code: </p>
                <p className='cart--success-info-sml'>
                  {paymentInfo.shippingAddress.postal_code}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className='cart--success-btns flex justify-center align-center gap-20 '>
          <Button
            className='cart--success-btn'
            onClick={() => {
              navigate('/', { replace: true });
            }}
          >
            Home
          </Button>
          <Button
            className='cart--success-btn'
            onClick={() => {
              navigate('/categories', { replace: true });
            }}
          >
            Order More
          </Button>
        </div>
      </div>
    </div>
  );
});
