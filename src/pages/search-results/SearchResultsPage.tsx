import React from 'react';
import "./searchResults.css";
import CardsContainer from '../homepage/components/CardContainer';
import { cardsData } from '../../common';

export default function SearchResultsPage(): React.ReactElement {
  return <div className='full'>
    <div className='vector--top-right-bg'></div>
    <div className='vector--btm-left-bg'></div>
    <div className='categories--container'>
      <div className="flex flex-column search-title">
        <h1 className='search--title'>YOUR SEARCH RESULTS FOR:</h1>
        <h3 className="search--sub-title">chainsaw</h3>
      </div>
      <div className='flex flex-column categories-wrap'>
        <CardsContainer
          cardsData={cardsData}
          cardClassName='card--wrap search--wrap'
        />
      </div>
    </div>
  </div>
}
