import { TbTrash } from 'react-icons/tb';
import { Button, StarsDisplay } from '../../../components';
import { formatPriceNum } from '../../../utils';
import { HiMinus, HiPlus } from 'react-icons/hi';
import useStore from '../../../hooks/useStore';
import { useMediaQuery } from '@material-ui/core';
import { observer } from 'mobx-react';
interface ICartItemProps {
  imgUrl: string;
  rating: number;
  name: string;
  quantity: number;
  price: number;
  currency: string;
  totalPrice: number;
  subCatId: string;
  prodId: string;
  id: string;
}
const CartItem = observer(function CartItem(
  props: ICartItemProps
): React.ReactElement {
  const isDesktopActive = useMediaQuery('(min-width: 840px)');
  const {
    imgUrl,
    rating,
    name,
    quantity,
    price,
    currency,
    totalPrice,
    subCatId,
    prodId,
    id
  } = props;
  const {
    cartStore: { checkItemAvailability, removeFromCart, decreaseQuantity }
  } = useStore();
  return (
    <div className='cart--items'>
      {isDesktopActive ? (
        <div className='flex cart--items-prod-details'>
          <div className='cart--item-img'>
            <img
              src={imgUrl}
              alt={`product-cart${imgUrl}`}
            />
          </div>
          <div className='cart--item-title'>
            <div className='flex flex-column'>
              <h1 className='cart--item-title-main'>{name}</h1>
              <StarsDisplay
                product
                starsNum={rating}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='cart--item-img'>
            <img
              src={imgUrl}
              alt={`product-cart${imgUrl}`}
            />
          </div>
          <div className='cart--item-title'>
            <div className='flex flex-column'>
              <h1 className='cart--item-title-main'>{name}</h1>
              <div className='cart--item-stars'>
                <StarsDisplay
                  product
                  starsNum={rating}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <div className='cart--item-quantity'>
        <Button
          className='cart--reduce-btn'
          onClick={(): void => {
            decreaseQuantity(id);
          }}
        >
          <HiMinus />
        </Button>
        <span className='cart--quantity-value'>{quantity}</span>
        <Button
          className='cart--add-btn'
          onClick={() => {
            checkItemAvailability(subCatId, prodId);
          }}
        >
          <HiPlus />
        </Button>
      </div>
      <div className='cart--item-prod-price'>
        <p className='cart--price'>
          {formatPriceNum(price)} <span>{currency}</span>
        </p>
      </div>
      <div className='cart--item-total-price'>
        <p className='cart--price'>
          {formatPriceNum(totalPrice)} <span>{currency}</span>
        </p>
      </div>
      <div className='cart--item-remove'>
        <Button
          className='cart--remove-btn'
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <TbTrash />
        </Button>
      </div>
    </div>
  );
});

export default CartItem;
