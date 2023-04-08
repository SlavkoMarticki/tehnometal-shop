import CardsContainer from './components/CardContainer';
import { Map } from '../../components/map';
import { usePageTitle } from '../../hooks';
import {
  DiscountWidget,
  FindUsSection,
  ReactCarouselSlick,
  SlideShow,
  Specials
} from './components';
import './homepage.css';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');
  const cardsData = [
    {
      id: 1,
      title: 'MS 271 FARM BOSS®',
      stars: 4,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 2,
      title: 'MS 271 FARM BOSS®',
      stars: 3,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 3,
      title: 'MS 271 FARM BOSS®',
      stars: 2,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 4,
      title: 'MS 271 FARM BOSS®',
      stars: 3,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 5,
      title: 'MS 271 FARM BOSS®',
      stars: 1,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 6,
      title: 'MS 271 FARM BOSS®',
      stars: 5,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 7,
      title: 'MS 271 FARM BOSS®',
      stars: 3,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 8,
      title: 'MS 271 FARM BOSS®',
      stars: 4,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 9,
      title: 'MS 271 FARM BOSS®',
      stars: 3,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    },
    {
      id: 10,
      title: 'MS 271 FARM BOSS®',
      stars: 5,
      price: 48523,
      imgUrl:
        'https://stihlusa-images.imgix.net/Product/938/ms271.png?w=710&h=532&fit=fill&auto=format,compress&fill=solid'
    }
  ];

  return (
    <div className='homepage'>
      <div className='vector--btm-left-bg'></div>

      <section className='homepage--hero'>
        <SlideShow />
      </section>
      <section className='homepage--carousel-categories'>
        <ReactCarouselSlick />
      </section>
      <div className='full'>
        <section className='homepage--specials'>
          <Specials />
        </section>
      </div>
      <section className='homepage--recommendation-products'>

        <h2 className='slider--title sml--title'>
          Our recommendation for you...
        </h2>
        <CardsContainer
          cardsData={cardsData}
          cardClassName='card--wrap'
        />
      </section>
      <DiscountWidget />
      <section className='homepage--find-us'>
        <FindUsSection />
      </section>
      <section className='homepage--map'>
        <div className='homepage--title'><h1>WHERE TO FIND US</h1></div>
        <div className='homepage--map-container'>
          <Map className='' />
        </div>
      </section>
    </div>
  );
}
