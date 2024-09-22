import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import PropTypes from 'prop-types';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 mr-4">
          <FiMenu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Welcome, Admin</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">42 New</div>
        <div className="relative">
          <input type="text" placeholder="Search..." className="border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 relative">
          <FiBell size={24} />
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </button>
        <button className="text-gray-500 hover:text-indigo-600 transition-colors duration-200">
          <FiUser size={24} />
        </button>
      </div>
    </div>
  );
};
TopBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default TopBar;
