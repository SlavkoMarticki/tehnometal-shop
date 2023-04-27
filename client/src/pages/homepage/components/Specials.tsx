import AxeSpecial from '../../../common/assets/specials/axe-special.png';
import WashMachine from '../../../common/assets/specials/specials-wash-machine.png';
import CementImg from '../../../common/assets/specials/specials-cement.png';
import SpecialsToolsBox from '../../../common/assets/specials/specials-tools-box.png';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import './styles/specials.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersection';
import { useSpring, animated } from 'react-spring';

export default function Specials(): React.ReactElement {
  const isTabletViewActive = useMediaQuery('(min-width: 1424px)');
  const navigate = useNavigate();
  const specialsVerticalClassNames = classNames('flex specials--card-item', {
    'flex-column': !isTabletViewActive
  });

  const smlTextClassName = classNames('', {
    'txt-sml': isTabletViewActive
  });

  const specialsRef = useRef<HTMLDivElement>(null);
  const dataRefSpec = useIntersectionObserver(specialsRef, {
    freezeOnceVisible: false
  });

  const specialsStyle = useSpring({
    from: { left: '-700px' },
    to: {
      left: dataRefSpec?.isIntersecting ? '0px' : '-700px'
    }
  });

  const specialsRight = useSpring({
    from: { right: '-700px' },
    to: {
      right: dataRefSpec?.isIntersecting ? '0px' : '-700px'
    }
  });

  const specialsTop = useSpring({
    from: { top: '-700px', zIndex: -1 },
    to: {
      top: dataRefSpec?.isIntersecting ? '0px' : '-700px',
      zIndex: dataRefSpec?.isIntersecting ? 1 : -1
    }
  });

  const specialsBottom = useSpring({
    from: { bottom: '-700px', zIndex: -1 },
    to: {
      bottom: dataRefSpec?.isIntersecting ? '0px' : '-700px',
      zIndex: dataRefSpec?.isIntersecting ? 1 : -1
    }
  });
  return (
    <div
      ref={specialsRef}
      style={{ overflow: 'hidden' }}
    >
      <h2 className='slider--title'>Specials this week...</h2>

      <div className='specials--container'>
        <animated.div
          className='specials--card specials--item-one'
          style={specialsStyle}
          onClick={() => {
            navigate('/categories/-NSCE22ejmk_NVdGheil/-NSvH8qZhqdHT6Rw8X0m', {
              state: 'Can of Paint'
            });
          }}
        >
          <div className='specials--vector-up'></div>
          <div className='flex flex-column specials--card-item'>
            <div className='specials--item-img'>
              <img
                src={AxeSpecial}
                alt='axe special'
              />
            </div>

            <div className='specials--item-content'>
              <p>
                Our Jupol Gold Edition will leave you speechless! Let your house
                shine.
              </p>
            </div>
          </div>
        </animated.div>

        <animated.div
          className='specials--card specials--item-two'
          onClick={() => {
            navigate('/categories/-NSCE1hOhWyRWUvmSk7O/-NSusWZyFbroCGoGW7qv', {
              state: 'Cement'
            });
          }}
          style={specialsTop}
        >
          <div className='specials--vector-down'></div>
          <div className={specialsVerticalClassNames}>
            <div className='specials--item-content'>
              <p className={smlTextClassName}>
                Our Partners will give you only the best cement on the market!!
              </p>
            </div>
            <div className='specials--item-img'>
              <img
                src={CementImg}
                alt='axe special'
              />
            </div>
          </div>
        </animated.div>

        <animated.div
          className='specials--card specials--item-three'
          onClick={() => {
            navigate('/categories/-NSCE12-HLJY6C-fKziU/-NSvA1c_8Km1jpnU9eJI', {
              state: 'washing machines'
            });
          }}
          style={specialsRight}
        >
          <div className='specials--vector-up'></div>
          <div className='flex flex-column specials--card-item'>
            <div className='specials--item-img'>
              <img
                src={WashMachine}
                alt='axe special'
              />
            </div>
            <div className='specials--item-content'>
              <p>VOX VM1490 will save you up to 11 000 RSD!!</p>
            </div>
          </div>
        </animated.div>

        <animated.div
          className='specials--card specials--item-four'
          onClick={() => {
            navigate('/categories/-NSCE2HTSHLGGkC-OMQX', {
              state: 'Tools'
            });
          }}
          style={specialsBottom}
        >
          <div className='specials--vector-down'></div>
          <div className={specialsVerticalClassNames}>
            <div className='specials--item-content'>
              <p className={smlTextClassName}>
                Start your handyman journey right now!!
              </p>
            </div>
            <div className='specials--item-img'>
              <img
                src={SpecialsToolsBox}
                alt='axe special'
              />
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
