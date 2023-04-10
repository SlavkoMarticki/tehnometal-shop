import React from 'react';
import './categories.css';

export default function CategoriesPage(): React.ReactElement {
  return (
    <div className='categories full'>
      <div className='categories--container'>
        <div className='flex flex-column categories-wrap'>
          <h1 className='categories--title'>Choose one of our categories:</h1>
          <div className='card--group'>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Appliances</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1596385574887-f98a9a116927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>
                  Construction equipment
                </div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Painting</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Tools</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Electric tools</div>
              </div>
            </div>
            <div className='card--item'>
              <img
                className='slider--img card--item-img'
                src='https://images.unsplash.com/photo-1571805268214-e9d753350217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt='img'
              />
              <div className='slider--middle'>
                <div className='slider--middle-txt'>Kitchen equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
