import { AlertColor } from '@mui/material';

export interface INotification {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  isOpen: boolean;
}

export interface INotificationContextType {
  notifications: INotification | null;
  addNotification: (notification: INotification) => void;
}

export interface ISnackbarProps {
  open: boolean;
  message: string;
  onClose?: () => void;
  type: AlertColor | undefined;
}
