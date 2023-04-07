import React from 'react';
import { usePageTitle } from '../../hooks';
import { SlideShow } from './components';
import './homepage.css';

export default function HomePage(): React.ReactElement {
  usePageTitle('Home');

  return (
    <div className='homepage'>
      <section className='homepage--hero'>
        <SlideShow />
      </section>
    </div>
  );
}
