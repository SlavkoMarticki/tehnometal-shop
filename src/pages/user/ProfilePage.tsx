import React, { useEffect, useState } from 'react';
import './profile.css';
import { Button } from '../../components';
import { ImInfo } from 'react-icons/im';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react';
import { formatPriceNum } from '../../utils';
import { Modal } from '../../portals';
import { storage } from '../../common';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
export default observer(function ProfilePage(): React.ReactElement | null {
  const [user, setUser] = useState<any | null>(null);
  const { userStore } = useStore();

  const [imageUrl, setImageUrl] = useState<string>('');
  const {
    userStore: { getUserById }
  } = useStore();
  const imagesListRef = ref(
    storage,
    `tehnometal-shop/profile/${userStore.user?.email}`
  );

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getUserById();
        if (response.success) {
          const date = new Date(response.data.dateOfBirth);

          listAll(imagesListRef).then((res: any) => {
            res.items.forEach((item: any) => {
              getDownloadURL(item).then((url: any) => {
                setImageUrl(url);
              });
            });
          });
          const dateString = `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()} `;
          response.data.dateOfBirth = dateString;
          setUser(response.data);
        }
      } catch (error) {
        // TODO: add err handling
        console.log(error);
      }
    };

    fetchData();

    return () => {
      setUser(null);
    };
  }, []);

  if (user == null) {
    return null;
  }

  return (
    <div className='full profile'>
      <div className='profile--container'>
        <div className='profile--group'>
          <div className='profile--group-item profile--group__user'>
            <div className='flex flex-column justify-center text-center align-center gap-20 pad-2'>
              <img
                className='profile--user-pic'
                src={
                  imageUrl.length === 0
                    ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    : imageUrl
                }
                alt='profile img'
              />
              <h1 className='profile--user-name'>{user.username}</h1>
              <h2 className='profile--user-email'>{user.email}</h2>
              <Button className='profile--edit-btn'>Edit</Button>
            </div>
            <Button className='delete--acc-btn'>Delete Profile</Button>
          </div>
          <div className='profile--group-item profile--group__info'>
            <div className='profile--group-grid'>
              <div className='profile--user__info'>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>Name: </p>
                  <h3 className='profile--value'>{user.username}</h3>
                </div>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>E-mail: </p>
                  <h3 className='profile--value'>{user.email}</h3>
                </div>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>Date of birth: </p>
                  <h3 className='profile--value'>{user.dateOfBirth}</h3>
                </div>
              </div>
              <div className='profile--user__purchase-info'>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>Money spent: </p>
                  <h3 className='profile--value'>{user.moneySpent}</h3>
                </div>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>Average bill price: </p>
                  <h3 className='profile--value'>{user.averageBillPrice}</h3>
                </div>
              </div>
            </div>
            <div className='profile--break-line'></div>
          </div>
          <div className='profile--group-item profile--group__purchases'>
            <h1 className='profile--purchase-title'>Previous purchases</h1>
            {user.orders == null ? (
              <h1 className='flex justify-center align-center no-prev-purchases'>
                {/* TODO: add empty orders component */}
                There is no previous purchases
              </h1>
            ) : (
              <div className='profile--purchases-wrap'>
                <div className='profile--purchases-labels'>
                  <h3 className='profile--purchases-label'>Purchase Num</h3>
                  <h3 className='profile--purchases-label'>Articals Num</h3>
                  <h3 className='profile--purchases-label'>Price</h3>
                  <h3 className='profile--purchases-label'>Info</h3>
                </div>
                <div className='profile--purchases-items'>
                  {user.orders.map((order: any) => {
                    return (
                      <OrderProfileItem
                        key={order.id}
                        purchaseNum={order.data.id}
                        purchasePrice={order.data.amount}
                        purchaseQuantity={order.data.purchaseQuantity}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

interface IOrderProfileItemProps {
  purchaseNum: string;
  purchaseQuantity: number;
  purchasePrice: number;
}

const OrderProfileItem = (
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

interface IProfileInfoModalProps {
  prodId: string;
}

const ProfileInfoModal = (
  props: IProfileInfoModalProps
): React.ReactElement => {
  const { prodId } = props;
  const [data, setData] = useState<any>([]);
  const {
    userStore: { getOrderById, user }
  } = useStore();

  useEffect(() => {
    try {
      const fetchData = async (): Promise<void> => {
        const response = await getOrderById(user.uid, prodId);
        if (response.success) {
          setData(response.data);
        }
      };

      fetchData();
    } catch (error) {}
    return () => {
      setData([]);
    };
  }, []);

  if (data.length === 0) {
    return <div></div>;
  }
  return (
    <div className='info--modal'>
      <h1 className='cart--success-title-main uppercase'>
        Transaction details:
      </h1>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Name: </p>
        <p className='cart--success-info'>{data.name}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Status: </p>
        <p className='cart--success-info c-success'>{data.status}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Amount: </p>
        <p className='cart--success-info'>{formatPriceNum(data.amount)} RSD</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Payment Method: </p>
        <p className='cart--success-info uppercase'>{data.paymentMethod[0]}</p>
      </div>
      <div className='cart--success-item flex'>
        <p className='cart--success-label'>Transaction Date: </p>
        {/*   <p className='cart--success-info'>{dateString}</p> */}
      </div>
      <div className='cart--success-item p-1 flex flex-column'>
        <p className='cart--success-label'>Billing Address: </p>
        <div className='cart--success-item-address '>
          <div className='flex'>
            <p className='cart--success-label-sml'>City: </p>
            <p className='cart--success-info-sml'>{data.billingAddress.city}</p>
          </div>
          <div className='flex'>
            <p className='cart--success-label-sml'>Country: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.country}
            </p>
          </div>
          <div className='flex'>
            <p className='cart--success-label-sml'>Address: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.line1}
            </p>
          </div>
          {data.billingAddress.line1 != null &&
            data.billingAddress.line1.length !== 0 && (
              <div className='flex'>
                <p className='cart--success-label-sml'>Appartmant: </p>
                <p className='cart--success-info-sml'>
                  {data.billingAddress.line2}
                </p>
              </div>
            )}
          <div className='flex'>
            <p className='cart--success-label-sml'>Postal Code: </p>
            <p className='cart--success-info-sml'>
              {data.billingAddress.postal_code}
            </p>
          </div>
        </div>
      </div>
      {data.shippingAddress !== null && (
        <div className='cart--success-item flex flex-column'>
          <p className='cart--success-label'>Shipping Address: </p>
          <div className='cart--success-item-address '>
            <div className='flex'>
              <p className='cart--success-label-sml'>City: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.city}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Country: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.country}
              </p>
            </div>
            <div className='flex'>
              <p className='cart--success-label-sml'>Address: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.line1}
              </p>
            </div>
            {data.shippingAddress.line1 != null &&
              data.shippingAddress.line1.length !== 0 && (
                <div className='flex'>
                  <p className='cart--success-label-sml'>Appartmant: </p>
                  <p className='cart--success-info-sml'>
                    {data.shippingAddress.line2}
                  </p>
                </div>
              )}
            <div className='flex'>
              <p className='cart--success-label-sml'>Postal Code: </p>
              <p className='cart--success-info-sml'>
                {data.shippingAddress.postal_code}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
