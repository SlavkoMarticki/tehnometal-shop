import CardsContainer from './components/CardContainer';
import { Map } from '../../components/map';
import { usePageTitle } from '../../hooks';
import {
  DiscountWidget,
  FindUsSection,
  HomepageCategories,
  SlideShow,
  Specials
} from './components';
import './homepage.css';
import { cardsData } from '../../common';
import { Fade } from 'react-reveal';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');

  return (
    <div className='homepage'>
      <div className='vector--btm-left-bg'></div>
      <section className='homepage--hero'>
        <SlideShow />
      </section>
      <Fade
        top
        distance='10%'
        duration={1500}
        delay={500}
      >
        <section className='homepage--carousel-categories'>
          <HomepageCategories />
        </section>
      </Fade>
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
        <Fade
          left
          duration={1000}
          delay={500}
        >
          <div className='homepage--title'>
            <h1>WHERE TO FIND US</h1>
          </div>
        </Fade>
        <Fade
          right
          duration={1000}
          delay={500}
        >
          <div className='homepage--map-container'>
            <Map />
          </div>
        </Fade>
      </section>
    </div>
  );
}
