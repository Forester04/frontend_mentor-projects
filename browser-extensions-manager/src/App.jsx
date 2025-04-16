

import data from './data/data.json'
import logo from './assets/images/logo-output.svg'
import iconSun from './assets/images/icon-sun.svg'
import './App.css'


function App() {

  const extensionElement = data.map(extension => {
    return (
      <div className='card'>
        <div className='card-info'>
          <img src={extension.logo} alt="Extension Logo" aria-label='Extension label' />
          <div>
            <h2>{extension.name}</h2>
            <p>{extension.description}</p>
          </div>
        </div>
        <div className='card-interaction'>
          <button>Remove</button>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    )
  })


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
      <section className='card-section'>
        {extensionElement}
      </section>
    </main>
  )
}


export default App
