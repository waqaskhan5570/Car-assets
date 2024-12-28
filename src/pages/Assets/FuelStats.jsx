function FuelStats() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-700">Fuel Usage</div>
        <div className="text-xl text-blue-500">2903.89 Ltr</div>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-700">KM Driven</div>
        <div className="text-xl text-blue-500">2903.89 Ltr</div>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-700">Total Cost</div>
        <div className="text-xl text-green-500">$3,00,290.00</div>
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl font-bold text-gray-700">Top Speed</div>
        <div className="text-xl text-red-500">5.2K</div>
      </div>
    </div>
  );
}

export default FuelStats;
