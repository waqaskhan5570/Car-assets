import PropTypes from "prop-types";

function Header({ setIsSidebarOpen }) {
  const handleSideBarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={handleSideBarOpen}
        >
          <i className="icon-menu"></i>
        </button>
        <input
          type="text"
          placeholder="Search or type"
          className="bg-gray-100 rounded-lg px-4 py-2 text-sm w-full max-w-md"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <i className="icon-notification"></i>
        </button>
        <img
          src="/user-avatar.jpg"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
