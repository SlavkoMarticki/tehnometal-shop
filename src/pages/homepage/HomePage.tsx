import React from 'react';
import { usePageTitle } from '../../hooks';
import { ReactCarouselSlick, SlideShow, Specials } from './components';
import './homepage.css';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');

  return (
    <div className='homepage'>
      <section className='homepage--hero'>
        <SlideShow />
      </section>
      <section className='homepage--carousel-categories'>
        <ReactCarouselSlick />
      </section>
      <section className='homepage--specials'>
        <Specials />
      </section>
    </div>
  );
}
