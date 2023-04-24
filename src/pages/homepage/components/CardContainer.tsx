import React, { useState, useEffect } from 'react';
import Card from '../../../components/card/Card';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';
import { formatPriceNum } from '../../../utils';
import './styles/homeCards.css';
import { useAuthUser, useLoader } from '../../../hooks';
import { FavIcon, ProductModal, StarsDisplay } from '../../../components';
import { Modal } from '../../../portals';
import { Fade } from 'react-reveal';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { calculateReducedPrice } from '../../../utils/priceFormatter';

interface ICardData {
  id: number;
  title: string;
  imgUrl: string;
  stars: number;
  price: number;
}

interface CardsContainerProps {
  cardClassName?: string;
  isVisible?: boolean;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ cardClassName }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { setIsLoading } = useLoader();
  const {
    productStore: { getAllProducts, products, activeProdId, setActiveProdId },
    cartStore: { checkItemAvailability }
  } = useStore();
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await getAllProducts('-NSvA1c_8Km1jpnU9eJI', 20);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='card--container'>
      {products.map((cardItem: any, index: number) => (
        <Fade
          bottom
          delay={500}
          duration={1000}
          key={cardItem.id}
        >
          <div className='card--item-wrap'>
            <div className='product--favorite cart__ef'>
              <FavIcon
                isFavorite={cardItem.data.isFavorite}
                prodId={cardItem.id}
                subCatId={'-NSvA1c_8Km1jpnU9eJI'}
              />
            </div>

            <Card
              className={cardClassName}
              onClick={() => {
                setIsModalOpen(true);
                setActiveProdId(cardItem.id);
              }}
            >
              <div className='card--img-wrap'>
                <img
                  className='card--img'
                  src={cardItem.data.images[0]}
                  alt={`cardImg${index}`}
                />
                {cardItem.data.actionProcent > 0 && (
                  <div className='product--procent-wrap discount-home'>
                    <p>{cardItem.data.actionProcent}</p> <span>%</span>
                  </div>
                )}
              </div>
              <div className='card--title-wrap'>
                <h1 className='card--title'>{cardItem.data.productName}</h1>
              </div>
              <StarsDisplay starsNum={cardItem.data.rating} />
              <p className='card--price'>
                {/*  {formatPriceNum(cardItem.data.price)} <span>RSD</span> */}
                {cardItem.data.actionProcent > 0 ? (
                  <div className='flex flex-column'>
                    <p className='product--price product--price__real'>
                      {formatPriceNum(cardItem.data.price)}{' '}
                      <span>{cardItem.data.currency}</span>
                    </p>
                    <p className='product--price product--price__calculated'>
                      {calculateReducedPrice(
                        cardItem.data.price,
                        cardItem.data.actionProcent
                      )}{' '}
                      <span>{cardItem.data.currency}</span>
                    </p>
                  </div>
                ) : (
                  <p className='product--price'>
                    {formatPriceNum(cardItem.data.price)}{' '}
                    <span>{cardItem.data.currency}</span>
                  </p>
                )}
              </p>
              <div
                className='product--cart cart__ef'
                onClick={() => {
                  checkItemAvailability(
                    cardItem.data.subCategoryId,
                    cardItem.id
                  );
                }}
              >
                <BiCartAdd />
              </div>
            </Card>
          </div>
        </Fade>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className='modal'>
          <ProductModal
            subCatId={'-NSvA1c_8Km1jpnU9eJI'}
            prodId={activeProdId}
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default observer(CardsContainer);
