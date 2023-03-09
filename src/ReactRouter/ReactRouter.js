import { useState } from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () =>
    setUser({
      id: "1",
      name: "robin",
      permissions: ["analyze"],
      role: ["admin"],
    });
  const handleLogout = () => setUser(null);

  return (
    <>
      <h1>
        React Router
        {user ? (
          <button onClick={handleLogout}>Sign Out</button>
        ) : (
          <button onClick={handleLogin}>Sign In</button>
        )}
      </h1>

      <Navigation />

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={user} />}>
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="analytics"
            element={
              <ProtectedRoute
                redirectPath="/home"
                isAllowed={!!user && user?.permissions?.includes("analyze")}
              >
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute
                redirectPath="/home"
                isAllowed={!!user && user?.role?.includes("admin")}
              >
                <Admin />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default App;

const Navigation = () => (
  <nav
    style={{
      borderBottom: "solid 1px",
      paddingBottom: "1rem",
      display: "flex",
      gap: "10px",
    }}
  >
    <Link to="/landing">Landing</Link>
    <Link to="/home">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

const Landing = () => {
  return <h2>Landing (Public: anyone can access this page)</h2>;
};

const Home = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};

const Analytics = () => {
  return (
    <h2>
      Analytics (Protected: authenticated user with permission 'analyze'
      required)
    </h2>
  );
};

const Admin = () => {
  return (
    <h2>Admin (Protected: authenticated user with role 'admin' required)</h2>
  );
};

const ProtectedRoute = ({ isAllowed, children, redirectPath = "/landing" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
