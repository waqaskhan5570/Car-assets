import PropTypes from "prop-types";
import CarTop from "../../assets/images/car-top.png";
function FuelStats({ data }) {
  return (
    <div className="bg-primary-blue text-white rounded-xl py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="sm:border-r sm:border-[#579BFF]">
          <p>Fuel Usage</p>
          <h3>{data?.fuelUsage || 0} Ltr</h3>
        </div>
        <div>
          <p>KM Driven</p>
          <h3>{data?.Driver || 0} km</h3>
        </div>
        <div className="sm:border-r sm:border-[#579BFF]">
          <p>Total Cost</p>
          <h3>${data?.Price || 0}</h3>
        </div>
        <div>
          <p>Top Speed</p>
          <h3>{data?.topSpeed || 0} km/h</h3>
        </div>
      </div>
      <div className="relative -mb-52">
        <img src={CarTop} alt="Car" className="w-full" />
      </div>
    </div>
  );
}

FuelStats.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FuelStats;
