import { StarsDisplay } from '../../stars';
import './productModal.css';
import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';

interface IProductModalProps {
  onClose?: () => void;
}

export default function ProductModal(
  props: IProductModalProps
): React.ReactElement {
  const { onClose } = props;

  return (
    <div className='products-details__modal'>
      <div className='product--m-container'>
        <AiOutlineCloseCircle
          className='exit--modal'
          onClick={onClose}
        />
        <div className='product--m-wrap'>
          <div className='product--m-img-group'>
            <img
              className='product--m-main-img'
              src='https://images.unsplash.com/photo-1515433868209-994b50c7e2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='main-img'
            />
            <img
              className='product--m-left-side-img'
              src='https://images.unsplash.com/photo-1636706529713-7cceb3d46365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
              alt='left side img'
            />
            <img
              className='product--m-right-side-img'
              src='https://images.unsplash.com/photo-1550091349-cedc7ea96d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
              alt='right side img'
            />
          </div>
          <div className='product--m-content-group'>
            <div className='flex justify-spaceBetween'>
              <h1 className='product--m-content-title'>MS 271 FARM BOSS®</h1>
              <AiOutlineHeart className='product--m-content-favorite' />
            </div>
            <StarsDisplay
              className='product--m-stars'
              starsNum={4}
              product
            />
            <div className='product--m-category flex'>
              <em className='product--m-label'>Category: </em>
              <p className='product--m-value'>Electric tools</p>
            </div>
            <div className='product--m-category flex'>
              <em className='product--m-label'>Brand: </em>
              <p className='product--m-value'>STIHL</p>
            </div>
            <div className='product--m-description flex flex-column'>
              <em className='product--m-label'>Description</em>
              <p className='product--m-desc-content'>
                The MS 271 FARM BOSS® replaces the mighty MS 270 with a saw
                that’s loaded with features and technology. It starts with a
                highly efficient engine that delivers 20% longer run times
                between refuelings – while cutting exhaust emissions in half
                compared to the MS 270. There’s also a pre-separation air
                filtration system that’s so effective, your air filter can last
                up to five times longer (now that’s high performance). All
                engineered into one compact, ergonomic design.
              </p>
            </div>
            <div className='product--m-modal-order flex justify-spaceBetween'>
              <div className='product--m-modal-price'>
                48 523,99 <span>RSD</span>
              </div>
              <BiCartAdd className='product--m-cart-icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
