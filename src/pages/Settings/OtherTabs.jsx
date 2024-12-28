import PropTypes from "prop-types";

function OtherTabs({ title }) {
  return (
    <div className="max-w-xs w-full bg-white shadow-lg rounded-lg p-4 mb-4 space-y-3">
      <h1 className="capitalize">{title}</h1>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">New Message</h3>
        <span className="text-sm text-gray-500">2 hours ago</span>
      </div>

      <p className="text-sm text-gray-600">
        You have a new message from John Doe. Check it out in your inbox.
      </p>

      <button className="w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        View Message
      </button>
    </div>
  );
}

OtherTabs.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OtherTabs;
