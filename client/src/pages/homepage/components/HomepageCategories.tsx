import { ReactElement } from 'react';
import Slider from 'react-slick';
import './styles/slider.css';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { sliderSettings } from '../../../common';
import { Link } from 'react-router-dom';

export default observer(function HomepageCategories(): ReactElement {
  const {
    categoriesStore: { categories }
  } = useStore();

  return (
    <div className='homepage--slider'>
      <h2 className='slider--title'>Our Categories</h2>
      <Slider {...sliderSettings}>
        {categories.map((category) => {
          return (
            <SliderCard
              key={category.id}
              imgUrl={category.data.imgUrl}
              cardTitle={category.data.name}
              id={category.id}
            />
          );
        })}
      </Slider>
    </div>
  );
});

interface ISliderCardProps {
  imgUrl: string;
  cardTitle: string;
  id: string;
}

function SliderCard(props: ISliderCardProps): React.ReactElement {
  const { imgUrl, cardTitle, id } = props;

  return (
    <div className='slider--content'>
      <Link
        to={`/categories/${id}`}
        state={cardTitle}
      >
        <img
          className='slider--img'
          src={imgUrl}
          alt='img'
        />
        <div className='slider--middle'>
          <div className='slider--middle-txt'>{cardTitle}</div>
        </div>
      </Link>
    </div>
  );
}
