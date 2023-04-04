import { useState } from 'react';
import './navigation.css';
import {
  RxHamburgerMenu,
  RxCross2
} from 'react-icons/rx';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import { Logo, NavMenuContent } from '.';
import {
  RiShoppingCart2Fill,
  RiShoppingCart2Line
} from 'react-icons/ri';
import { HoverableIcon } from '../../hoverable-icon';

interface IMobileNavIcon {
  isOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
  isNavActive?: boolean;
}

export default function Navigation(): React.ReactElement {
  const [isNavMenuOpen, setIsNavMenuOpen] =
    useState<boolean>(false);

  const isNavActive = useMediaQuery(
    '(min-width: 700px)'
  );

  const navMenuClassName = classNames({
    'nav--menu justify-spaceBetween flex':
      isNavActive,
    'nav--menu__m': !isNavActive && isNavMenuOpen
  });

  return (
    <nav className='nav'>
      <MobileNavIcon
        isOpen={isNavMenuOpen}
        setIsNavMenuOpen={setIsNavMenuOpen}
        isNavActive={isNavActive}
      />
      <section className={navMenuClassName}>
        <NavMenuContent
          isNavActive={isNavActive}
          isNavMenuOpen={isNavMenuOpen}
        />
      </section>
    </nav>
  );
}

const MobileNavIcon = (
  props: IMobileNavIcon
): React.ReactElement => {
  const {
    isOpen,
    setIsNavMenuOpen,
    isNavActive
  } = props;

  if (!isNavActive && !isOpen) {
    return (
      <>
        <Logo
          isNavActive={isNavActive}
          isNavMenuOpen={isOpen}
        />
        <HoverableIcon
          regularIcon={
            <RiShoppingCart2Line className='nav--cart' />
          }
          hoverIcon={
            <RiShoppingCart2Fill className='nav--cart' />
          }
        />

        <RxHamburgerMenu
          className='nav--mobile'
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
};
