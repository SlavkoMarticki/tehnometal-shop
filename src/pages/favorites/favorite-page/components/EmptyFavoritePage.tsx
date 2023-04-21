import { useNavigate } from 'react-router-dom';
import emptyFaforitesPhoto from '../../../../common/assets/emptyFavoritesPhoto.png';
import { Button } from '../../../../components';

export default function EmptyFavoritePage(): React.ReactElement {
  const navigate = useNavigate();
  return (
    <div className='full'>
      <div className='vector--top-right-bg'></div>
      <div className='vector--btm-left-bg'></div>
      <div className='favourite--empty flex justify-center align-center flex-column'>
        <img
          className='favourite--empty-photo'
          src={emptyFaforitesPhoto}
          alt='emptyFavoritesPhoto'
        />
        <h1 className=' favourite--empty-text color-w uppercase'>
          No favorites yet!
        </h1>

        <Button
          type='button'
          className='favourite--btn'
          onClick={() => {
            navigate('/categories');
          }}
        >
          See what we have to offer
        </Button>
      </div>
    </div>
  );
}
