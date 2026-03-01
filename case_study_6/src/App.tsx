import UserProfile from "./components/UserProfile";
import FileList from "./components/FileList";
import NotificationsPanel from "./components/NotificationsPanel";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>DesignHub</h1>

      <section style={{ marginBottom: "20px" }}>
        <UserProfile />
      </section>

      <section style={{ marginBottom: "20px" }}>
        <FileList />
      </section>

      <section>
        <NotificationsPanel />
      </section>
    </div>
  );
}

export default App;