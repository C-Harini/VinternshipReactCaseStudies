import NotificationList from "./components/notificationList";
import useNotificationStore from "./store/notificationStore";

function App() {
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );
  const clearNotifications = useNotificationStore(
    (state) => state.clearNotifications
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification System</h1>

      <button
        onClick={() =>
          addNotification("New info message", "info")
        }
      >
        Add Info
      </button>

      <button
        onClick={() =>
          addNotification("Something went wrong!", "error")
        }
      >
        Add Error
      </button>

      <button
        onClick={() =>
          addNotification("Operation successful!", "success")
        }
      >
        Add Success
      </button>

      <button onClick={clearNotifications}>
        Clear All
      </button>

      <hr />

      <NotificationList />
    </div>
  );
}

export default App;