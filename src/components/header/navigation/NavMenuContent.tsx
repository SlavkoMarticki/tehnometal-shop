import React from 'react';
import { DesktopNavItems, MobileNavItems } from '.';

interface IProps {
  isNavActive: boolean;
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (value: boolean) => void;
}

export default function NavMenuContent(
  props: IProps
): React.ReactElement | null {
  const { isNavActive, isNavMenuOpen, setIsNavMenuOpen } = props;

  /* Dekstop Nav Menu Group */
  if (isNavActive) {
    return (
      <DesktopNavItems
        isNavActive={isNavActive}
        isNavMenuOpen={isNavMenuOpen}
      />
    );
  }

  /* Mobile Nav Menu Group */
  if (!isNavActive && isNavMenuOpen) {
    return (
      <MobileNavItems
        isNavActive={isNavActive}
        isNavMenuOpen={isNavMenuOpen}
        setIsNavMenuOpen={setIsNavMenuOpen}
      />
    );
  }

  return null;
}
