import { observer } from 'mobx-react';
import useStore from '../../../../hooks/useStore';
import { FavIcon, StarsDisplay } from '../../../../components';
import { formatPriceNum } from '../../../../utils';
import { BiCartAdd } from 'react-icons/bi';

interface IProductCardProps {
  imgUrl: string;
  name: string;
  numOfStars?: number;
  currency: string;
  price: number;
  onModalToggle: () => void;
  onProductSelect: () => void;
  prodId: string;
  subCatId: string;
  isFavorite: boolean;
}

export const ProductCard = observer(function ProductCard(
  props: IProductCardProps
): React.ReactElement {
  const {
    productStore: { setActiveProdId },
    cartStore: { checkItemAvailability }
  } = useStore();

  const {
    imgUrl,
    name,
    numOfStars,
    price,
    currency,
    onModalToggle,
    onProductSelect,
    prodId,
    subCatId,
    isFavorite
  } = props;
  return (
    <div className='card--item-wrap'>
      <div className='product--favorite cart__ef'>
        <FavIcon
          isFavorite={isFavorite}
          prodId={prodId}
          subCatId={subCatId}
        />
      </div>
      <div
        className='card--item product--item'
        onClick={() => {
          setActiveProdId(prodId);
          onProductSelect();
          onModalToggle();
        }}
      >
        <div className='flex product'>
          <div className='product-hov-ef flex'>
            <div className='product--img'>
              <img
                className='product--img-side'
                src={imgUrl}
                alt={`img-url${imgUrl}`}
              />
            </div>
            <div className='flex flex-column product--content'>
              <h2 className='product--title'>{name}</h2>
              <StarsDisplay
                product
                starsNum={numOfStars ?? 4}
              />
              <div className='flex justify-spaceBetween align-center'>
                <p className='product--price'>
                  {formatPriceNum(price)} <span>{currency}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='product--cart cart__ef'
        onClick={() => {
          checkItemAvailability(subCatId, prodId);
        }}
      >
        <BiCartAdd />
      </div>
    </div>
  );
});
