import { movieApi } from '@/api-client'
import { QUERY_KEYS } from '@/constants'
import { ICredits, IParams } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface IUseCredits {
    params: Omit<IParams, 'page'>
    movieId: number
    options?: SWRConfiguration
}

export const useCredits = ({ params, movieId, options }: IUseCredits) => {
    const result = useSWR<ICredits>(
        [QUERY_KEYS.CREDITS, params, movieId],
        () => movieApi.getCredits(movieId, params),
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
