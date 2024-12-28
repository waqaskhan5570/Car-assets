import AvailableCars from "./AvailableCars";
import CarDetails from "./CarDetails";
import FuelStats from "./FuelStats";
import Notes from "./Notes";

function Assets() {
  return (
    <div>
      <h1>Assets</h1>
      {/* UI */}
      {/* <div className="flex flex-wrap gap-6 mt-5">
        <div className="w-full md:w-1/3">
          <FuelStats />
        </div>
        <div className="flex flex-wrap md:w-2/3">
          <CarDetails />
          <div className="flex flex-wrap justify-between gap-6 w-full">
            <AvailableCars />
            <Notes />
          </div>
        </div>
      </div> */}

      <div className="flex flex-wrap mt-5 gap-6 w-full">
        {/* FuelStats and CarDetails should be in the same row */}
        <div className="w-full md:w-1/3">
          <FuelStats />
        </div>
        <div className="md:w-3/5 flex flex-wrap gap-6">
          {/* CarDetails stays in the same row with AvailableCars and Notes */}
          <CarDetails />
          <div className="flex flex-wrap justify-between gap-6 w-full">
            <AvailableCars />
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
