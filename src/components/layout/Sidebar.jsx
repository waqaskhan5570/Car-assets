import PropTypes from "prop-types";

function Sidebar({ isSidebarOpen }) {
  const menuItems = [
    { title: "Dashboard", icon: "icon-dashboard-icon" },
    { title: "Assets", icon: "icon-dashboard-icon" },
    { title: "Bookings", icon: "icon-car" },
    { title: "Sell Cars", icon: "icon-dashboard-icon" },
    { title: "Buy Cars", icon: "icon-dashboard-icon" },
    { title: "Services", icon: "icon-dashboard-icon" },
    { title: "Calendar", icon: "icon-dashboard-icon" },
    { title: "Messages", icon: "icon-message-1" },
  ];
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-5 ps-4 pe-4 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform md:relative md:flex flex-col`}
    >
      <div className="flex items-center space-x-2 mb-8 mt-5">
        <img src="/src/assets/logo.svg" alt="Logo" className="h-8" />
        <h2>Test</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems?.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 hover:text-gray-900 flex items-center cursor-pointer"
            >
              <i className={`${item?.icon} mr-3 text-lg`}></i> {item?.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 space-y-4">
        <button className="text-gray-600 hover:text-gray-900 flex items-center">
          <i className="icon-settings mr-3"></i> Settings
        </button>
        <button className="text-gray-600 hover:text-gray-900 flex items-center">
          <i className="icon-logout mr-3"></i> Log out
        </button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Sidebar;