import React from 'react';
import './card.css';

interface CardProps {
  children: any;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`card ${className != null ? className : ""}`}>{children}</div>;
};

export default Card;