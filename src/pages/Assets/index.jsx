import { useState } from "react";
import AvailableCars from "./AvailableCars";
import CarDetails from "./CarDetails";
import FuelStats from "./FuelStats";
import Notes from "./Notes";
import { AVAILABLE_CARS } from "../../utils/constants";

function Assets() {
  const [selectedCar, setSelectedCar] = useState(AVAILABLE_CARS?.[0]);

  return (
    <div>
      <h1>Assets</h1>
      {/* Details */}
      <div className="flex flex-wrap mt-5 gap-6 w-full">
        <div className="w-full md:w-1/3">
          <FuelStats data={selectedCar} />
        </div>
        <div className="md:w-3/5 flex flex-wrap gap-6">
          <CarDetails
            title={selectedCar?.modal}
            image={selectedCar?.image || ""}
          />
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-full">
            <div>
              <Notes />
            </div>
            <div>
              <AvailableCars
                setSelectedCar={setSelectedCar}
                selectedCar={selectedCar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
