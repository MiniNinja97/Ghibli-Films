


import { NavLink, Outlet } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="app">
      <header>
         <h1>
          <NavLink to="/">Studio Ghibli Filmer 🎬</NavLink>
        </h1>
        <nav>
        
          <NavLink to="/films">Filmer</NavLink>
          <NavLink to="/favorites">Favoriter</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
