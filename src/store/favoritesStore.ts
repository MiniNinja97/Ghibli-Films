import { create } from "zustand";
import type { Film } from "../api/ghibliApi";

interface FavoriteStore {
  favorites: Film[];
  addFavorite: (film: Film) => void;
  removeFavorite: (filmId: string) => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],

  addFavorite: (film) =>
    set((state) => {
      
      const exists = state.favorites.find((f) => f.id === film.id);
      if (exists) return state;
      return { favorites: [...state.favorites, film] }; 
    }),

  removeFavorite: (filmId) =>
    set((state) => ({
      favorites: state.favorites.filter((film) => film.id !== filmId),
    })),
}));

export { useFavoriteStore };