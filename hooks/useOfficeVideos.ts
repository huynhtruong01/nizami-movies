import { movieApi } from '@/api-client'
import { QUERY_KEYS } from '@/constants'
import { IParams, IResponseOfficeVideos } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface IUseOfficeVideos {
    params: Omit<IParams, 'page'>
    movieId: number
    options?: SWRConfiguration
}

export const useOfficeVideos = ({ params, movieId, options }: IUseOfficeVideos) => {
    const result = useSWR<IResponseOfficeVideos>(
        [QUERY_KEYS.OFFICE_VIDEOS, params, movieId],
        () => movieApi.getOfficeVideos(movieId, params),
        {
            keepPreviousData: true,
            dedupingInterval: 30 * 1000, // 30s
            fallbackData: {
                data: {
                    id: 0,
                    cast: [],
                    crew: [],
                },
            },
            ...options,
        }
    )

    return result
}
