
import  * as z from "zod"





const filmSchema = z.object({
    id: z.string(),
    title: z.string(),
    original_title: z.string(),
    original_title_romanised: z.string(),
    description: z.string(),
    director: z.string(),
    release_date: z.string(),
    image: z.string().url(),
    movie_banner: z.string().url(),
})  
export const filmsArraySchema = z.array(filmSchema)
export type FilmType = z.infer<typeof filmSchema>
export type FilmsArrayType = z.infer<typeof filmsArraySchema>
