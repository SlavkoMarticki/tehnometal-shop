import { useEffect, useState } from 'react';
import './navigation.css';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import { Logo, NavMenuContent } from '.';
import { RiShoppingCart2Fill, RiShoppingCart2Line } from 'react-icons/ri';
import { HoverableIcon } from '../../hoverable-icon';

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

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClassName = classNames(
    "nav",
    {
      "is--sticky": isSticky && !isNavMenuOpen
    }
  )

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

const MobileNavIcon = (props: IMobileNavIcon): React.ReactElement => {
  const { isOpen, setIsNavMenuOpen, isNavActive, isStickyActive } = props;

  if (!isNavActive && !isOpen) {
    return (
      <>
        <Logo isNavActive={isNavActive} isNavMenuOpen={isOpen} isStickyActive={isStickyActive} />
        <HoverableIcon
          path='/cart'
          regularIcon={<RiShoppingCart2Line className='nav--cart' />}
          hoverIcon={<RiShoppingCart2Fill className='nav--cart' />}
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
