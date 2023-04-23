import React, { useEffect, useState } from 'react';
import './profile.css';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react';
import { storage } from '../../common';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
import ProfilePageContent from './components/ProfilePageContent';
import { useLoader } from '../../hooks';

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
  const { setIsLoading } = useLoader();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      } catch (error) {
        // TODO: add err handling
        console.log(error);
      }
    };

    fetchData();

    return () => {
      setUser(null);
    };

    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (user == null) {
    return <div className='full'></div>;
  }

  return (
    <ProfilePageContent
      user={user}
      imageUrl={imageUrl}
    />
  );
});
