import Card from "./components/Card";
import Filter from "./components/Header";
import { useSearchParams } from "react-router-dom";
import data from "/data";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterChange(key, value) {
    setSearchParams((prevType) => {
      const newSearchParams = new URLSearchParams(prevType);
      if (value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, value);
      }
      return newSearchParams;
    });
  }
  function handleClear() {
    setSearchParams();
  }
  const filterRoleParam = searchParams.get("role");
  const filterLanguageParam = searchParams.get("language");

  let displayedData = data;

  if (filterRoleParam) {
    displayedData = displayedData.filter(
      (jobdata) => jobdata.role === filterRoleParam,
    );
  }

  // Apply language filter if present (corrected logic)
  if (filterLanguageParam) {
    displayedData = displayedData.filter((jobdata) =>
      jobdata.languages.some((lang) => lang === filterLanguageParam),
    );
  }
  return (
    <main>
      <header className="bg-[#5DA5A4] bg-[url('/assets/images/bg-header-mobile.svg')] md:bg-[url('/assets/images/bg-header-desktop.svg')] h-24 md:h-32"></header>
      <Filter
        handleFilterChange={handleFilterChange}
        handleClear={handleClear}
      />
      <section className="w-11/12 md:w-4/6 mx-auto flex flex-col my-8">
        <Card data={displayedData} />
      </section>
    </main>
  );
}

export default App;
