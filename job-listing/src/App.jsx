import Card from "./components/Card";
import Filter from "./components/Header";
import { useState, useEffect } from "react";
import data from "/data";
import { filterContext } from "../FilterContext";

function App() {
  const [filterArr, setFilterArr] = useState([]);
  const [allData, setAllData] = useState(data);
  const [filterData, setFilterData] = useState(data);

  function filterItem(item) {
    if (!filterArr.includes(item)) {
      const updated = [...filterArr, item];
      setFilterArr(updated);
    }
  }

  function clearFilter(jobItem) {
    const updated = filterArr.filter((item) => item !== jobItem);
    setFilterArr(updated);
  }

  function restFilter() {
    setFilterArr([]);
  }

  useEffect(() => {
    if (filterArr.length === 0) {
      setFilterData(allData);
      setAllData(allData);
    } else {
      const filtered = allData.filter((item) => {
        const allTags = [
          item.role,
          item.level,
          ...item.languages,
          ...item.tools,
        ];
        return filterArr.every((f) => allTags.includes(f));
      });
      setFilterData(filtered);
    }
  }, [filterArr, allData]);
  return (
    <filterContext.Provider
      value={{ filterArr, filterData, filterItem, clearFilter, restFilter }}
    >
      <main>
        <header className="bg-[#5DA5A4] bg-[url('/assets/images/bg-header-mobile.svg')] md:bg-[url('/assets/images/bg-header-desktop.svg')] h-24 md:h-32"></header>
        <Filter />
        <section className="w-11/12 md:w-4/6 mx-auto flex flex-col my-8">
          <Card />
        </section>
      </main>
    </filterContext.Provider>
  );
}

export default App;
