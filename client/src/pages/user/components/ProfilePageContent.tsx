import { observer } from 'mobx-react';
import { Pager } from '../../../components';
import { OrderProfileItem } from './OrderProfileItem';
import { useEffect, useState } from 'react';

interface IProfileContentProps {
  imageUrl: string;
  user: any;
}

export default observer(function ProfilePageContent(
  props: IProfileContentProps
): React.ReactElement {
  const { imageUrl, user } = props;

  const [page, setPage] = useState<number>(1);

  const [currentList, setCurrentList] = useState<any>([]);

  useEffect(() => {
    if (user?.orders != null) {
      const startIndex = (page - 1) * 3;
      const endIndex = startIndex + 3;
      setCurrentList(user.orders.slice(startIndex, endIndex));
    } else {
      setCurrentList([]);
    }
    return () => {
      setCurrentList([]);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [page]);

  const handlePageChange = (event: any, value: number): void => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                    ? 'https://spraycoatings.co.uk/wp-content/uploads/2019/04/placeholder-profile-pic.png'
                    : imageUrl
                }
                alt='profile img'
              />
              <h1 className='profile--user-name'>{user.username}</h1>
              <h2 className='profile--user-email'>{user.email}</h2>
            </div>
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
                  <h3 className='profile--value'>
                    {user.moneySpent != null ? user.moneySpent : '--'}
                  </h3>
                </div>
                <div className='flex gap-20 justify-spaceBetween'>
                  <p className='profile--label'>Average bill price: </p>
                  <h3 className='profile--value'>
                    {user.averageBillPrice != null
                      ? user.averageBillPrice
                      : '--'}
                  </h3>
                </div>
              </div>
            </div>
            <div className='profile--break-line'></div>
          </div>
          <div className='profile--group-item profile--group__purchases'>
            <h1 className='profile--purchase-title'>Previous purchases</h1>
            {currentList == null || currentList.length === 0 ? (
              <h1 className='flex justify-center align-center no-prev-purchases'>
                There is no previous purchases
              </h1>
            ) : (
              <div className='profile--purchases-wrap'>
                <div className='profile--purchases-labels'>
                  <h3 className='profile--purchases-label'>Purchase Num</h3>
                  <h3 className='profile--purchases-label'>Price</h3>
                  <h3 className='profile--purchases-label'>Info</h3>
                </div>
                <div className='profile--purchases-items'>
                  {currentList.map((order: any) => {
                    return (
                      <OrderProfileItem
                        key={order.id}
                        purchaseNum={order.data.id}
                        purchasePrice={order.data.amount}
                      />
                    );
                  })}
                  {user.orders != null && (
                    <Pager
                      page={page}
                      count={Math.ceil(user.orders.length / 3)}
                      handleChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
