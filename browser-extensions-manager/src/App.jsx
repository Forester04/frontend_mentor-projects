
import { useState } from 'react'
import data from './data.json'
import darkLogo from './assets/images/logo-output.svg'
import lightLogo from './assets/images/logo.svg'
import darkIcon from './assets/images/icon-sun.svg'
import lightIcon from './assets/images/icon-moon.svg'

import './App.css'
//import { preview } from 'vite'


function App() {

  const [selectedFilter, setSelectedFilter] = useState("all")


  const [extensionData, setExtensionData] = useState(data)

  const [theme, setTheme] = useState("dark")

  const filteredData = extensionData.filter(extension => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "active") return extension.isActive === true;
    if (selectedFilter === "inactive") return extension.isActive === false;
  });
  

  const extensionElement = filteredData.map(extension => {
    return (
      <div className='card' key={extension.name}>
        <div className='card-info'>
          <img src={extension.logo} alt="Extension Logo" aria-label='Extension label' />
          <div>
            <h2>{extension.name}</h2>
            <p>{extension.description}</p>
          </div>
        </div>
        <div className='card-interaction'>
          <button className="remove-btn" onClick={() => handleRemoveClick(extension.name)}>Remove</button>
          {
            extension.isActive ? 
            <label className="switch" onClick={() => handleToggle(extension.name)}>
              <input type="checkbox" checked={extension.isActive} onChange={() => handleToggle(extension.name)}/>
              <span className="slider round"></span>
            </label> : 
            <label className="switch" onClick={() => handleToggle(extension.name)}>
            <input type="checkbox" checked={extension.isActive} onChange={() => handleToggle(extension.name)}/>
            <span className="slider round"></span>
          </label>
          }
        </div>
      </div>
    )
  })

  function handleTheme() {
    setTheme(preTheme => preTheme === "dark" ? "light" : "dark")
  }

  function handleToggle(name) {
    setExtensionData(prevExtension => prevExtension.map(exten => exten.name === name ? {...exten, "isActive": !exten.isActive} : exten))
    console.log("Changed")
  }

  function handleRemoveClick(name) {
    setExtensionData(prevExtension => prevExtension.filter(objArray => objArray.name !== name))
  }

  return (
    <main className={ theme === "light" ? "light" : ""}>
      <div className="wrapper">
        <header>
          <div>
            { theme === "dark" ? <img src={darkLogo} alt="Extensions logo" className='logo' aria-label='Extensions logo'/> : <img src={lightLogo} alt="Extensions logo" className='logo' aria-label='Extensions logo'/> }
          </div>
          <div className="theme" onClick={ () => handleTheme()}>
            { theme === "light" ? 
                <img src={lightIcon} alt="light mode theme icon" aria-label="light mode theme"/>: 
                <img src={darkIcon} alt="Dark mode theme icon" aria-label="Dark mode theme"/>  
          }
            
          </div>
        </header>
        <section className='list-selection'>
          <h1>Extensions List</h1>
          <div className="btn-selection">
            <button
              onClick={() => setSelectedFilter("all")}
              className={selectedFilter === "all" ? "active-btn" : ""} 
            >All</button>
            <button
              className={selectedFilter === "active" ? "active-btn" : ""} 
              onClick={() => setSelectedFilter("active")}
            >Active</button>
            <button
              className={selectedFilter === "inactive" ? "active-btn" : ""} 
              onClick={() => setSelectedFilter("inactive")}
            >Inactive</button>
          </div>
        </section>
        <section className='card-section'>
          {extensionElement}
        </section>
      </div>
    </main>
  )
}


export default App
