'use client'

import { MovieInfinityList, MovieList } from '@/components/common'
import { useMovieDiscoverList } from '@/hooks'
import { LanguagesParam } from '@/enums'
import { SkeletonMovieList, SkeletonText } from '@/components/loadings'
import { useInView } from 'react-intersection-observer'
import { IResponseMovieList } from '@/models'

export interface IMovieDiscoverListProps {}

export function MovieDiscoverList() {
    const { data, isLoading, isValidating, setSize } = useMovieDiscoverList({
        params: {
            page: 1,
            language: LanguagesParam.EN,
        },
    })

    const { ref } = useInView({
        onChange(inView) {
            if (inView) {
                setSize((x) => x + 1)
            }
        },
        threshold: 0.5,
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
            <h2 className="text-2xl text-primary font-medium mb-6">Explore Movies</h2>
            <div>
                <MovieInfinityList movies={data as IResponseMovieList[]} />
                <div ref={ref}></div>
                {isValidating && (
                    <SkeletonMovieList
                        quantities={20}
                        className="!gap-x-6 !gap-y-8 mt-8"
                    />
                )}
            </div>
        </div>
    )
}
