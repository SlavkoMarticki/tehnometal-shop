import { BiCartAdd } from 'react-icons/bi';
import { FavIcon, StarsDisplay } from '../../../../components';
import useStore from '../../../../hooks/useStore';
import { formatPriceNum } from '../../../../utils';

interface IFavoriteProductItemProps {
  isFavorite: boolean;
  imgUrl: string;
  productTitle: string;
  rating: number;
  priceNum: number;
  currency: number;
  subCatId: string;
  prodId: string;
  handleCurrentFavoriteState: (item: string) => void;
  onProductSelect: () => void;
  onModalToggle: () => void;
  setActiveSubCatId: (value: string) => void;
}

export default function FavoriteProductItem(
  props: IFavoriteProductItemProps
): React.ReactElement {
  const {
    isFavorite,
    imgUrl,
    productTitle,
    rating,
    priceNum,
    currency,
    subCatId,
    prodId,
    handleCurrentFavoriteState,
    onModalToggle,
    setActiveSubCatId,
    onProductSelect
  } = props;

  const {
    cartStore: { checkItemAvailability },
    productStore: { setActiveProdId }
  } = useStore();
  return (
    <div className='card--item-wrap'>
      <div className='product--favorite cart__ef'>
        <FavIcon
          isFavorite={isFavorite}
          prodId={prodId}
          subCatId={subCatId}
          callback={() => handleCurrentFavoriteState(prodId)}
        />
      </div>
      <div
        className='card--item product--item'
        onClick={() => {
          setActiveProdId(prodId);
          onProductSelect();
          setActiveSubCatId(subCatId);
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
              <h2 className='product--title'>{productTitle}</h2>
              <StarsDisplay
                product
                starsNum={rating ?? 4}
              />
              <div className='flex justify-spaceBetween align-center'>
                <p className='product--price'>
                  {formatPriceNum(priceNum)} <span>{currency}</span>
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
}
