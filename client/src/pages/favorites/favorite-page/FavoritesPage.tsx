import React, { useEffect, useState } from 'react';
import './favoritePage.css';
import { ProductModal } from '../../../components';
import { transferObjectIntoArray } from '../../../utils';

import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { useLoader, useNotification, usePageTitle } from '../../../hooks';
import { Modal } from '../../../portals';
import { FavoriteProductItem, EmptyFavoritePage } from './components';

export default observer(function FavoritesPage(): React.ReactElement {
  usePageTitle('Favorites');
  const [favoritesList, setFavoritesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeSubCatId, setActiveSubCatId] = useState<string>('');

  const {
    productStore: {
      getFavoriteProductsByIds,
      getFavoriteProductsByUser,
      setActiveProdId,
      activeProdId
    },

    favoritesStore: { isEmpty, setIsEmpty }
  } = useStore();
  const { isLoading, setIsLoading } = useLoader();
  const { showErrorPopup } = useNotification();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        // fetch favorites by user first
        setIsLoading(true);
        const userFromLs = localStorage.getItem('loginUser');
        let favoriteResponse;
        if (userFromLs != null) {
          const { uid } = JSON.parse(userFromLs);
          favoriteResponse = await getFavoriteProductsByUser(uid);
        }

        if (favoriteResponse != null) {
          const response = await getFavoriteProductsByIds(
            transferObjectIntoArray(favoriteResponse)
          );
          if (response.success) {
            setFavoritesList(response.data);
          }
        } else {
          setIsEmpty(true);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        showErrorPopup('Something went wrong while getting favorites.');
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
    if (newFavoritesList.length === 0) {
      setIsEmpty(true);
    }
    setFavoritesList(newFavoritesList);
  };

  if (favoritesList.length === 0 && !isLoading && isEmpty) {
    return <EmptyFavoritePage />;
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
                  actionProcent={item.actionProcent}
                  handleCurrentFavoriteState={handleCurrentFavoriteState}
                  onProductSelect={() => {
                    setActiveProdId(item.prodId);
                  }}
                  onModalToggle={() => {
                    setIsModalOpen(true);
                  }}
                  setActiveSubCatId={setActiveSubCatId}
                />
              );
            })}

            <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              }}
            >
              <div className='modal'>
                <ProductModal
                  subCatId={activeSubCatId}
                  prodId={activeProdId}
                  onClose={() => {
                    setIsModalOpen(false);
                    setActiveSubCatId('');
                  }}
                  callback={() => {
                    handleCurrentFavoriteState(activeProdId);
                    setIsModalOpen(false);
                  }}
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
});
