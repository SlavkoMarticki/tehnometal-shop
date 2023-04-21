import React, { useEffect, useState } from 'react';
import './searchResults.css';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { ProductCard } from '../categories/cat-products/CategoryProductsPage';
import { StarsDisplay } from '../../components';
import { Modal } from '../../portals';
import { BiCartAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai';
import { formatPriceNum } from '../../utils';
import { useParams } from 'react-router-dom';
import { usePageTitle } from '../../hooks';
import { toJS } from 'mobx';

export default observer(function SearchResultsPage(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { searchId } = useParams();
  usePageTitle(searchId!.toUpperCase() ?? 'SEARCH');

  const {
    searchStore: {
      getDataBySearchQuery,
      unmountSearchQuery,
      searchResults,
      setActiveProd,
      activeProd,
      searchQuery
    },
    productStore: { setActiveProdId },
    favoritesStore: { favorites }
  } = useStore();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await getDataBySearchQuery();
    };
    fetchData();
  }, [searchId]);

  console.log(toJS(favorites));

  console.log(searchResults);
  if (searchResults == null) {
    return <div></div>;
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
          {/*  <CardsContainer
            cardsData={searchResults[0]}
            cardClassName='card--wrap search--wrap'
          /> */}
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
                <SearchProductModal
                  subCatId={activeProd.subCategoryId}
                  prodId={activeProd.prodId}
                  onClose={() => {
                    setIsModalOpen(false);
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

interface ISearchProductModalProps {
  onClose: () => void;
  subCatId: string;
  prodId: string;
}

const SearchProductModal = (
  props: ISearchProductModalProps
): React.ReactElement => {
  const { onClose, subCatId, prodId } = props;

  const {
    cartStore: { checkItemAvailability },
    searchStore: { activeProd }
  } = useStore();
  return (
    <div className='products-details__modal'>
      <div className='product--m-container'>
        <>
          <AiOutlineCloseCircle
            className='exit--modal'
            onClick={onClose}
          />
          <div className='product--m-wrap'>
            <div className='product--m-img-group'>
              <img
                className='product--m-main-img'
                src={activeProd.images[0]}
                alt='main-img'
              />
              <img
                className='product--m-left-side-img'
                src={activeProd.images[1]}
                alt='left side img'
              />
              <img
                className='product--m-right-side-img'
                src={activeProd.images[2]}
                alt='right side img'
              />
            </div>
            <div className='product--m-content-group'>
              <div className='flex justify-spaceBetween'>
                <h1 className='product--m-content-title'>
                  {activeProd.productName}
                </h1>
                <AiOutlineHeart className='product--m-content-favorite' />
              </div>
              <StarsDisplay
                className='product--m-stars'
                starsNum={activeProd?.rating}
                product
              />
              <div className='product--m-category flex'>
                <em className='product--m-label'>Category: </em>
                <p className='product--m-value uppercase'>
                  {activeProd.category}
                </p>
              </div>
              <div className='product--m-category flex'>
                <em className='product--m-label'>Brand: </em>
                <p className='product--m-value uppercase'>{activeProd.brand}</p>
              </div>
              <div className='product--m-description flex flex-column'>
                <em className='product--m-label'>Description: </em>
                <p className='product--m-desc-content'>
                  {activeProd.description}
                </p>
              </div>
              <div className='product--m-modal-order flex justify-spaceBetween'>
                <div className='product--m-modal-price'>
                  {formatPriceNum(activeProd.price)}{' '}
                  <span>{activeProd.currency}</span>
                </div>
                <BiCartAdd
                  className='product--m-cart-icon cart__ef'
                  onClick={(e) => {
                    e.preventDefault();
                    checkItemAvailability(subCatId, prodId);
                  }}
                />
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
