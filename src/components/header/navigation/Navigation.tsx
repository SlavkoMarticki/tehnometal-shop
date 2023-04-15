import { useEffect, useState } from 'react';
import './navigation.css';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import { Logo, NavCartItemsDisplay, NavMenuContent } from '.';
import { RiShoppingCart2Fill, RiShoppingCart2Line } from 'react-icons/ri';
import { HoverableIcon } from '../../hoverable-icon';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';

interface IMobileNavIcon {
  isOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
  isNavActive?: boolean;
  isStickyActive: boolean;
}

export default function Navigation(): React.ReactElement {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  const [isSticky, setIsSticky] = useState<boolean>(false);
  const isNavActive = useMediaQuery('(min-width: 840px)');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      const unabledScrollHeader =
        pathname.includes('login') ||
        pathname.includes('register') ||
        pathname.includes('categories');
      if (window.pageYOffset > 56 && !unabledScrollHeader) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const navClassName = classNames('nav', {
    'is--sticky': isSticky && !isNavMenuOpen
  });

  const navMenuClassName = classNames({
    'nav--menu justify-spaceBetween flex': isNavActive,
    'nav--menu__m': !isNavActive && isNavMenuOpen
  });

  return (
    <nav className={navClassName}>
      <MobileNavIcon
        isOpen={isNavMenuOpen}
        setIsNavMenuOpen={setIsNavMenuOpen}
        isNavActive={isNavActive}
        isStickyActive={isSticky}
      />
      <section className={navMenuClassName}>
        <NavMenuContent
          isStickyActive={isSticky}
          isNavActive={isNavActive}
          isNavMenuOpen={isNavMenuOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
      </section>
    </nav>
  );
}

const MobileNavIcon = observer(function MobileNavAction(
  props: IMobileNavIcon
): React.ReactElement {
  const { isOpen, setIsNavMenuOpen, isNavActive, isStickyActive } = props;

  const navItemIconClassName = classNames('nav--mobile', {
    'nav--item-is-sticky': isStickyActive
  });

  const navCartIconClassName = classNames('nav--cart', {
    'nav--item-is-sticky': isStickyActive
  });

  if (!isNavActive && !isOpen) {
    return (
      <>
        <Logo
          isNavActive={isNavActive}
          isNavMenuOpen={isOpen}
          isStickyActive={isStickyActive}
        />
        <div style={{ position: 'relative' }}>
          <HoverableIcon
            path='/cart'
            regularIcon={
              <>
                <RiShoppingCart2Line
                  className='nav--cart-count'
                  /* className={navCartIconClassName} */
                />
                <NavCartItemsDisplay />
              </>
            }
            hoverIcon={
              <>
                <RiShoppingCart2Fill
                  className='nav--cart-count'
                  /* className={navCartIconClassName} */
                />
                <NavCartItemsDisplay />
              </>
            }
            spanClassName={navCartIconClassName}
          />
        </div>

        <RxHamburgerMenu
          className={navItemIconClassName}
          onClick={() => {
            setIsNavMenuOpen(true);
          }}
        />
      </>
    );
  }
  return (
    <RxCross2
      className='nav--mobile'
      onClick={() => {
        setIsNavMenuOpen(false);
      }}
    />
  );
});
