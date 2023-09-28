'use client'

import { LanguagesParam } from '@/enums'
import { useSearchMovieInfinity } from '@/hooks'
import { MovieInfinityList } from '@/components/common'
import { IResponseMovieList } from '@/models'
import { SkeletonMovieList, SkeletonText } from '@/components/loadings'

export interface ISearchMoviesProps {
    query: string
}

export function SearchMovies({ query }: ISearchMoviesProps) {
    const { data, isLoading } = useSearchMovieInfinity({
        params: {
            page: 1,
            language: LanguagesParam.EN,
            query,
        },
    })

    if (isLoading)
        return (
            <div className="mb-14">
                <SkeletonText className="mb-6 w-1/5 h-8" />
                <SkeletonMovieList quantities={20} className="!gap-x-6 !gap-y-8" />
            </div>
        )

    return (
        <div>
            <MovieInfinityList movies={data as IResponseMovieList[]} />
        </div>
    )
}
