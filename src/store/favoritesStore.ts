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
      // Vi kollar om filmen redan finns i favoriter
      const exists = state.favorites.find((f) => f.id === film.id);
      if (exists) return state; // om den finns, gör inget
      return { favorites: [...state.favorites, film] }; // annars lägg till filmen
    }),

  removeFavorite: (filmId) =>
    set((state) => ({
      favorites: state.favorites.filter((film) => film.id !== filmId),
    })),
}));

export { useFavoriteStore };