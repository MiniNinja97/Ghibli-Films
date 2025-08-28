import { useEffect } from "react"
import { useFilmStore } from "../store/filmStore"

function FilmList() {
 
  const { films, loading, error, loadFilms } = useFilmStore()

 
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
   
  )
}

export default FilmList