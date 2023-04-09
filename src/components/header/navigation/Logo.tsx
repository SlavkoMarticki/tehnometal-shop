import logoWhite from '../../../common/assets/logo-light.png';
import logoDark from '../../../common/assets/logo-dark.png';
import classNames from 'classnames';

interface IProps {
  isNavActive?: boolean;
  isNavMenuOpen?: boolean;
  isStickyActive: boolean;
}

export default function Logo(
  props: IProps
): React.ReactElement {
  const { isNavActive, isNavMenuOpen, isStickyActive } = props;

  const logoClassName = classNames('nav--logo', {
    'nav--logo__closed-menu':
      !isNavActive && !isNavMenuOpen
  });

  return (
    <div className={logoClassName}>
      {isStickyActive ?
        <img
          src={logoWhite}
          alt='logo'
          className='nav--logo__img'
        />
        :
        <img
          src={logoDark}
          alt='logo'
          className='nav--logo__img'
        />
      }

    </div>
  );
}
