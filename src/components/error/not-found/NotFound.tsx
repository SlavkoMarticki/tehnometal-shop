import './notFound.css';
import { Button } from '../../buttons';
import { Link } from 'react-router-dom';

export default function ErrorPage(): React.ReactElement {
  return (
    <div className='not-found full'>
      <div className='not-found--overlay'>
        <div className='not-found--wrap flex flex-column gap-20 align-center'>
          <h1>404</h1>
          <p>Page not found!</p>
          <div className='not-found--btns'>
            <Link to={'/'}>
              <Button
                type='button'
                className='not-found--home-btn'
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
