import Card from "./components/Card";
import removeIcon from "/assets/images/icon-remove.svg";

function App() {
  return (
    <main>
      <header className="bg-[#5DA5A4] bg-[url('/assets/images/bg-header-mobile.svg')] md:bg-[url('/assets/images/bg-header-desktop.svg')] h-24 md:h-32"></header>
      <section className="w-11/12 md:w-4/6 mx-auto flex justify-between flex-wrap gap-2 bg-white p-6 shadow-lg -mt-8">
        <div className="flex gap-8">
          <div className="flex flex-nowrap items-center">
            <p className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer">
              Frontend
            </p>
            <img
              src={removeIcon}
              alt="Clear filter with frontend"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </div>
          <div className="flex flex-nowrap items-center">
            <p className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer">
              CSS
            </p>
            <img
              src={removeIcon}
              alt="Clear filter with CSS"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </div>
          <div className="flex flex-nowrap items-center">
            <p className="text-cyan-600 text-sm bg-[#EEF7F6] font-semibold px-1 py-0.5 cursor-pointer">
              JavaScript
            </p>
            <img
              src={removeIcon}
              alt="Clear filter with Javascript"
              className="bg-cyan-600 p-1 cursor-pointer hover:bg-black"
            />
          </div>
        </div>
        <p className="text-cyan-600 font-semibold hover:underline cursor-pointer">
          Clear
        </p>
      </section>
      <section className="w-11/12 md:w-4/6 mx-auto flex flex-col my-8">
        <Card />
      </section>
    </main>
  );
}

export default App;
