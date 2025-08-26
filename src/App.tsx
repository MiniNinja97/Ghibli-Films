// import { NavLink, Outlet } from "react-router-dom"

import { useEffect } from "react"
import { useFilmStore } from "./store/filmStore"

function FilmList() {
  // Prenumererar på Zustand-staten
  const { films, loading, error, loadFilms } = useFilmStore()

  // Kör loadFilms() när komponenten mountas
  useEffect(() => {
    loadFilms()
  }, [loadFilms])

  if (loading) return <p>Laddar filmer...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="film-list">
      {films.map((film) => (
        <div key={film.id} className="film-card">
          <h3>{film.title}</h3>
          <p><strong>Regissör:</strong> {film.director}</p>
          <p>{film.description}</p>
          <img src={film.image} alt={film.title} />
        </div>
      ))}
    </div>
    // <div className="App">
      /* <header>
        <h1>Studio Ghibli Filmer!</h1>
        <nav>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main> */
      
    /* </div> */
  )
}

export default FilmList
