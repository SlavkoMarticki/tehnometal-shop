import './navigation.css';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import { Logo, NavCartItemsDisplay, NavMenuContent } from '.';
import { RiShoppingCart2Fill, RiShoppingCart2Line } from 'react-icons/ri';
import { HoverableIcon } from '../../hoverable-icon';
import { observer } from 'mobx-react';

interface IMobileNavIcon {
  isOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
  isNavActive?: boolean;
}

interface INavigationProps {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
}

export default function Navigation(
  props: INavigationProps
): React.ReactElement {
  const { isNavMenuOpen, setIsNavMenuOpen } = props;

  const isNavActive = useMediaQuery('(min-width: 840px)');

  const navMenuClassName = classNames({
    'nav--menu justify-spaceBetween flex': isNavActive,
    'nav--menu__m': !isNavActive && isNavMenuOpen
  });

  const overlayClassName = classNames({
    'mobile--overlay': !isNavActive && isNavMenuOpen
  });

  return (
    <nav className='nav'>
      <MobileNavIcon
        isOpen={isNavMenuOpen}
        setIsNavMenuOpen={setIsNavMenuOpen}
        isNavActive={isNavActive}
      />
      <section>
        <div
          className={overlayClassName}
          onClick={() => {
            setIsNavMenuOpen(false);
          }}
        ></div>
        <section className={navMenuClassName}>
          <NavMenuContent
            isNavActive={isNavActive}
            isNavMenuOpen={isNavMenuOpen}
            setIsNavMenuOpen={setIsNavMenuOpen}
          />
        </section>
      </section>
    </nav>
  );
}

const MobileNavIcon = observer(function MobileNavAction(
  props: IMobileNavIcon
): React.ReactElement {
  const { isOpen, setIsNavMenuOpen, isNavActive } = props;

  if (!isNavActive && !isOpen) {
    return (
      <>
        <Logo
          isNavActive={isNavActive}
          isNavMenuOpen={isOpen}
        />
        <div style={{ position: 'relative' }}>
          <HoverableIcon
            path='/cart'
            mobileIconClassName='nav--cart-count'
            regularIcon={
              <>
                <RiShoppingCart2Line />
                <NavCartItemsDisplay />
              </>
            }
            hoverIcon={
              <>
                <RiShoppingCart2Fill />
                <NavCartItemsDisplay />
              </>
            }
            spanClassName='nav--cart'
          />
        </div>

        <RxHamburgerMenu
          className='nav--mobile'
          id='hamburger--menu-icon'
          onClick={() => {
            setIsNavMenuOpen(true);
          }}
        />
      </>
    );
  }
  return (
    <RxCross2
      className='nav--mobile-x'
      onClick={() => {
        setIsNavMenuOpen(false);
      }}
    />
  );
});
