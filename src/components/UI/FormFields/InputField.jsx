import PropTypes from "prop-types";

function InputField({ label, placeholder, type, icon }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm text-secondary-gray-500 font-medium mb-[10px]">
          {label}
        </label>
      )}
      <div className="flex items-center border border-[#E9EAEC] rounded-[10px] px-[14px] py-3">
        {icon && <span className="mr-2 text-gray-500 icon-Component-5"></span>}
        <input
          type={type}
          className=" flex-1 text-secondary-gray-400 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
};

export default InputField;
