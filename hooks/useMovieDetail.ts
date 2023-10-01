import { movieApi } from '@/api-client'
import { QUERY_KEYS } from '@/constants'
import useSWR, { SWRConfiguration } from 'swr'

export interface IUseMovieDetail {
    movieId: number
    pathname?: string
    options?: SWRConfiguration
}

export const useMovieDetail = ({
    movieId,
    pathname = 'movie',
    options,
}: IUseMovieDetail) => {
    const result = useSWR(
        [QUERY_KEYS.MOVIE_DETAIL, movieId],
        () => movieApi.getDetailById(movieId, pathname),
        {
            keepPreviousData: true,
            dedupingInterval: 30 * 1000, // 30s
            fallbackData: {
                data: {
                    adult: false,
                    backdrop_path: '/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg',
                    genre_ids: [28, 878, 12],
                    id: 565770,
                    original_language: 'en',
                    original_title: 'Blue Beetle',
                    overview:
                        'Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.',
                    popularity: 3180.6,
                    poster_path: '/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg',
                    release_date: '2023-08-16',
                    title: 'Blue Beetle',
                    video: false,
                    vote_average: 7.2,
                    vote_count: 910,
                },
            },
            ...options,
        }
    )

    return result
}
