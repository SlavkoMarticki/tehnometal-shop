import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../../components';
import { CiPercent } from 'react-icons/ci';

const images = [
  'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
  'https://images.unsplash.com/photo-1518481852452-9415b262eba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1596495718166-7ac739ca1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
];

function Slideshow(): React.ReactElement {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>();

  function resetTimeout(): void {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      resetTimeout();
    };
  }, [index]);
  const navigate = useNavigate();

  return (
    <div className='slideshow'>
      <div
        className='slideshow--slider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundColor, index) => (
          <img
            className='slideshow--img'
            key={index}
            style={{ backgroundColor }}
            src={images[index]}
            alt={`img${index}`}
          />
        ))}
      </div>

      <div className='overlay overlay_1'></div>
      <div className='slideshow--info flex flex-column'>
        <h1>Appliances</h1>
        <p>
          20
          <span>
            <CiPercent />
          </span>{' '}
          OFF
        </p>
        <Button
          className='btn btn--slideshow'
          onClick={() => {
            navigate('/products');
          }}
        >
          See details...
        </Button>
      </div>
      <div className='slideshow--dots'>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshow--dot${
              index === idx ? ' slideshow--dot-active' : ''
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
