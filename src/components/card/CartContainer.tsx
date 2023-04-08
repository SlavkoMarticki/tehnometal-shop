import React from 'react';
import Card from './Card';
import './card.css';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { formatPriceNum } from '../../utils';

interface ICardData { id: number; title: string, imgUrl: string, stars: number, price: number }


interface CardsContainerProps {
  cardsData: ICardData[];
  cardClassName?: string;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ cardsData, cardClassName }) => {
  return (
    <div className="card--container">
      {cardsData.map((cardItem) => (
        <Card key={cardItem.id} className={cardClassName}>
          <div className="card--favorite"><AiOutlineHeart /></div>
          <div className="card--img-wrap">
            <img className="card--img" src={cardItem.imgUrl} />
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

const StarsDisplay = ({ starsNum }: { starsNum: number }): React.ReactElement => {
  const data = new Array(starsNum).fill(starsNum);
  console.log(data)
  return <div className="flex card--stars-wrap">
    {data.map((star, idx) => (
      <div key={idx} className="card--star">
        <AiFillStar />
      </div>
    ))}
  </div>
}