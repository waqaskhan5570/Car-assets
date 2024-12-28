import { NOTES_LIST, STATUS_CONSTANTS } from "../../utils/constants";

function Notes() {
  return (
    <div className="bg-white rounded-[14px] shadow-sm py-[20px] px-[18px] w-full">
      <h3 className="text-primary-dark">Notes</h3>
      <section>
        {NOTES_LIST.map((note, index) => (
          <div key={index} className="flex justify-start mt-[18px]">
            <div className="me-[14px] w-11 h-11  rounded-full flex items-center justify-center shadow-md">
              <span className={note?.icon || "icon-analyze"}></span>
            </div>

            <div>
              <p className="text-[13px] text-black font-medium">{note?.date}</p>
              <p className="text-[11px] text-secondary-gray-700">
                {note?.description}
              </p>
              {note?.status === STATUS_CONSTANTS.completed ? (
                <p className="px-3 py-1 w-fit rounded-[4px] mt-[10px] bg-secondary-green text-[10px] text-white">
                  Completed
                </p>
              ) : (
                <p className="px-3 py-1 w-fit rounded-[4px] mt-[10px] bg-primary-light text-[10px] text-primary-dark">
                  {note?.statusTime}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Notes;
