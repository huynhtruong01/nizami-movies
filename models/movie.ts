import { Languages, MovieListByIdType, MovieListType } from '@/enums'

export type ILanguages = Languages.EN | Languages.VI
export type IMovieListType =
    | MovieListType.POPULAR
    | MovieListType.TOP_RATED
    | MovieListType.UPCOMING
    | MovieListType.NOW_PLAYING

export type IMovieListByIdType =
    | MovieListByIdType.RECOMMENDATIONS
    | MovieListByIdType.SIMILAR

export interface IMovie {
    id: number
    title: string
    name: string
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

export interface IResponseMovieList {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}
