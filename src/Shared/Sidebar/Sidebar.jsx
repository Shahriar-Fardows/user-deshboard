import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBarChart, FiUsers, FiMail, FiSettings, FiHelpCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: FiHome, text: "Dashboard" },
    { to: "/analytics", icon: FiBarChart, text: "Analytics" },
    { to: "/users", icon: FiUsers, text: "Users" },
    { to: "/messages", icon: FiMail, text: "Messages" },
    { to: "/settings", icon: FiSettings, text: "Settings" },
    { to: "/help", icon: FiHelpCircle, text: "Help & Support" },
  ];

  return (
    <div className={`bg-indigo-800 text-white h-screen ${isOpen ? 'w-64' : 'w-0'} fixed top-0 left-0 overflow-y-auto transition-all duration-300 ease-in-out`}>
      <div className="p-5">
        {isOpen && (
          <>
            <h2 className="text-2xl font-bold mb-5 text-indigo-200">Admin Panel</h2>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.to} 
                      className={`flex items-center py-2 px-4 rounded transition-colors duration-200 ${
                        location.pathname === item.to ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                      }`}
                    >
                      <item.icon className="mr-3" />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;