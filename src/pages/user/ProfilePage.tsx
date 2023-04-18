import React from 'react';
import './profile.css';
import { Button } from '../../components';
import { ImInfo } from 'react-icons/im';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react';

export default observer(function ProfilePage(): React.ReactElement | null {
  const {
    userStore: { user }
  } = useStore();

  const date = new Date(user?.dateOfBirth);
  const dateString = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} `;

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
                src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
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
                  <h3 className='profile--value'>{dateString}</h3>
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
            {user.purchases == null ? (
              <h1 className='flex justify-center align-center no-prev-purchases'>
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
                  <div className='profile--purchases-item'>
                    <p className='purchase--num'>1</p>
                    <p className='purchase--articals-num'>11</p>
                    <p className='purchase--articals-price'>175$</p>
                    <p className='purchase--articals-info'>
                      <ImInfo />
                    </p>
                  </div>
                  <div className='profile--purchases-item'>
                    <p className='purchase--num'>1</p>
                    <p className='purchase--articals-num'>11</p>
                    <p className='purchase--articals-price'>175$</p>
                    <p className='purchase--articals-info'>
                      <ImInfo />
                    </p>
                  </div>
                  <div className='profile--purchases-item'>
                    <p className='purchase--num'>1</p>
                    <p className='purchase--articals-num'>11</p>
                    <p className='purchase--articals-price'>175$</p>
                    <p className='purchase--articals-info'>
                      <ImInfo />
                    </p>
                  </div>
                  <div className='profile--purchases-item'>
                    <p className='purchase--num'>1</p>
                    <p className='purchase--articals-num'>11</p>
                    <p className='purchase--articals-price'>175$</p>
                    <p className='purchase--articals-info'>
                      <ImInfo />
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
