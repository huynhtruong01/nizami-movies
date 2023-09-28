import { movieApi } from '@/api-client'
import { IMovieListByIdType, IParams, IResponseMovieList } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface IUseMovieListById {
    movieListByIdType: IMovieListByIdType
    movieId: number
    params: IParams
    options?: SWRConfiguration
}

export const useMovieListById = ({
    movieListByIdType,
    movieId,
    params,
    options,
}: IUseMovieListById) => {
    const result = useSWR<IResponseMovieList>(
        [movieListByIdType, params],
        () => movieApi.getAllMoviesById(movieId, params, movieListByIdType),
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
