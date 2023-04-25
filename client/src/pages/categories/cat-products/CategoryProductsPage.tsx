import React, { useEffect, useState } from 'react';
import './categoryProductPage.css';
import { Pager, ProductModal } from '../../../components';
import { useLoader, usePageTitle } from '../../../hooks';
import useStore from '../../../hooks/useStore';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Modal } from '../../../portals';
import { IoMdArrowBack } from 'react-icons/io';
import { ProductCard } from './components';
import { toJS } from 'mobx';

export default observer(function CategoryProductsPage(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { state } = useLocation();
  usePageTitle(state.toUpperCase());

  const navigate = useNavigate();
  const { subCategoryId } = useParams();
  const {
    productStore: {
      getAllProducts,
      products,
      setProducts,
      activeProdId,
      setActiveProdId,
      getAllShallowProducts
    },
    paginationStore: { page, setPage, totalPages, unmountPaginationOnUnload }
  } = useStore();

  const { setIsLoading } = useLoader();

  useEffect(() => {
    // additional workaround firebase db pagination
    const fetchData = async (): Promise<void> => {
      try {
        await getAllShallowProducts(subCategoryId!);
      } catch (error) {
        console.log('Error while getting shallow products', error);
      }
    };
    fetchData();

    return () => {
      unmountPaginationOnUnload();
    }; // clean data
  }, []);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await getAllProducts(subCategoryId!);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      setProducts([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleChange = (event: any, value: number): void => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='full'>
        <div className='vector--top-right-bg'></div>
        <div className='vector--btm-left-bg'></div>
        <div className='categories--container full-height'>
          <h1 className='categories--title s-cat--title pad-b-2rem uppercase flex justify-center align-center gap-20'>
            <IoMdArrowBack
              onClick={() => {
                navigate(-1);
              }}
              className='cursor-pointer'
            />
            {state}
          </h1>
          <div className='flex flex-column categories-wrap'>
            <div className='card--group product--group products--grid'>
              {products.map((prod: any) => {
                return (
                  <>
                    <ProductCard
                      key={prod.id}
                      imgUrl={prod.data.images[0]}
                      name={prod.data.productName}
                      currency={prod.data.currency}
                      price={prod.data.price}
                      prodId={prod.id}
                      subCatId={prod.data.subCategoryId}
                      onProductSelect={() => {
                        setActiveProdId(prod.id);
                      }}
                      isFavorite={prod.data.isFavorite}
                      onModalToggle={() => {
                        setIsModalOpen(true);
                      }}
                      actionProcent={prod.data.actionProcent}
                    />
                  </>
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
                    subCatId={subCategoryId}
                    prodId={activeProdId}
                    onClose={() => {
                      setIsModalOpen(false);
                    }}
                  />
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <Pager
          handleChange={handleChange}
          count={totalPages}
          page={page}
        />
      </div>
    </>
  );
});
