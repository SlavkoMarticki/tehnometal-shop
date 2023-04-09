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
import { cardsData } from '../../common';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');

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
          <Map />
        </div>
      </section>
    </div>
  );
}
