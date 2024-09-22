import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Login from './Log/Login/Login';
import Sidebar from './Shared/Sidebar/Sidebar';
import TopBar from './Shared/TopBar/TopBar';

const Root = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    const storedAuth = localStorage.getItem('isAuthenticated'); // Check for authentication status
    if (storedRole) {
      setUserRole(storedRole);
      setIsAuthenticated(storedAuth === 'true'); // Set authentication status based on localStorage
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} userRole={userRole} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <TopBar toggleSidebar={toggleSidebar} setIsAuthenticated={setIsAuthenticated} userRole={userRole} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;
