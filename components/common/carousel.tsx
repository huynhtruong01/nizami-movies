'use client'

import { MovieCard } from '@/components/common/movie-list/components'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../icons'

export interface ICarouselProps {
    title: string
    nextEl?: string
    prevEl?: string
    // movieList: IMovie[]
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
    nextEl = 'btn-next-slide',
    prevEl = 'btn-prev-slide',
}: ICarouselProps) {
    return (
        <div>
            <h2 className="text-xl font-medium mb-6">{title}</h2>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={5}
                    navigation={{
                        nextEl: `.${nextEl}`,
                        prevEl: `.${prevEl}`,
                    }}
                    className="relative grid grid-cols-5 gap-4 overflow-hidden rounded"
                >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((movie) => (
                        <SwiperSlide key={movie} className="max-w-[220px] mr-6">
                            <MovieCard key={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SwiperButton nextEl={nextEl} prevEl={prevEl} />
            </div>
        </div>
    )
}
