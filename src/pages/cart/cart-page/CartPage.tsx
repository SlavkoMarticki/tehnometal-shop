import { Button } from '../../../components';
import { usePageTitle } from '../../../hooks';
import './cart.css';
import { observer } from 'mobx-react';
import useStore from '../../../hooks/useStore';
import { formatPriceNum } from '../../../utils';
import CartItem from './CartItem';
import { useNavigate } from 'react-router';

export default observer(function CartPage(): React.ReactElement {
  usePageTitle('Cart');

  const {
    cartStore: { cart, totalPrice }
  } = useStore();

  const navigate = useNavigate();

  return (
    <div className='cart full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='cart--container'>
        <div className='cart--wrapper'>
          <h1 className='cart--title'>Cart</h1>
          <div className='cart--labels'>
            <h1 className='cart--labels-title cart--labels__product'>
              Product details
            </h1>
            <h1 className='cart--labels-title cart--labels__quantity'>
              Quantity
            </h1>
            <h1 className='cart--labels-title cart--labels__price'>Price</h1>
            <h1 className='cart--labels-title cart--labels__total'>total</h1>
            <span className='cart--labels-title-empty'>&nbsp;</span>
          </div>
          <div className='full-height'>
            {cart.map((c: any) => {
              return (
                <CartItem
                  key={c.id}
                  id={c.id}
                  imgUrl={c.images[0]}
                  name={c.productName}
                  rating={c.rating}
                  quantity={c.quantity}
                  price={c.price}
                  currency={c.currency}
                  totalPrice={c.prodTotalPrice}
                  subCatId={c.subCategoryId}
                  prodId={c.prodId}
                />
              );
            })}
          </div>
          <div className='cart--price-wrap'>
            <div className='cart--price-total'>
              <h1 className='cart--price-total-label'>TOTAL:</h1>
              <p className='cart--price-total-num'>
                {formatPriceNum(totalPrice)}{' '}
                <span>
                  <em>RSD</em>
                </span>
              </p>
            </div>
            <Button className='cart--finish-btn' onClick={() => {navigate("/cart/finish-cart")}}>FINISH PURCHASE</Button>
          </div>
        </div>
      </div>
    </div>
  );
});
