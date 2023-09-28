import { IMovieListByIdType, IMovieListType, IParams, IResponseMovieList } from '@/models'
import axiosClient from '.'

const BASE_URL = '/movie'

export const getAllMovies = async (
    params: IParams,
    moviesType: IMovieListType
): Promise<IResponseMovieList> => {
    return axiosClient
        .get(`${BASE_URL}/${moviesType}`, { params })
        .then((res) => res.data)
}

export const getAllMovieDiscovers = async (params: IParams) => {
    return axiosClient.get('discover/movie', { params }).then((res) => res.data)
}

export const getMovieId = async (movieId: number) => {
    return axiosClient.get(`${BASE_URL}/${movieId}`).then((res) => res.data)
}

export const getAllVideosByMovieId = async (movieId: number) => {
    return axiosClient.get(`${BASE_URL}/${movieId}/videos`).then((res) => res.data)
}

export const getAllMoviesRecommend = async (movieId: number) => {
    return axiosClient
        .get(`${BASE_URL}/${movieId}/recommendations`)
        .then((res) => res.data)
}

export const getAllMoviesSimilar = async (movieId: number) => {
    return axiosClient.get(`${BASE_URL}/${movieId}/similar`).then((res) => res.data)
}

export const getAllReviewsMovie = async (movieId: number) => {
    return axiosClient.get(`${BASE_URL}/${movieId}/reviews`).then((res) => res.data)
}

export const getCredits = async (movieId: number, params: Omit<IParams, 'page'>) => {
    return axiosClient
        .get(`${BASE_URL}/${movieId}/credits`, {
            params,
        })
        .then((res) => res.data)
}

export const getOfficeVideos = async (movieId: number, params: Omit<IParams, 'page'>) => {
    return axiosClient
        .get(`${BASE_URL}/${movieId}/videos`, {
            params,
        })
        .then((res) => res.data)
}

export const getAllMoviesById = (
    movieId: number,
    params: IParams,
    type: IMovieListByIdType
) => {
    return axiosClient
        .get(`${BASE_URL}/${movieId}/${type}`, {
            params,
        })
        .then((res) => res.data)
}

export const getAllMoviesSearch = async (params: IParams) => {
    return axiosClient.get(`/search/${BASE_URL}`, { params }).then((res) => res.data)
}
