import { useDesignHubStore } from "../store/index";

function NotificationsPanel() {
  // Subscribe only to notifications state
  const notifications = useDesignHubStore(
    (state) => state.notifications
  );

  // Subscribe only to actions
  const addNotification = useDesignHubStore(
    (state) => state.addNotification
  );
  const markAsRead = useDesignHubStore(
    (state) => state.markAsRead
  );
  const clearNotifications = useDesignHubStore(
    (state) => state.clearNotifications
  );

  // Derive unread notifications
  const unreadNotifications = notifications.filter(
    (notification) => !notification.read
  );

  return (
    <div>
      <h2>Notifications</h2>

      <button
        onClick={() =>
          addNotification("New notification")
        }
      >
        Add Notification
      </button>

      <button onClick={clearNotifications}>
        Clear All
      </button>

      {unreadNotifications.length === 0 && (
        <p>No unread notifications</p>
      )}

      <ul>
        {unreadNotifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button
              onClick={() =>
                markAsRead(notification.id)
              }
            >
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsPanel;