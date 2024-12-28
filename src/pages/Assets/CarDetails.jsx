import StackedCircles from "../../assets/images/StackedCircles.jsx";
function CarDetails() {
  return (
    <div className="relative w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        2022 Mercedes Benz
      </h2>

      {/* Car Image */}
      <div className="flex justify-center relative">
        <img
          src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" // Replace with the actual path to your car image
          alt="Car"
          className="w-64 h-auto"
        />
      </div>

      {/* Stacked Circles SVG */}
      <StackedCircles />
    </div>
  );
}

export default CarDetails;
