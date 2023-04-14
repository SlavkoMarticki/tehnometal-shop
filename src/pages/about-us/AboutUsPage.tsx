import React from 'react';
import './aboutUs.css';
import AboutUsCaseImg from '../../common/assets/about-us-case.png';
import AboutUsDrillImg from '../../common/assets/about-us-drill.png';
import AboutUsLocationImg from '../../common/assets/about-us-location.png';
import { Map } from '../../components/map';
import { useMediaQuery, usePageTitle } from '../../hooks';

export default function AboutUsPage(): React.ReactElement {
  const isDesktopActive = useMediaQuery('(min-width:1200px)');
  if (isDesktopActive) {
    return <AboutUsDesktopView />;
  }

  return <AboutUsMobileView />;
}

const AboutUsDesktopView = (): React.ReactElement => {
  usePageTitle('About Us');

  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='about-us--container'>
        <div className='about-us--wrap'>
          <div className='about-us--about'>
            <div className='about-us--content-img'>
              <img
                className='about-us--drill-img'
                src={AboutUsCaseImg}
                alt='about us drill img'
              />
              <img
                className='about-us--case-img'
                src={AboutUsDrillImg}
                alt='about us case img'
              />
            </div>
            <div className='about-us--content-txt'>
              <h1 className='about-us--title-main'>ABOUT US</h1>
              <h3 className='about-us--title-secondary'>
                we are a small family business that tries to provide you with
                the most affordable purchase and the safest delivery
              </h3>
              <p className='about-us--content-block'>
                our story begins in 2016 in Belgrade and since then we have been
                selling construction materials and more recently appliances and
                other electrical appliances. Our success lies in sacrifice and
                work
              </p>
            </div>
          </div>
          <div className='about--us-location'>
            <div className='about-us--location-img'>
              <img
                src={AboutUsLocationImg}
                alt='location marker'
                className='about--us-marker-img'
              />
            </div>
            <div className='about-us--location-map'>
              <div className='about-us--location-map'>
                <h1 className='about-us--location-map-title'>
                  WHERE TO FIND US?
                </h1>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUsMobileView = (): React.ReactElement => {
  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='about-us--container-mobile flex flex-column'>
        <div className='about-us--content-txt flex flex-column'>
          <h1 className='about-us--title-main'>ABOUT US</h1>
          <h3 className='about-us--title-secondary'>
            we are a small family business that tries to provide you with the
            most affordable purchase and the safest delivery
          </h3>
          <p className='about-us--content-block'>
            our story begins in 2016 in Belgrade and since then we have been
            selling construction materials and more recently appliances and
            other electrical appliances. Our success lies in sacrifice and work
          </p>
        </div>
        <div className='about-us--location-img'>
          <img
            src={AboutUsLocationImg}
            alt='location marker'
            className='a-img about--us-marker-img'
          />
          <img
            className='a-img about-us--drill-img'
            src={AboutUsCaseImg}
            alt='about us drill img'
          />
          <img
            className='a-img about-us--case-img'
            src={AboutUsDrillImg}
            alt='about us case img'
          />
        </div>
        <div className='about-us--location-map'>
          <div className='about-us--location-map'>
            <h1 className='about-us--location-map-title'>WHERE TO FIND US?</h1>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};
