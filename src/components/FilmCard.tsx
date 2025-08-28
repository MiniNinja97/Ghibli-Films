import { useEffect, useState } from "react"
import { useFilmStore } from "../store/filmStore"
import SearchBar from "./SearchBar"
import { useFavoriteStore } from "../store/favoritesStore"

function FilmList() {
 
  const { films, loading, error, loadFilms } = useFilmStore()
  const [searchText, setSearchText] = useState("")
  const addFavorite = useFavoriteStore((state) => state.addFavorite)

 
  useEffect(() => {
    loadFilms()
  }, [loadFilms])

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchText.toLowerCase())
  )

  if (loading) return <p>Laddar filmer...</p>
  if (error) return <p>{error}</p>

  return (
  <div>
    <SearchBar searchText={searchText} setSearchText={setSearchText} />
    <div className="film-list">
      {filteredFilms.map((film) => (
        <div key={film.id} className="film-card">
          <h3>{film.title}</h3>
          <p><strong>Regissör:</strong> {film.director}</p>
          <p>{film.description}</p>
          <button onClick={() => addFavorite(film)}>Lägg till i favoriter</button>
          <img src={film.image} alt={film.title} />
        </div>
      ))}
    </div>
  </div>
)
}

export default FilmList