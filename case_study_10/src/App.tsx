// 
// import moment from "moment";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Admin = lazy(() => import("./Admin"));

// console.log(moment().format());
function App() {
  return (
    <Router>
      <div>
        <h1>My App</h1>

        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>

        <Suspense fallback={<div>Loading Admin...</div>}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;