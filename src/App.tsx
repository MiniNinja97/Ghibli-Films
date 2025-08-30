
import SnowBackground from "./SnowBackground";
import EyesEffect from "./eyesEffect"; 

import { NavLink, Outlet } from "react-router-dom";
import "./styles/startpage.css";

function App() {
  return (
    <div className="app-container">
      <SnowBackground className="snow-background" />
      <EyesEffect className="eyes-effect" />

      <div className="app">
        <header>
          <h1 className="rubrik">
            <NavLink to="/">Studio Ghibli Filmer</NavLink>
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
    </div>
  );
}

export default App;

