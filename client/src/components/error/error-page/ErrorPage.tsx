import { Button } from '../../buttons';
import './errorPage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage(): React.ReactElement {
  const onRefreshBtn = (): void => {
    window.location.reload();
  };

  return (
    <div className='error full'>
      <div className='error--overlay'>
        <div className='error--wrap flex flex-column gap-20 align-center'>
          <h1>Something went wrong...</h1>
          <p>Please try to refresh your page or go to our home page</p>
          <div className='error--btns'>
            <Button
              type='button'
              className='error--refresh-btn'
              onClick={onRefreshBtn}
            >
              Refresh
            </Button>
            {/* <button className='error--home-btn'>Home</button> */}
            <Link to={'/'}>
              <Button
                type='button'
                className='error--home-btn'
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
