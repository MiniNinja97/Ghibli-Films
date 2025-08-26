import { create } from "zustand";
import { fetchFilms, type Film } from "../api/ghibliApi";

interface FilmStore {
    films: Film [];
    loading:boolean
    error: string | null;
    loadFilms: () => Promise<void>;
}

export const useFilmStore = create<FilmStore>((set) => ({
    films: [],
    loading: false,
    error: null,
    loadFilms: async () => {
        set({ loading: true, error: null });
        try {
            const films = await fetchFilms();
            set({ films, loading: false });
        } catch (error) {
            set({ error: "Something went wrong", loading: false });
        }
    },
}));