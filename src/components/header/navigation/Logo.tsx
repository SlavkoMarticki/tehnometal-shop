import logoWhite from '../../../common/assets/logo-light.png';
import logoDark from '../../../common/assets/logo-dark.png';
import classNames from 'classnames';

interface IProps {
  isNavActive?: boolean;
  isNavMenuOpen?: boolean;
}

export default function Logo(
  props: IProps
): React.ReactElement {
  const { isNavActive, isNavMenuOpen } = props;

  const logoClassName = classNames('nav--logo', {
    'nav--logo__closed-menu':
      !isNavActive && !isNavMenuOpen
  });

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
