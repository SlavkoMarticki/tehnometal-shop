import React, { useEffect, useState } from 'react';
import './searchResults.css';
import { observer } from 'mobx-react';
import useStore from '../../hooks/useStore';
import { Pager, ProductModal } from '../../components';
import { Modal } from '../../portals';
import { useParams } from 'react-router-dom';
import { useLoader, useNotification, usePageTitle } from '../../hooks';
import EmptySearchIcon from '../../common/assets/emptySearch.png';
import { ProductCard } from '../categories/cat-products/components';

export default observer(function SearchResultsPage(): React.ReactElement {
  const { searchId } = useParams();
  usePageTitle(searchId!.toUpperCase() ?? 'SEARCH');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setIsLoading } = useLoader();
  const { showErrorPopup } = useNotification();

  const {
    searchStore: {
      getDataBySearchQuery,
      searchResults,
      setActiveProd,
      activeProd,
      searchQuery,
      setSearchResultsData,
      setIsEmpty,
      isEmpty,
      page,
      setPage,
      paginatedList
    },
    productStore: { setActiveProdId }
  } = useStore();
  const { isLoading } = useLoader();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await getDataBySearchQuery();
        if (response.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(true);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        showErrorPopup('Something went wrong. Please try again later.');
        console.log(error);
      }
    };
    fetchData();
    return () => {
      setSearchResultsData([]);
      setIsEmpty(false);
    };

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [searchId]);

  const handleChange = (event: any, value: number): void => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (paginatedList.length === 0 && !isLoading && isEmpty) {
    return <EmptySearch searchQuery={searchQuery} />;
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
            {paginatedList.map((prod: any) => {
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
                    actionProcent={prod.actionProcent}
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
      {!isLoading && isEmpty && (
        <Pager
          handleChange={handleChange}
          count={Math.ceil(searchResults.length / 10)}
          page={page}
        />
      )}
    </div>
  );
});

interface IEmptySearchProps {
  searchQuery: string;
}

const EmptySearch = (props: IEmptySearchProps): React.ReactElement => {
  const { searchQuery } = props;
  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='flex flex-column justify-center align-center search--page'>
        <h1 className='search--title'>YOUR SEARCH RESULTS FOR:</h1>
        <h3 className='search--sub-title lowercase'>{searchQuery}</h3>

        <img
          src={EmptySearchIcon}
          alt='emptySearch'
          className='img-search-icon'
        />
        <h2 className='search--title'>No RESULTS FOUND!</h2>
        <p className='search--sub-title '>Try searching again.</p>
      </div>
    </div>
  );
};
