import { useContext } from "react";
import removeIcon from "/assets/images/icon-remove.svg";
import { filterContext } from "../../FilterContext";

export default function Filter() {
  const { filterArr, clearFilter, restFilter } = useContext(filterContext);

  let filterItems;
  if (filterArr !== undefined) {
    filterItems = filterArr.map((item) => (
      <div key={item} className="flex">
        <p className="text-cyan-600 text-sm bg-[#EEF7F6] focus:bg-cyan-700 focus:text-white font-semibold px-1 py-0.5 cursor-pointer">
          {item}
        </p>
        <button className="cursor-pointer" onClick={() => clearFilter(item)}>
          <img
            src={removeIcon}
            alt="Clear filter with frontend"
            className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
          />
        </button>
      </div>
    ));
  }
  return (
    <>
      {filterArr.length > 0 ? (
        <section className="w-11/12 md:w-4/6 mx-auto bg-white p-6 shadow-lg -mt-8 flex justify-between">
          <div className="flex gap-6">{filterItems}</div>
          <button
            onClick={restFilter}
            className="text-cyan-600 font-semibold hover:underline cursor-pointer border-0"
          >
            Clear
          </button>
        </section>
      ) : null}
    </>
  );
}
