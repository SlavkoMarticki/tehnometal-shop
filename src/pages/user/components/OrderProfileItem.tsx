import { useState } from 'react';
import { formatPriceNum } from '../../../utils';
import { ImInfo } from 'react-icons/im';
import { Modal } from '../../../portals';
import { ProfileInfoModal } from './ProfileInfoModal';

interface IOrderProfileItemProps {
  purchaseNum: string;
  purchaseQuantity: number;
  purchasePrice: number;
}

export const OrderProfileItem = (
  props: IOrderProfileItemProps
): React.ReactElement => {
  const { purchaseNum, purchaseQuantity, purchasePrice } = props;
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  return (
    <div className='profile--purchases-item'>
      <p className='purchase--num'>{purchaseNum}</p>
      <p className='purchase--articals-num'>{purchaseQuantity}</p>
      <p className='purchase--articals-price'>
        {formatPriceNum(purchasePrice)} <span>RSD</span>
      </p>
      <p className='purchase--articals-info'>
        <ImInfo
          className='cursor-pointer'
          onClick={() => {
            setIsInfoModalOpen(true);
          }}
        />
      </p>
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => {
          setIsInfoModalOpen(false);
        }}
      >
        <ProfileInfoModal prodId={purchaseNum} />
      </Modal>
    </div>
  );
};
