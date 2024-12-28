import CarTop from "../../assets/images/car-top.png";
function FuelStats() {
  return (
    <div className="bg-primary-blue text-white rounded-xl py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="sm:border-r sm:border-[#579BFF]">
          <p>Fuel Usage</p>
          <h3>2903.89 Ltr</h3>
        </div>
        <div>
          <p>KM Driven</p>
          <h3>2903.89 Ltr</h3>
        </div>
        <div className="sm:border-r sm:border-[#579BFF]">
          <p>Total Cost</p>
          <h3>$3,00,290.00</h3>
        </div>
        <div>
          <p>Top Speed</p>
          <h3>$5.2K</h3>
        </div>
      </div>
      <div className="relative -mb-52">
        <img src={CarTop} alt="Car" className="w-full" />
      </div>
    </div>
  );
}

export default FuelStats;
