import PropTypes from "prop-types";

function SelectField({ label, options, name, icon }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm text-secondary-gray-500 font-medium mb-[10px]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          name={name}
          className="appearance-none text-secondary-gray-500 block w-full bg-white  border border-secondary-gray-600 rounded-[10px] px-[14px] py-3 pl-9 focus:outline-none focus:gray-100 focus:border-gray-100 "
        >
          {options?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
        <span
          className={`absolute inset-y-0 left-3 flex items-center  text-gray-500 ${icon}`}
        ></span>
      </div>
    </div>
  );
}

SelectField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SelectField;
