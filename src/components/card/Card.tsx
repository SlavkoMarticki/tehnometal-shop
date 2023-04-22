import React from 'react';
import './card.css';

interface CardProps {
  children: any;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`card ${className != null ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
