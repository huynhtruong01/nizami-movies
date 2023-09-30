'use client'

import { MovieCard } from '@/components/common/movie-list/components'
import { LanguagesParam } from '@/enums'
import { useMovieList } from '@/hooks'
import { IMovieListType } from '@/models'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import { SkeletonMovieList, SkeletonText } from '@/components/loadings'

export interface ICarouselProps {
    movieListType: IMovieListType
    title: string
    nextEl?: string
    prevEl?: string
}

export interface ISwiperButtonProps {
    className?: string
    nextEl?: string
    prevEl?: string
}

export function SwiperButton({
    className = '',
    nextEl = 'btn-next-slide',
    prevEl = 'btn-prev-slide',
}: ISwiperButtonProps) {
    return (
        <div>
            <button
                className={`${prevEl} absolute left-5 top-1/2 z-20 -translate-y-1/2 d-flex p-2 bg-black bg-opacity-60 rounded-full cursor-pointer text-white hover:scale-110 duration-common ${className}`}
            >
                <ChevronLeftIcon className="!w-5 !h-5" />
            </button>
            <button
                className={`${nextEl} absolute right-5 top-1/2 z-20 -translate-y-1/2 d-flex p-2 bg-black bg-opacity-60 rounded-full cursor-pointer text-white hover:scale-110 duration-common ${className}`}
            >
                <ChevronRightIcon className="!w-5 !h-5" />
            </button>
        </div>
    )
}

export function Carousel({
    title,
    movieListType,
    nextEl = 'btn-next-slide',
    prevEl = 'btn-prev-slide',
}: ICarouselProps) {
    const { data, isLoading } = useMovieList({
        movieListType,
        params: { page: 1, language: LanguagesParam.EN },
    })

    if (isLoading)
        return (
            <div className="mb-14">
                <SkeletonText className="mb-6 w-1/5 h-7" />
                <SkeletonMovieList />
            </div>
        )

    return (
        <div className="mb-10">
            <h2 className="text-xl font-medium mb-6">{title}</h2>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={4.5}
                    navigation={{
                        nextEl: `.${nextEl}`,
                        prevEl: `.${prevEl}`,
                    }}
                    className="relative grid lg:grid-cols-4 gap-4 overflow-hidden rounded"
                    breakpoints={{
                        0: {
                            slidesPerView: 1.25,
                        },
                        480: {
                            slidesPerView: 2.5,
                        },
                        640: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024: {
                            slidesPerView: 4.5,
                        },
                    }}
                >
                    {data.results.map((movie) => (
                        <SwiperSlide key={movie.id} className="mr-6">
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SwiperButton nextEl={nextEl} prevEl={prevEl} />
            </div>
        </div>
    )
}
