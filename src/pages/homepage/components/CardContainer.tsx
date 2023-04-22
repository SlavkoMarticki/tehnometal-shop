import React, { useState } from 'react';
import Card from '../../../components/card/Card';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';
import { formatPriceNum } from '../../../utils';
import './styles/homeCards.css';
import { useAuthUser } from '../../../hooks';
import { ProductModal, StarsDisplay } from '../../../components';
import { Modal } from '../../../portals';
import { Fade } from 'react-reveal';

interface ICardData {
  id: number;
  title: string;
  imgUrl: string;
  stars: number;
  price: number;
}

interface CardsContainerProps {
  cardsData: ICardData[];
  cardClassName?: string;
  isVisible?: boolean;
}

const CardsContainer: React.FC<CardsContainerProps> = ({
  cardsData,
  cardClassName
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { user } = useAuthUser();

  return (
    <div className='card--container'>
      {cardsData.map((cardItem, index) => (
        <Fade
          bottom
          delay={500}
          duration={1000}
          key={cardItem.id}
        >
          <Card
            className={cardClassName}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {user != null ? (
              <div className='card--favorite'>
                <AiOutlineHeart />
              </div>
            ) : null}
            <div className='card--img-wrap'>
              <img
                className='card--img'
                src={cardItem.imgUrl}
                alt={`cardImg${index}`}
              />
            </div>
            <div className='card--title-wrap'>
              <h1 className='card--title'>{cardItem.title}</h1>
            </div>
            <StarsDisplay starsNum={cardItem.stars} />
            <p className='card--price'>
              {formatPriceNum(cardItem.price)} <span>RSD</span>
            </p>
            <div className='card--cart'>
              <BiCartAdd />
            </div>
          </Card>
        </Fade>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <ProductModal
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default CardsContainer;
