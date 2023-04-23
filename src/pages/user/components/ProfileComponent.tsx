import { formatPriceNum } from '../../../utils';
interface IData {
  name: string;
  status: string;
  amount: number;
  paymentMethod: string[];
  billingAddress: IDetails;
  shippingAddress: IDetails;
}

interface IDetails {
  city: string;
  country: string;
  line1: string;
  line2?: string;
  postal_code: string;
}

interface IProfileComponentProps {
  data: IData;
}

export default function ProfileComponent(
  props: IProfileComponentProps
): React.ReactElement {
  const { data } = props;
  return (
    <div className='info--modal'>
      <h1 className='cart--success-title-main uppercase'>
        Transaction details:
      </h1>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Name: </p>
        <p className='cart--success-info'>{data.name}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Status: </p>
        <p className='cart--success-info c-success'>{data.status}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Amount: </p>
        <p className='cart--success-info'>{formatPriceNum(data.amount)} RSD</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Payment Method: </p>
        <p className='cart--success-info uppercase'>{data.paymentMethod[0]}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Transaction Date: </p>
        {/*   <p className='cart--success-info'>{dateString}</p> */}
      </div>
      <div className='cart--success-item p-1 flex flex-column'>
        <p className='cart--success-label'>Billing Address: </p>
        <div className='cart--success-item-address '>
          <div className='flex'>
            <p className='cart--success-label-sml'>City: </p>
            <p className='cart--success-info-sml'>{data.billingAddress.city}</p>
          </div>
          <div className='flex'>
            <p className='cart--success-label-sml'>Country: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.country}
            </p>
          </div>
          <div className='flex'>
            <p className='cart--success-label-sml'>Address: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.line1}
            </p>
          </div>
          {data.billingAddress.line1 != null &&
            data.billingAddress.line1.length !== 0 && (
              <div className='flex'>
                <p className='cart--success-label-sml'>Appartmant: </p>
                <p className='cart--success-info-sml'>
                  {data.billingAddress.line2}
                </p>
              </div>
            )}
          <div className='flex'>
            <p className='cart--success-label-sml'>Postal Code: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.postal_code}
            </p>
          </div>
        </div>
      </div>
      {data.shippingAddress !== null && (
        <div className='cart--success-item flex flex-column'>
          <p className='cart--success-label'>Shipping Address: </p>
          <div className='cart--success-item-address '>
            <div className='flex'>
              <p className='cart--success-label-sml'>City: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.city}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Country: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.country}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Address: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.line1}
              </p>
            </div>
            {data.shippingAddress.line1 != null &&
              data.shippingAddress.line1.length !== 0 && (
                <div className='flex'>
                  <p className='cart--success-label-sml'>Appartmant: </p>
                  <p className='cart--success-info-sml'>
                    {data.shippingAddress.line2}
                  </p>
                </div>
              )}
            <div className='flex'>
              <p className='cart--success-label-sml'>Postal Code: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.postal_code}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
