import { useContext } from 'react';
import { NotificationContext } from '../context';

interface IUseNotificationReturnType {
  showSuccessPopup: (message: string) => void;
  showErrorPopup: (message: string) => void;
  showInfoPopup: (message: string) => void;
  showWarningPopup: (message: string) => void;
}

export const useNotification = (): IUseNotificationReturnType => {
  const { addNotification } = useContext<any>(NotificationContext);

  const showSuccessPopup = (message: string): void => {
    addNotification({ message, type: 'success', isOpen: true });
  };

  const showWarningPopup = (message: string): void => {
    addNotification({ message, type: 'warning', isOpen: true });
  };

  const showInfoPopup = (message: string): void => {
    addNotification({ message, type: 'info', isOpen: true });
  };

  const showErrorPopup = (message: string): void => {
    addNotification({ message, type: 'error', isOpen: true });
  };

  return {
    showSuccessPopup,
    showWarningPopup,
    showInfoPopup,
    showErrorPopup
  };
};
