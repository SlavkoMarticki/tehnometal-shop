import React, { createContext, useState, useMemo, useCallback } from 'react';
import { INotification, INotificationContextType } from '../../types';
import { CustomSnackbar } from '../../components/snackbar';
import { NotificationStore } from '../../store/common/NotificationStore';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';

const initialNotificationState: INotification = {
  isOpen: false,
  message: '',
  type: undefined
};

export const NotificationContext = createContext<
  INotificationContextType | NotificationStore
>({
  notifications: initialNotificationState,
  addNotification: () => {}
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> =
  observer(function NotificationProvider({
    children
  }: NotificationProviderProps) {
    const [notifications, setNotifications] = useState<INotification>(
      initialNotificationState
    );
    const { notificationStore } = useStore();
    const addNotification = useCallback(
      (notification: INotification, duration: number = 4000): void => {
        setNotifications(notification);

        setTimeout(() => {
          setNotifications({
            isOpen: false,
            message: '',
            type: notification.type
          });
          notificationStore.removeNotification();
        }, duration);
      },
      [notificationStore]
    );

    const contextValue: INotificationContextType = useMemo(
      () => ({
        notifications,
        addNotification
      }),
      [notifications, addNotification]
    );

    return (
      <NotificationContext.Provider value={contextValue}>
        {children}
        <CustomSnackbar
          type={
            notificationStore.notifications !== null
              ? notificationStore.notifications.type!
              : notifications.type!
          }
          message={
            notificationStore.notifications !== null
              ? notificationStore.notifications.message
              : notifications.message
          }
          open={
            notificationStore.notifications !== null
              ? notificationStore.notifications.isOpen
              : notifications.isOpen
          }
        />
      </NotificationContext.Provider>
    );
  });
