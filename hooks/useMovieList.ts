import { movieApi } from '@/api-client'
import { IMovieListType, IParams } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface IUseMovieList {
    movieListType: IMovieListType
    params: IParams
    options?: SWRConfiguration
}

export const useMovieList = ({ movieListType, params, options }: IUseMovieList) => {
    const result = useSWR(
        [movieListType, params],
        () => movieApi.getAllMovies(params, movieListType),
        {
            keepPreviousData: true,
            dedupingInterval: 30 * 1000, // 30s
            fallbackData: {
                data: {
                    page: 1,
                    results: [],
                    total_pages: 0,
                    total_results: 0,
                },
            },
            ...options,
        }
    )

    return result
}
