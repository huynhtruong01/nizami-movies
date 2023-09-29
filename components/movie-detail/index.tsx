'use client'

import { ChipList, Container } from '@/components/common'
import {
    CastList,
    MovieContent,
    MovieInfoHeader,
    MovieListById,
    MoviePoster,
    OfficeVideos,
} from '@/components/movie-detail/components'
import { BASE_IMAGE_URL } from '@/constants'
import { MovieListByIdType } from '@/enums'
import { useMovieDetail } from '@/hooks'
import { videoStore } from '@/stores'
import { useRef } from 'react'

export interface IMovieDetailInfoProps {
    movieId: number
    pathname?: string
}

export function MovieDetailInfo({ movieId, pathname = 'movie' }: IMovieDetailInfoProps) {
    const keyVideoId = useRef<string | null>(null)
    const setShowModal = videoStore((state) => state.setShowModal)

    const { data: movie, isLoading } = useMovieDetail({ movieId, pathname })

    const handleShowMovie = () => {
        setShowModal(true, keyVideoId.current)
    }

    return (
        <div>
            {isLoading ? (
                <div className="relative h-[60vh] bg-transparent"></div>
            ) : (
                <div
                    className="relative h-[60vh] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-hero before:z-10"
                    style={{
                        backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
                    }}
                ></div>
            )}
            <Container className="relative -mt-48 z-40">
                <div className="flex justify-center gap-6 max-w-[960px] mx-auto mb-20">
                    <MoviePoster
                        url={movie.poster_path}
                        alt={movie.title || movie.name}
                        isLoading={isLoading}
                        onShowClick={handleShowMovie}
                    />
                    <div className="flex-1 inline-block">
                        <MovieInfoHeader
                            movie={movie}
                            className="mb-4"
                            isLoading={isLoading}
                        />
                        <ChipList list={movie.genres || []} isLoading={isLoading} />
                        <MovieContent
                            movie={movie}
                            isLoading={isLoading}
                            className="mt-6"
                        />
                        <CastList movieId={+movieId} className="mt-6" />
                    </div>
                </div>
                <OfficeVideos
                    movieId={movieId}
                    className="mt-6 mb-14"
                    setKeyVideoId={keyVideoId}
                />
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
