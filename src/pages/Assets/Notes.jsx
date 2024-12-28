function Notes() {
  const notes = [
    {
      date: "Monday, 6th April 2020",
      description: "Book for General Service",
      status: "complete",
    },
    {
      date: "Thursday, 24th October 2021",
      description: "Vehicle on hold due to recall",
      status: "pending",
    },
    {
      date: "Monday, 13th August 2018",
      description: "Maintenance Completed",
      status: "complete",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Notes</h2>
      {notes.map((note, index) => (
        <div
          key={index}
          className={`flex items-center justify-between mb-4 p-3 rounded-md ${
            note.status === "complete" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div>
            <div className="font-semibold">{note.date}</div>
            <div className="text-sm text-gray-600">{note.description}</div>
          </div>
          <div
            className={`px-3 py-1 rounded-md text-white ${
              note.status === "complete" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {note.status.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
