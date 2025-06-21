import Card from "./components/Card";

function App() {
  return (
    <main>
      <header className="bg-[#5DA5A4] bg-[url('/assets/images/bg-header-mobile.svg')] md:bg-[url('/assets/images/bg-header-desktop.svg')] sticky top-0 h-32"></header>
      <section className="w-11/12 md:w-4/6 mx-auto flex flex-col my-8">
        <Card />
      </section>
    </main>
  );
}

export default App;
