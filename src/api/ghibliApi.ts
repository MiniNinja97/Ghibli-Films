import { filmsArraySchema } from "../validation/filmValidation"


export interface Film {
    id: string
  title: string
  original_title: string
  original_title_romanised: string
  description: string
  director: string
  release_date: string
  image: string
  movie_banner: string
}

const url = 'https://ghibliapi.vercel.app/films'  

export async function fetchFilms(limit: number = 250): Promise<Film[]> {
    try {
        const response = await fetch(`${url}?limit=${limit}`)  
        if(!response.ok) {
            throw new Error('Failed to fetch films')
        }
        const data: Film[] = await response.json()
        console.log("From API:", data)
        const films = filmsArraySchema.parse(data)
    return films

        // return data
    } catch (error) {
        console.error("Error fetching films:", error)
        throw error
    }

    
}
