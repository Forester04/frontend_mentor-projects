
import './App.css'
import logo from './assets/images/logo-output.svg'
import iconSun from './assets/images/icon-sun.svg'

function App() {


  return (
    <main>
      <header>
        <div>
          <img src={logo} alt="Extensions logo" className='logo' aria-label='Extensions logo'/>
        </div>
        <div className="theme">
          <img src={iconSun} alt="light mode theme icon" aria-label="light theme mode"/>
        </div>
      </header>
      <section className='list-selection'>
        <h1>Extensions List</h1>
        <div className="btn-selection">
          <button>All</button>
          <button>Active</button>
          <button>Inactive</button>
        </div>
      </section>
    </main>
  )
}


export default App
