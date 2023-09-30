'use client'

import { SkeletonCastList, SkeletonText } from '@/components/loadings'
import { LanguagesParam } from '@/enums'
import { useCredits } from '@/hooks'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CastItem } from '.'

export interface ICastListProps {
    movieId: number
    className?: string
}

export function CastList({ movieId, className = '' }: ICastListProps) {
    const { data, isLoading } = useCredits({
        params: {
            language: LanguagesParam.EN,
        },
        movieId,
    })

    if (isLoading)
        return (
            <div className={`w-full ${className}`}>
                <SkeletonText className="h-7 mb-3 w-3/12" />
                <SkeletonCastList />
            </div>
        )

    if (!data?.cast?.length) return null

    return (
        <div className={`w-full ${className}`}>
            <h3 className="text-xl font-medium mb-3">Casts</h3>
            <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={4.5}
                className="overflow-hidden cursor-pointer rounded-md"
                breakpoints={{
                    0: {
                        slidesPerView: 2.5,
                    },
                    480: {
                        slidesPerView: 3.5,
                    },
                    640: {
                        slidesPerView: 3.5,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                    1535: {
                        slidesPerView: 4.5,
                    },
                }}
            >
                {data?.cast?.map((cast) => (
                    <SwiperSlide key={cast.id}>
                        <CastItem cast={cast} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
