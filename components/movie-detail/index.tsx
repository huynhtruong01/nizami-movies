'use client'

import { BASE_IMAGE_URL, NO_POSTER } from '@/constants'
import { useMovieDetail } from '@/hooks'
import { ChipList, Container } from '@/components/common'
import Image from 'next/image'
import {
    CastList,
    MovieListById,
    MoviePoster,
    OfficeVideos,
} from '@/components/movie-detail/components'
import { MovieListByIdType } from '@/enums'
import { SkeletonCard, SkeletonText } from '../loadings'
import { useCallback, useMemo } from 'react'

export interface IMovieDetailInfoProps {
    movieId: number
}

export function MovieDetailInfo({ movieId }: IMovieDetailInfoProps) {
    const { data: movie, isLoading } = useMovieDetail({ movieId })

    const list = useCallback((length: number) => {
        return Array.from({ length }, (_, idx) => idx + 1)
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className="relative h-[50vh] bg-header-color before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-hero before:z-10"></div>
            ) : (
                <div
                    className="relative h-[50vh] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-hero before:z-10"
                    style={{
                        backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
                    }}
                ></div>
            )}
            <Container className="relative -mt-44 z-40">
                <div className="flex justify-center gap-6 max-w-[960px] mx-auto mb-20">
                    <MoviePoster
                        url={movie.poster_path}
                        alt={movie.title || movie.name}
                        isLoading={isLoading}
                    />
                    <div className="flex-1 inline-block">
                        {isLoading && <SkeletonText className="!h-10 mb-4" />}
                        {!isLoading && (
                            <h1 className="text-primary text-4xl font-bold mb-4">
                                {movie.title || movie.name}
                            </h1>
                        )}
                        <ChipList list={movie.genres || []} isLoading={isLoading} />
                        {isLoading && (
                            <div className="mt-6">
                                {list(5).map((idx) => (
                                    <SkeletonText key={idx} className="!h-3 mb-3" />
                                ))}
                            </div>
                        )}
                        {!isLoading && (
                            <p className="mt-6 text-sm leading-7 text-secondary max-w-full">
                                {movie.overview}
                            </p>
                        )}
                        <CastList movieId={+movieId} className="mt-6" />
                    </div>
                </div>
                <OfficeVideos movieId={movieId} className="mt-10 mb-14" />
                <MovieListById
                    movieId={movieId}
                    movieListByIdType={MovieListByIdType.SIMILAR}
                    title={'Similar'}
                    className="mt-10 mb-12"
                />
                <MovieListById
                    movieId={movieId}
                    movieListByIdType={MovieListByIdType.RECOMMENDATIONS}
                    title={'Recommend Movies'}
                    className="mt-16 mb-6"
                />
            </Container>
        </div>
    )
}
