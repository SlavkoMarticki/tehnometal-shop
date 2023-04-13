import React from 'react';
import './categories.css';
import { usePageTitle } from '../../../hooks';
import { Link } from 'react-router-dom';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';

export default observer(function CategoriesPage(): React.ReactElement {
  usePageTitle('Categories');

  const {
    categoriesStore: { categories }
  } = useStore();

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <h1 className='categories--title'>Choose one of our categories:</h1>
          <div className='card--group'>
            {categories.map((cat) => {
              return (
                <CategoriesCard
                  key={cat.id}
                  catId={cat.id}
                  imgUrl={cat.data.imgUrl}
                  name={cat.data.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

interface ICategoriesCardProps {
  imgUrl: string;
  name: string;
  catId: string;
}

function CategoriesCard(props: ICategoriesCardProps): React.ReactElement {
  const { imgUrl, name, catId } = props;

  return (
    <div className='card--item'>
      <Link to={`/categories/${catId}`}>
        <img
          className='slider--img card--item-img'
          src={imgUrl}
          alt='img'
        />
        <div className='slider--middle'>
          <div className='slider--middle-txt'>{name}</div>
        </div>
      </Link>
    </div>
  );
}
