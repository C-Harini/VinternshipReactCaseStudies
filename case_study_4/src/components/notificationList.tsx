import useNotificationStore from "../store/notificationStore";

function NotificationList() {
  const notifications = useNotificationStore(
    (state) => state.notifications
  );
  const markAsRead = useNotificationStore(
    (state) => state.markAsRead
  );

  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  );

  return (
    <div>
      <h2>Unread Notifications</h2>

      {unreadNotifications.length === 0 && (
        <p>No unread notifications</p>
      )}

      <ul>
        {unreadNotifications.map((notification) => (
          <li key={notification.id}>
            <strong>{notification.type.toUpperCase()}</strong>:{" "}
            {notification.message}
            <button
              onClick={() => markAsRead(notification.id)}
            >
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationList;