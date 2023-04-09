import React from 'react';
import { DesktopNavItems, MobileNavItems } from '.';


interface IProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
  isStickyActive: boolean;
}

export default function NavMenuContent(
  props: IProps
): React.ReactElement | null {
  const { isNavActive, isNavMenuOpen, setIsNavMenuOpen, isStickyActive } = props;

  /* Dekstop Nav Menu Group */
  if (isNavActive) {
    return <DesktopNavItems
      isNavActive={isNavActive}
      isNavMenuOpen={isNavMenuOpen}
      isStickyActive={isStickyActive}
    />
  }

  /* Mobile Nav Menu Group */
  if (!isNavActive && isNavMenuOpen) {
    return <MobileNavItems
      isNavActive={isNavActive}
      isNavMenuOpen={isNavMenuOpen}
      isStickyActive={isStickyActive}
      setIsNavMenuOpen={setIsNavMenuOpen}
    />
  }

  return null;
}
