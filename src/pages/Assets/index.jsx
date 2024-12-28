import AvailableCars from "./AvailableCars";
import CarDetails from "./CarDetails";
import FuelStats from "./FuelStats";
import Notes from "./Notes";

function Assets() {
  return (
    <div>
      <h1>Assets</h1>
      {/* Details */}
      <div className="flex flex-wrap mt-5 gap-6 w-full">
        <div className="w-full md:w-1/3">
          <FuelStats />
        </div>
        <div className="md:w-3/5 flex flex-wrap gap-6">
          <CarDetails />
          <div className="flex flex-wrap justify-between w-full">
            <div className="md:w1/2">
              <Notes />
            </div>
            <div className="md:w1/2">
              <AvailableCars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
