import logoWhite from '../../../common/assets/logo-light.png';
import logoDark from '../../../common/assets/logo-dark.png';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

interface IProps {
  isNavActive?: boolean;
  isNavMenuOpen?: boolean;
}

export default function Logo(props: IProps): React.ReactElement {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const { isNavActive, isNavMenuOpen } = props;
  const logoClassName = classNames('nav--logo', {
    'nav--logo__closed-menu': !isNavActive && !isNavMenuOpen
  });

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 56) {
        setIsSticky(true);
      } else if (window.pageYOffset < 56) {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    /* eslint-disable-next-line */
  }, []);

  if (!isSticky && !isNavMenuOpen) {
    return (
      <div className={logoClassName}>
        <img
          src={logoDark}
          alt='logo'
          className='nav--logo__img '
        />
      </div>
    );
  }

  if (isNavMenuOpen) {
    return (
      <div className={logoClassName}>
        <img
          src={logoDark}
          alt='logo'
          className='nav--logo__img'
        />
      </div>
    );
  }

  if (isSticky) {
    return (
      <div className={logoClassName}>
        <img
          src={logoWhite}
          alt='logo'
          className='nav--logo__img'
        />
      </div>
    );
  }
  return <></>;
}
