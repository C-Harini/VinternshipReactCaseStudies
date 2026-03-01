import { useDesignHubStore } from "../store/index";

function UserProfile() {
  // Subscribe only to user state
  const user = useDesignHubStore((state) => state.user);

  // Subscribe only to user actions
  const setUser = useDesignHubStore((state) => state.setUser);
  const clearUser = useDesignHubStore((state) => state.clearUser);

  if (!user) {
    return (
      <div>
        <h2>User</h2>
        <button
          onClick={() =>
            setUser({ id: "u1", name: "Alex" })
          }
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>User</h2>
      <p>Welcome, {user.name}</p>
      <button onClick={clearUser}>
        Logout
      </button>
    </div>
  );
}

export default UserProfile;