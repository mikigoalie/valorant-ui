import { notifications } from '@mantine/notifications';
import NotificationStyles from './Notification.module.css'

export function NRYNotification() {
  return (
    notifications.show({
        withCloseButton: true,
        autoClose: 3000,
        title: "VALORANT UI",
        message: 'This feature is not ready yet!',
        classNames: NotificationStyles,
        color: "orange",
        loading: false,
    })
  )
}
