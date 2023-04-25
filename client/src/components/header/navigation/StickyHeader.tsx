import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

interface StickyHeaderProps {
  children: React.ReactNode;
}

function StickyHeader(props: StickyHeaderProps): React.ReactElement {
  const { children } = props;
  const headerRef = useRef<HTMLDivElement>(null);

  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const headerElement = headerRef.current;
    const parentElement = headerElement?.parentElement;

    function handleScroll(): void {
      if (headerElement && parentElement) {
        const scrollPosition = window.scrollY;

        const navItemClassList =
          headerElement.getElementsByClassName('nav--item');

        if (scrollPosition >= 56) {
          for (let i = 0; i < navItemClassList.length; i++) {
            navItemClassList.item(i)?.classList.add('nav--item-is-sticky');
          }
          headerElement
            .getElementsByClassName('nav--cart-count')
            .item(0)
            ?.classList.add('color-dark');

          headerElement
            .getElementsByClassName('nav--mobile')
            .item(0)
            ?.classList.add('color-dark');
          if (!isNavMenuOpen) {
            headerElement.classList.add('is--sticky');
          }
          // }
        } else {
          for (let i = 0; i < navItemClassList.length; i++) {
            navItemClassList.item(i)?.classList.remove('nav--item-is-sticky');
          }
          headerElement
            .getElementsByClassName('nav--cart-count')
            .item(0)
            ?.classList.remove('color-dark');

          headerElement
            .getElementsByClassName('nav--mobile')
            .item(0)
            ?.classList.remove('color-dark');
          headerElement.classList.remove('is--sticky');
        }
      }
    }

    if (isNavMenuOpen && window.scrollY > 56) {
      headerElement!.classList.remove('is--sticky');
    }

    if (!isNavMenuOpen && window.scrollY > 56) {
      headerElement!.classList.add('is--sticky');
      headerElement!
        .getElementsByClassName('nav--cart-count')
        .item(0)
        ?.classList.add('color-dark');
      headerElement!
        .getElementsByClassName('nav--mobile')
        .item(0)
        ?.classList.add('color-dark');
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavMenuOpen]);

  return (
    <>
      <header
        className='header'
        ref={headerRef}
      >
        <Navigation
          isNavMenuOpen={isNavMenuOpen}
          setIsNavMenuOpen={setIsNavMenuOpen}
        />
      </header>
      <div className='content'>{children}</div>
    </>
  );
}

StickyHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default React.memo(StickyHeader);
