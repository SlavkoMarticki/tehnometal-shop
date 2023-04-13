import React from 'react';
import './categoryProductPage.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { StarsDisplay } from '../../../components';
import { formatPriceNum } from '../../../utils';
import { BiCartAdd } from 'react-icons/bi';
import { usePageTitle } from '../../../hooks';

export default function CategoryProductsPage(): React.ReactElement {
  usePageTitle('Product ');

  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='categories--container'>
        <h1 className='categories--title s-cat--title pad-b-2rem'>Products</h1>
        <div className='flex flex-column categories-wrap'>
          <div className='card--group product--group products--grid'>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card--item product--item'>
              <div className='card--favorite r-10'>
                <AiOutlineHeart />
              </div>
              <div className='flex product'>
                <div className='product--img'>
                  <img
                    className='product--img-side'
                    src='https://images.unsplash.com/photo-1474742509976-ddec6b387356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='abdab'
                  />
                </div>
                <div className='flex flex-column product--content'>
                  <h2 className='product--title'>MS 271 FARM BOSS®</h2>
                  <StarsDisplay
                    product
                    starsNum={4}
                  />
                  <div className='flex justify-spaceBetween align-center'>
                    <p className='product--price'>
                      {formatPriceNum(48523.99)} <span>RSD</span>
                    </p>
                    <div className='product--cart'>
                      <BiCartAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
