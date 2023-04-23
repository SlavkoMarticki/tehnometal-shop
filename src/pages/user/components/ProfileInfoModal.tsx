import { useEffect, useState } from 'react';
import useStore from '../../../hooks/useStore';
import ProfileComponent from './ProfileComponent';

interface IProfileInfoModalProps {
  prodId: string;
}

export const ProfileInfoModal = (
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
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (data.length === 0) {
    return <div></div>;
  }
  return <ProfileComponent data={data} />;
};
