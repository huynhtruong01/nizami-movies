import axiosClient from '.'

const BASE_URL = '/movie'

export const getAllLatestMovie = async () => {
    return axiosClient.get(`${BASE_URL}/latest`).then((res) => res.data)
}

export const getAllPopularMovie = async () => {
    return axiosClient.get(`${BASE_URL}/popular`).then((res) => res.data)
}

export const getAllTopRatedMovie = async () => {
    return axiosClient.get(`${BASE_URL}/top_rated`).then((res) => res.data)
}

export const getAllUpComingMovie = async () => {
    return axiosClient.get(`${BASE_URL}/upcoming`).then((res) => res.data)
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
