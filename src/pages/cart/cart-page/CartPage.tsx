import { Button, StarsDisplay } from '../../../components';
import { useMediaQuery, usePageTitle } from '../../../hooks';
import './cart.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { TbTrash } from 'react-icons/tb';

export default function CartPage(): React.ReactElement {
  usePageTitle('Cart');
  const isDesktopActive = useMediaQuery('(min-width: 840px)');

  return (
    <div className='cart full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='cart--container'>
        <div className='cart--wrapper'>
          <h1 className='cart--title'>Cart</h1>
          <div className='cart--labels'>
            <h1 className='cart--labels-title cart--labels__product'>
              Product details
            </h1>
            <h1 className='cart--labels-title cart--labels__quantity'>
              Quantity
            </h1>
            <h1 className='cart--labels-title cart--labels__price'>Price</h1>
            <h1 className='cart--labels-title cart--labels__total'>total</h1>
            <span className='cart--labels-title-empty'>&nbsp;</span>
          </div>
          <div className='full-height'>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
            <div className='cart--items'>
              {isDesktopActive ? (
                <div className='flex cart--items-prod-details'>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <StarsDisplay
                        product
                        starsNum={4}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className='cart--item-img'>
                    <img
                      src='https://cdn5.elipso.hr/elipsowebmedia/images/xbig/157291.jpg'
                      alt='masina'
                    />
                  </div>
                  <div className='cart--item-title'>
                    <div className='flex flex-column'>
                      <h1 className='cart--item-title-main'>Washing machine</h1>
                      <div className='cart--item-stars'>
                        <StarsDisplay
                          product
                          starsNum={4}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='cart--item-quantity'>
                <Button className='cart--reduce-btn'>
                  <HiMinus />
                </Button>
                <span className='cart--quantity-value'>2</span>
                <Button className='cart--add-btn'>
                  <HiPlus />
                </Button>
              </div>
              <div className='cart--item-prod-price'>
                <p className='cart--price'>
                  29 999 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-total-price'>
                <p className='cart--price'>
                  59 998 <span>RSD</span>
                </p>
              </div>
              <div className='cart--item-remove'>
                <Button className='cart--remove-btn'>
                  <TbTrash />
                </Button>
              </div>
            </div>
          </div>
          <div className='cart--price-wrap'>
            <div className='cart--price-total'>
              <h1 className='cart--price-total-label'>TOTAL:</h1>
              <p className='cart--price-total-num'>
                124.996{' '}
                <span>
                  <em>RSD</em>
                </span>
              </p>
            </div>
            <Button className='cart--finish-btn'>FINISH PURCHASE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
