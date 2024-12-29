import PropTypes from "prop-types";
import { AVAILABLE_CARS } from "../../utils/constants";
import { formatNumber } from "../../utils/utility-functions";
import { useMemo, useState } from "react";

function AvailableCars({ selectedCar, setSelectedCar }) {
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(!showAll);
  };

  const carsToShow = useMemo(
    () => (showAll ? AVAILABLE_CARS : AVAILABLE_CARS.slice(0, 5)),
    [showAll]
  );
  return (
    <div className="bg-white rounded-[14px] shadow-sm py-[20px] px-[18px] w-full">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium text-black">Available Cars</p>
        <button className="text-secondary-gray-700 font-medium text-xs">
          Assets <span className="ml-1">▼</span>
        </button>
      </div>
      <hr className="my-5" />
      <ul className="space-y-2">
        {carsToShow.map((car, index) => {
          const isSelected = selectedCar?.id === car?.id;
          return (
            <li
              key={index}
              className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer ${
                isSelected ? " text-primary-red" : ""
              }`}
              onClick={() => setSelectedCar(car)}
            >
              <div
                className={`flex items-center text-${
                  !isSelected ? "secondary-gray-700" : "primary-red"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  readOnly
                  className="mr-2"
                />
                <span className="text-[13px] font-medium">{car?.modal} </span>
                <span className="text-[13px]  ms-2">
                  {car?.Driver ? `(${formatNumber(car?.Driver) + "km"})` : ""}
                </span>
              </div>
              <span
                className={`text-md font-medium icon-analyze ${
                  !isSelected ? "text-secondary-gray-700" : ""
                }`}
              ></span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleSeeAll}
        className="mt-5 bg-secondary-red text-white text-sm py-1 px-3 rounded-[5px] hover:bg-secondary-red"
      >
        {showAll ? "See Less" : "See All"}
      </button>
    </div>
  );
}

AvailableCars.propTypes = {
  selectedCar: PropTypes.object.isRequired,
  setSelectedCar: PropTypes.func.isRequired,
};

export default AvailableCars;
