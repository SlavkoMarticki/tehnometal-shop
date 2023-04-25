import { ReactElement } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export function SampleNextArrow(props: any): ReactElement {
  const { className, style, onClick } = props;
  return (
    <FiArrowRightCircle
      style={{ ...style, display: 'block', color: 'white', fontSize: '30px' }}
      onClick={onClick}
      className={className}
    />
  );
}

export function SamplePrevArrow(props: any): ReactElement {
  const { className, style, onClick } = props;
  return (
    <FiArrowLeftCircle
      className={className}
      style={{ ...style, display: 'block', color: 'white', height: '2rem' }}
      onClick={onClick}
    />
  );
}
