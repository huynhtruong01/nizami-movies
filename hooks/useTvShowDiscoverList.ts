import axiosClient from '@/api-client'
import { IParams, IResponseMovieList } from '@/models'
import qs from 'qs'
import { SWRConfiguration } from 'swr'
import useSWRInfinite from 'swr/infinite'

export interface IUseTvShowDiscoverList {
    params: IParams
    options?: SWRConfiguration
}

export const useTvShowDiscoverList = ({ params, options }: IUseTvShowDiscoverList) => {
    const result = useSWRInfinite<IResponseMovieList>(
        (pageIndex: number, previousPageData: IResponseMovieList) => {
            const page = pageIndex + 1
            const newParams = qs.stringify({
                ...params,
                page,
            })
            if (previousPageData) {
                if (page > previousPageData.total_pages) return null
            }
            return `/discover/tv?${newParams}`
        },
        (url) => axiosClient.get(url).then((res) => res.data),
        {
            keepPreviousData: true,
            dedupingInterval: 30 * 1000, // 30s
            fallbackData: {
                data: [
                    {
                        page: 1,
                        results: [],
                        total_pages: 0,
                        total_results: 0,
                    },
                ],
            },
            ...options,
        }
    )

    return result
}
