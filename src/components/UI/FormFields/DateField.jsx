import PropTypes from "prop-types";

function DateField({ label, placeholder }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm text-secondary-gray-500 font-medium mb-[10px]">
          {label}
        </label>
      )}
      <div className="flex items-center border border-secondary-gray-600 rounded-[10px] px-[14px] py-3">
        <span className="mr-2 text-gray-500 icon-Component-5"></span>
        <input
          type="date"
          className=" flex-1 text-secondary-gray-400 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

DateField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

DateField.defaultProps = {
  type: "text",
};

export default DateField;
