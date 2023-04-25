import { useEffect, useRef, useState } from 'react';
import { useLoader, usePageTitle } from '../../../hooks';
import './subCategories.css';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { Zoom } from '@mui/material';

export default observer(function SubCategoriesPage(): React.ReactElement {
  const { state } = useLocation();
  usePageTitle(state.toUpperCase());

  const navigate = useNavigate();

  const { categoryId } = useParams();
  const {
    categoriesStore: { getSubCategories, subCategories, setSubCategories }
  } = useStore();

  const { setIsLoading } = useLoader();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await getSubCategories(categoryId!);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      setSubCategories([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='categories full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <div className='flex flex-column'>
            <h1 className='categories--title s-cat--title flex justify-center align-center gap-20'>
              <IoMdArrowBack
                onClick={() => {
                  navigate(-1);
                }}
                className='cursor-pointer'
              />
              {state}
            </h1>
            <h3 className='s-cat--sub__title'>
              Choose one of our subcategories:
            </h3>
          </div>
          <div className='card--group'>
            {subCategories.map((subCategory) => {
              return (
                <SubCategoryCard
                  key={subCategory.id}
                  name={subCategory.data.name}
                  imgUrl={subCategory.data.imgUrl}
                  id={subCategory.id}
                  catId={categoryId!}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

interface ISubCategoryCardProps {
  imgUrl: string;
  id: string;
  name: string;
  catId: string;
}

const SubCategoryCard = observer(function SubCategoryCard(
  props: ISubCategoryCardProps
): React.ReactElement {
  const { imgUrl, id, name, catId } = props;
  return (
    <div className='card--item'>
      <FadeInSection>
        <Link
          to={`/categories/${catId}/${id}`}
          state={name}
        >
          <img
            className='slider--img card--item-img'
            src={imgUrl}
            alt={`category-img${id}`}
          />
          <div className='slider--middle'>
            <div className='slider--middle-txt'>{name}</div>
          </div>
        </Link>
      </FadeInSection>
    </div>
  );
});

function FadeInSection(props: any): any {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<any>();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <Zoom
      in={isVisible}
      style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
    >
      <div
        /* className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} */
        ref={domRef}
      >
        {props.children}
      </div>
    </Zoom>
  );
}
