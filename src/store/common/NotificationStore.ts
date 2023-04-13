import { makeObservable, observable, action } from 'mobx';
import { INotification } from '../../types';

export class NotificationStore {
  notifications: INotification | null = null;

  constructor() {
    makeObservable(this, {
      notifications: observable,
      showSuccessPopup: action,
      removeNotification: action,
      showWarningPopup: action,
      showInfoPopup: action,
      showErrorPopup: action
    });
  }

  addNotification = (notification: INotification): void => {
    this.notifications = notification;
    setTimeout(() => {
      this.removeNotification();
    }, 3000);
  };

  removeNotification = (): void => {
    this.notifications = null;
  };

  showSuccessPopup(message: string): void {
    this.addNotification({ message, type: 'success', isOpen: true });
  }

  showWarningPopup(message: string): void {
    this.addNotification({ message, type: 'warning', isOpen: true });
  }

  showInfoPopup(message: string): void {
    this.addNotification({ message, type: 'info', isOpen: true });
  }

  showErrorPopup(message: string): void {
    this.addNotification({ message, type: 'error', isOpen: true });
  }
}
