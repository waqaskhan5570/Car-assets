import PropTypes from "prop-types";
import StackedCircles from "../../assets/images/StackedCircles.jsx";

function CarDetails({ title, image }) {
  return (
    <div className="relative w-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

      {/* Car Image */}
      <div className="flex justify-center relative">
        <img src={image} alt={`${title} image`} className="w-64 h-auto" />
      </div>

      {/* Stacked Circles SVG */}
      <StackedCircles />
    </div>
  );
}

CarDetails.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CarDetails;
