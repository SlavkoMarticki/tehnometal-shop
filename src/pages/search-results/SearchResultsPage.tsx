import React, { useEffect, useState } from 'react';
import './searchResults.css';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { ProductCard } from '../categories/cat-products/CategoryProductsPage';
import { ProductModal, StarsDisplay } from '../../components';
import { Modal } from '../../portals';
import { BiCartAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai';
import { formatPriceNum } from '../../utils';
import { useParams } from 'react-router-dom';
import { useLoader, useNotification, usePageTitle } from '../../hooks';
import { toJS } from 'mobx';
import EmptySearch from '../../common/assets/emptySearch.png';

export default observer(function SearchResultsPage(): React.ReactElement {
  const { searchId } = useParams();
  usePageTitle(searchId!.toUpperCase() ?? 'SEARCH');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { isLoading, setIsLoading } = useLoader();
  const { showErrorPopup } = useNotification();

  const {
    searchStore: {
      getDataBySearchQuery,
      searchResults,
      setActiveProd,
      activeProd,
      searchQuery
    },
    productStore: { setActiveProdId }
  } = useStore();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await getDataBySearchQuery();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        showErrorPopup('Something went wrong. Please try again later.');
        console.log(error);
      }
    };
    fetchData();
  }, [searchId]);

  console.log(toJS(favorites));

  console.log(searchResults);
  if (searchResults.length === 0) {
    return (
      <div>
        <div className='vector--top-right-bg'></div>
        <div className='vector--btm-left-bg'></div>
        <div className='flex flex-column search-title'>
          <h1 className='search--title'>YOUR SEARCH RESULTS FOR:</h1>
          <h3 className='search--sub-title lowercase'>{searchQuery}</h3>
        </div>
        <img
          src={EmptySearch}
          alt='emptySearch'
          className='justify-center'
        />
        <h2 className='search--title'>No RESULTS FOUND!</h2>
        <p className='search--sub-title '>Try searching again.</p>
      </div>
    );
  }

  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column search-title'>
          <h1 className='search--title'>YOUR SEARCH RESULTS FOR:</h1>
          <h3 className='search--sub-title lowercase'>{searchQuery}</h3>
        </div>
        <div className='flex flex-column categories-wrap'>
          <div className='card--group product--group products--grid'>
            {searchResults.map((prod: any) => {
              return (
                <>
                  <ProductCard
                    key={prod.id}
                    imgUrl={prod.images[0]}
                    name={prod.productName}
                    currency={prod.currency}
                    price={prod.price}
                    prodId={prod.prodId}
                    subCatId={prod.subCategoryId}
                    onProductSelect={() => {
                      setActiveProdId(prod.prodId);
                      setActiveProd(prod);
                    }}
                    isFavorite={prod.isFavorite}
                    onModalToggle={() => {
                      setIsModalOpen(true);
                    }}
                  />
                </>
              );
            })}
          </div>
          {activeProd !== null && (
            <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
              }}
            >
              <div className='modal'>
                <ProductModal
                  subCatId={activeProd.subCategoryId}
                  prodId={activeProd.prodId}
                  onClose={() => {
                    setIsModalOpen(false);
                    setActiveProd(null);
                  }}
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
});
