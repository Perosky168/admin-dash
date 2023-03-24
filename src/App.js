import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/login";
import Users from "./pages/users.js";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/protected";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin-dashboard"
            element={
              <Protected isAuthenticated={isAuthenticated}>
                <Dashboard />
              </Protected>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
