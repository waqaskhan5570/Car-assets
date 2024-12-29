import PropTypes from "prop-types";
import UserAvatar from "../../assets/images/avatar.jpeg";

function Header({ setIsSidebarOpen }) {
  const handleSideBarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <header className="bg-white shadow p-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={handleSideBarOpen}
        >
          <i className="icon-menu"></i>
        </button>
        <input
          type="text"
          placeholder="Search or type"
          className="bg-gray-100 rounded-lg px-4 py-2 text-sm w-full"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button>
          <i className="text-lg icon-notification"></i>
        </button>
        <img
          src={UserAvatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
