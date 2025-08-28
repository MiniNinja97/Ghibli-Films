import { useFavoriteStore } from "../store/favoritesStore";

function FavoriteFilms() {
  const { favorites, removeFavorite } = useFavoriteStore();

  if (favorites.length === 0) return <p>Du har inte lagt till några filmer i favoriter ännu!</p>;

  return (
    <div>
      <h2>Mina Favoritfilmer</h2>
      <div className="favorite-films">
        {favorites.map((film) => (
          <div key={film.id} className="film-card">
            <h3>{film.title}</h3>
            <p><strong>Regissör:</strong> {film.director}</p>
            <p>{film.description}</p>
            <button onClick={() => removeFavorite(film.id)}>Ta bort från favoriter</button>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteFilms;