import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import ErrorBoundary from "./components/ErrorBoundary";

// Lazy Components
const ProfileSettings = lazy(() => import("./components/ProfileSettings"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Router>
      <div>
        <h1>EduStream</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
        </nav>

        <br />

        {/* Settings Button */}
        <button onClick={() => setShowSettings(true)}>
          Open Settings
        </button>

        {/* Component-Based Lazy Loading */}
        {showSettings && (
          
            <Suspense fallback={<div>Loading Settings...</div>}>
              <ProfileSettings />
            </Suspense>
         
        )}

        {/* Route-Based Lazy Loading */}
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/admin"
            element={
              
                <Suspense fallback={<div>Loading Admin...</div>}>
                  <AdminPanel />
                </Suspense>
              
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;