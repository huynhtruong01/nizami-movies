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

export interface ISpokenLanguage {
    english_name: string
    iso_639_1: ILanguages
    name: string
}

export interface IProductionCountry {
    iso_3166_1: string
    name: string
}

export interface IProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

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
    runtime: number
    revenue: number
    status: string
    imdb_id: string
    spoken_languages: ISpokenLanguage[]
    production_countries: IProductionCountry[]
    production_companies: IProductionCompany[]
}

export interface IResponseMovieList {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}
