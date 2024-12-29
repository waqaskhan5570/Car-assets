import PropTypes from "prop-types";
import StackedCircles from "../../assets/images/StackedCircles.jsx";
import { useState, useEffect } from "react";

function CarDetails({ title, image }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsAnimated(true);

    // Reset animation state after the animation finishes
    const timeout = setTimeout(() => {
      setIsAnimated(false);
    }, 500); // Match duration with the animation duration

    // Cleanup the timeout when component unmounts or re-renders
    return () => clearTimeout(timeout);
  }, [title, image]); // Empty dependency array ensures the effect runs only on mount

  return (
    <div className="relative w-full bg-white shadow-lg rounded-lg p-6">
      <h1 className="font-bold text-gray-800 mb-4">{title}</h1>

      {/* Car Image with rotation animation */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={`${title} image`}
          className={`w-64 h-auto z-10 transition-all duration-500 ease-in-out ${
            isAnimated ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
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
