import React from 'react';
import Card from '../../../components/card/Card';
import { AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { formatPriceNum } from '../../../utils';
import "./styles/homeCards.css";
import { useAuthUser } from '../../../hooks';
import { StarsDisplay } from '../../../components';

interface ICardData { id: number; title: string, imgUrl: string, stars: number, price: number }

interface CardsContainerProps {
  cardsData: ICardData[];
  cardClassName?: string;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ cardsData, cardClassName }) => {

  const { user } = useAuthUser();

  return (
    <div className="card--container">
      {cardsData.map((cardItem, index) => (
        <Card key={cardItem.id} className={cardClassName}>
          {user != null ? <div className="card--favorite"><AiOutlineHeart /></div> : null}
          <div className="card--img-wrap">
            <img className="card--img" src={cardItem.imgUrl} alt={`cardImg${index}`} />
          </div>
          <div className="card--title-wrap">
            <h1 className="card--title">{cardItem.title}</h1>
          </div>
          <StarsDisplay starsNum={cardItem.stars} />
          <p className="card--price">{formatPriceNum(cardItem.price)} <span>RSD</span></p>
          <div className="card--cart">
            <BiCartAdd />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardsContainer;

