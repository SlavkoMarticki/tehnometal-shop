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
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersection';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');

  const triggerRef = useRef<HTMLDivElement>(null);
  const triggerMapRef = useRef<HTMLDivElement>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false
  });
  const dataMapRef = useIntersectionObserver(triggerMapRef, {
    freezeOnceVisible: false
  });

  const headerStyle = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0
    }
  });

  const locationStyle = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: {
      opacity: dataMapRef?.isIntersecting ? 1 : 0
    }
  });

  const mapStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, right: '-700px' },
    to: {
      opacity: dataMapRef?.isIntersecting ? 1 : 0,
      right: dataMapRef?.isIntersecting ? '0px' : '-700px'
    }
  });

  return (
    <div className='homepage'>
      <div className='vector--btm-left-bg'></div>
      <section className='homepage--hero'>
        <SlideShow />
      </section>

      <animated.section
        className='homepage--carousel-categories'
        style={headerStyle}
      >
        <div ref={triggerRef} />
        <HomepageCategories />
      </animated.section>
      <div className='full'>
        <section className='homepage--specials'>
          <Specials />
        </section>
      </div>
      <section className='homepage--recommendation-products'>
        <h2 className='slider--title sml--title'>
          Our recommendation for you...
        </h2>
        <CardsContainer cardClassName='card--wrap' />
      </section>
      <DiscountWidget />
      <section className='homepage--find-us'>
        <FindUsSection />
      </section>
      <section className='homepage--map'>
        <animated.div
          className='homepage--title'
          style={locationStyle}
        >
          <h1>WHERE TO FIND US</h1>
        </animated.div>
        <div ref={triggerMapRef} />
        <animated.div
          className='homepage--map-container'
          style={mapStyle}
        >
          <Map />
        </animated.div>
      </section>
    </div>
  );
}
