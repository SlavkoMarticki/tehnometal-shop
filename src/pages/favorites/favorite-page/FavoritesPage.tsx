import React, { useEffect, useState } from 'react';
import './favoritePage.css';
import { Button, HoverableIcon, StarsDisplay } from '../../../components';
import { formatPriceNum, transferObjectIntoArray } from '../../../utils';
import { BiCartAdd } from 'react-icons/bi';
import emptyFaforitesPhoto from '../../../common/assets/emptyFavoritesPhoto.png';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { useAuthUser } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

export default observer(function FavoritesPage(): React.ReactElement {
  const [favoritesList, setFavoritesList] = useState([]);
  const { user } = useAuthUser();
  const {
    productStore: { getFavoriteProductsByIds, getFavoriteProductsByUser }
  } = useStore();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        // fetch favorites by user first
        const favoritesResponse = await getFavoriteProductsByUser(user!.uid);
        console.log(favoritesResponse);
        const response = await getFavoriteProductsByIds(
          transferObjectIntoArray(favoritesResponse)
        );
        if (response.success) {
          setFavoritesList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      setFavoritesList([]);
    };
    /* eslint-disable-next-line */
  }, []);

  const handleCurrentFavoriteState = (prodId: string): void => {
    const newFavoritesList = favoritesList.filter(
      (item: any) => prodId !== item.prodId
    );
    setFavoritesList(newFavoritesList);
  };

  if (favoritesList.length === 0) {
    return <EmptyFavorites />;
  }

  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <h1 className='categories--title s-cat--title pad-b-2rem'>Favorites</h1>
        <div className='flex flex-column categories-wrap'>
          <div className='card--group product--group'>
            {favoritesList.map((item: any) => {
              console.log(item);
              return (
                <FavoriteProductItem
                  key={item.prodId}
                  currency={item.currency}
                  imgUrl={item.images[0]}
                  isFavorite={item.isFavorite}
                  priceNum={item.price}
                  productTitle={item.productName}
                  rating={item.rating}
                  subCatId={item.subCategoryId}
                  prodId={item.prodId}
                  handleCurrentFavoriteState={handleCurrentFavoriteState}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

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
}

const FavoriteProductItem = (
  props: IFavoriteProductItemProps
): React.ReactElement => {
  const {
    isFavorite,
    imgUrl,
    productTitle,
    rating,
    priceNum,
    currency,
    subCatId,
    prodId,
    handleCurrentFavoriteState
  } = props;

  const {
    productStore: { toggleFavoriteState }
  } = useStore();
  return (
    <div className='card--item-wrap'>
      <div className='product--favorite cart__ef'>
        {isFavorite ? (
          <HoverableIcon
            onClick={() => {
              toggleFavoriteState(subCatId, prodId, !isFavorite);
              handleCurrentFavoriteState(prodId);
            }}
            regularIcon={<AiFillHeart />}
            hoverIcon={<AiOutlineHeart />}
          />
        ) : (
          <HoverableIcon
            onClick={() => {
              toggleFavoriteState(subCatId, prodId, !isFavorite);
            }}
            regularIcon={<AiOutlineHeart />}
            hoverIcon={<AiFillHeart />}
          />
        )}
      </div>
      <div className='card--item product--item'>
        <div className='flex product'>
          <div className='product--img'>
            <img
              className='product--img-side'
              src={imgUrl}
              alt='abdab'
            />
          </div>
          <div className='flex flex-column product--content'>
            <h2 className='product--title'>{productTitle}</h2>
            <StarsDisplay
              product
              starsNum={rating}
            />
            <div className='flex justify-spaceBetween align-center'>
              <p className='product--price'>
                {formatPriceNum(priceNum)} <span>{currency}</span>
              </p>
              <div className='product--cart'>
                <BiCartAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyFavorites = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='favourite--empty flex justify-center align-center flex-column'>
        <img
          className='favourite--empty-photo'
          src={emptyFaforitesPhoto}
          alt='emptyFavoritesPhoto'
        />
        <h1 className=' favourite--empty-text color-w uppercase'>
          No favorites yet!
        </h1>

        <Button
          type='button'
          className='favourite--btn'
          onClick={() => {
            console.log('clicked');
            navigate('/categories');
          }}
        >
          See what we have to offer
        </Button>
      </div>
    </div>
  );
};
