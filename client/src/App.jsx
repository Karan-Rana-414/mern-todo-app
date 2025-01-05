import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/Signup";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); 
  const token = localStorage.getItem("token");
  const isUserAuthenticated = isAuthenticated || !!token; 

  const ProtectedRoute = ({ element }) => {
    return isUserAuthenticated ? element : <Navigate to="/" replace />;
  };

  const PublicRoute = ({ element }) => {
    return isUserAuthenticated ? <Navigate to="/todos" replace /> : element;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute element={<LoginPage />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignupPage />} />} />
        <Route path="/todos" element={<ProtectedRoute element={<TodoPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;
