function AvailableCars() {
  const cars = [
    { name: "Toyota Corolla", distance: "15km" },
    { name: "Kia - Picanto", distance: "20km" },
    { name: "Suzuki", distance: "5km" },
    { name: "Honda City", distance: "50km" },
    { name: "Mercedes", distance: "2km" },
  ];

  return (
    <div className="bg-white rounded-[14px] py-[20px] px-[18px] shadow-sm w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Cars</h2>
      <ul className="space-y-2">
        {cars.map((car, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
          >
            <span className="font-medium text-gray-800">{car.name}</span>
            <span className="text-gray-500">{car.distance}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        See All
      </button>
    </div>
  );
}

export default AvailableCars;
