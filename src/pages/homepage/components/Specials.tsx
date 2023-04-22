import AxeSpecial from '../../../common/assets/specials/axe-special.png';
import WashMachine from '../../../common/assets/specials/specials-wash-machine.png';
import CementImg from '../../../common/assets/specials/specials-cement.png';
import SpecialsToolsBox from '../../../common/assets/specials/specials-tools-box.png';
import { useMediaQuery } from '../../../hooks';
import classNames from 'classnames';
import './styles/specials.css';
import { Fade } from 'react-reveal';

export default function Specials(): React.ReactElement {
  const isTabletViewActive = useMediaQuery('(min-width: 1424px)');

  const specialsVerticalClassNames = classNames('flex specials--card-item', {
    'flex-column': !isTabletViewActive
  });

  const smlTextClassName = classNames('', {
    'txt-sml': isTabletViewActive
  });

  return (
    <>
      <h2 className='slider--title'>Specials this week...</h2>
      <div className='specials--container'>
        <Fade
          left
          delay={500}
          duration={1000}
        >
          <div className='specials--card specials--item-one'>
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
                  Buy this Pickhead Fire Axe and you will get three axe holders
                  for free!!
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade
          top
          delay={500}
          duration={1000}
        >
          <div className='specials--card specials--item-two'>
            <div className='specials--vector-down'></div>
            <div className={specialsVerticalClassNames}>
              <div className='specials--item-content'>
                <p className={smlTextClassName}>
                  Our Partners will give you only the best cement on the
                  market!!
                </p>
              </div>
              <div className='specials--item-img'>
                <img
                  src={CementImg}
                  alt='axe special'
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade
          right
          duration={1000}
          delay={500}
        >
          <div className='specials--card specials--item-three'>
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
          </div>
        </Fade>
        <Fade
          bottom
          delay={500}
          duration={1000}
        >
          <div className='specials--card specials--item-four'>
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
          </div>
        </Fade>
      </div>
    </>
  );
}
