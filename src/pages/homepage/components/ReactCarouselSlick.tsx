import { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import "./styles/slider.css";

export default function ReactCarouselSlick(): ReactElement {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className='homepage--slider'>
      <h2 className='slider--title'>Our Categories</h2>
      <Slider {...settings}>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Appliances</div>
          </div>
        </div>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1596385574887-f98a9a116927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Construction equipment</div>
          </div>
        </div>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Painting</div>
          </div>
        </div>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Tools</div>
          </div>
        </div>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Electric tools</div>
          </div>
        </div>
        <div className='slider--content'>
          <img
            className='slider--img'
            src='https://images.unsplash.com/photo-1571805268214-e9d753350217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='img'
          />
          <div className="slider--middle">
            <div className="slider--middle-txt">Kitchen equipment</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props: any): ReactElement {
  const { className, style, onClick } = props;
  return (
    <FiArrowRightCircle
      style={{ ...style, display: 'block', color: 'white', fontSize: '30px' }}
      onClick={onClick}
      className={className}
    />
  );
}

function SamplePrevArrow(props: any): ReactElement {
  const { className, style, onClick } = props;
  return (
    <FiArrowLeftCircle
      className={className}
      style={{ ...style, display: 'block', color: 'white', height: '2rem' }}
      onClick={onClick}
    />
  );
}
