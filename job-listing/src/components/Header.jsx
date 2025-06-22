import removeIcon from "/assets/images/icon-remove.svg";

export default function Filter({ handleFilterChange, handleClear }) {
  return (
    <section className="w-11/12 md:w-4/6 mx-auto flex justify-between flex-wrap gap-2 bg-white p-6 shadow-lg -mt-8">
      <div className="flex gap-8">
        <div className="flex flex-nowrap items-center">
          <button
            onClick={() => handleFilterChange("role", "Frontend")}
            className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer"
          >
            Frontend
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClear("role", null)}
          >
            <img
              src={removeIcon}
              alt="Clear filter with frontend"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </button>
        </div>
        <div className="flex flex-nowrap items-center">
          <button
            onClick={() => handleFilterChange("language", "CSS")}
            className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer"
          >
            CSS
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClear("role", null)}
          >
            <img
              src={removeIcon}
              alt="Clear filter with CSS"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </button>
        </div>
        <div className="flex flex-nowrap items-center">
          <button
            onClick={() => handleFilterChange("language", "JavaScript")}
            className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer"
          >
            JavaScript
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClear("role", null)}
          >
            <img
              src={removeIcon}
              alt="Clear filter with Javascript"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </button>
        </div>
      </div>
      <button
        onClick={() => handleClear("role", null)}
        className="text-cyan-600 font-semibold hover:underline cursor-pointer border-0"
      >
        Clear
      </button>
    </section>
  );
}
