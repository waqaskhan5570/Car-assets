import PropTypes from "prop-types";
import { NavLink } from "react-router";
import { ROUTES } from "../../utils/routes";

function Sidebar({ isSidebarOpen, setIsSideBarOpen }) {
  const menuItems = [
    { title: "Dashboard", icon: "icon-dashboard-icon" },
    { title: "Assets", icon: "icon-doughnut", path: ROUTES.assets },
    { title: "Bookings", icon: "icon-car" },
    { title: "Sell Cars", icon: "icon-bag" },
    { title: "Buy Cars", icon: "icon-cart" },
    { title: "Services", icon: "icon-fencing" },
    { title: "Calendar", icon: "icon-calendar" },
    { title: "Messages", icon: "icon-comment" },
  ];
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-5 ps-4 pe-4 transform border-r border-gray-100 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform lg:relative lg:flex flex-col`}
    >
      <div className="flex justify-between items-center mb-8 mt-5">
        <div className="flex space-x-2">
          <img src="/src/assets/logo.svg" alt="Logo" className="h-8" />
          <h2>Test</h2>
        </div>
        <button className="lg:hidden">
          <span
            className="icon-cross cursor-pointer"
            onClick={() => setIsSideBarOpen(false)}
          ></span>
        </button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems?.map((item, index) => (
            <NavLink
              to={item?.path || null}
              key={index}
              isActive={(match) => {
                // Apply 'text-blue-500' if match is true, otherwise default
                return match ? "text-blue-500" : "text-gray-400";
              }}
              className="text-gray-400 hover:text-gray-900 flex items-center cursor-pointer"
            >
              <i className={`${item?.icon} mr-3 text-lg`}></i> {item?.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="mt-8 space-y-4">
        <NavLink
          to={ROUTES.settings}
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <i className="icon-settings mr-3"></i> Settings
        </NavLink>
        <button className="text-gray-600 hover:text-gray-900 flex items-center">
          <i className="icon-sign-out mr-3"></i> Log out
        </button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSideBarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
