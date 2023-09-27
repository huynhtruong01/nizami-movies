import { Languages } from '@/enums'

export type ILanguages = Languages.EN | Languages.VI

export interface IMovie {
    id: number
    title: string
    original_language: ILanguages
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
    adult?: boolean
    backdrop_path: string
    genre_ids: number[]
}
