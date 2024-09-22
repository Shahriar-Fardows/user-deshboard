import { createBrowserRouter, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Root from "../Root";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Login from "../Log/Login/Login";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const Routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute><Root /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Add other routes here
    ],
  },
]);

export default Routers;
