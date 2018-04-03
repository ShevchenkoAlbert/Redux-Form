import {NotificationManager} from 'react-notifications';

export const createNotification = (type, message) => {
  switch (type) {
    case 'success':
      NotificationManager.success(message, 'Success', 10000);
      break;
    case 'error':
      NotificationManager.error(message, 'Error!', 10000);
      break;
    case 'successForm':
       NotificationManager.success(message, 'Success', 10000);
      break;
    case 'warning':
      NotificationManager.warning(message, 'Warning', 5000);
      break;
      default: 
			return message
  }
};
