import './footer.css';
import { BsGithub, BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

export default function Footer(): JSX.Element {

  return (
    <div className='footer--full'>
      <div className='footer--wrap'>
        <div className='footer'>
          <div className='footer--data'>
            <div>
              <h4 className="footer--sub-title">About</h4>
              <br />
              <p className='footer--data-item'>About</p>
              <p className='footer--data-item'>Submit on issue</p>
            </div>
            <div>
              <h4 className="footer--sub-title">Contact</h4>
              <br />
              <p className='footer--data-item'>+99 9999 99</p>
              <p className='footer--data-item'>metalkremenovic@gmail.com</p>
            </div>
            <div>
              <h4 className="footer--sub-title">Shops</h4>
              <br />
              <p className='footer--data-item'>Milosa Obilica 52, Curug</p>
            </div>
            <div>
              <h4 className="footer--sub-title">Social media</h4>
              <br />
              <div className='footer--data-item footer--data-icons'>
                <BsFacebook />
                <BsGithub />
                <BsInstagram />
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className='footer--line'>
          <hr />
          <p className='footer--copyright'>
            &copy; 2023 TEHNOMETAL Kremenovic - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
