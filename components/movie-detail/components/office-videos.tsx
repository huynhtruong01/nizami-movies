import { Overlay } from '@/components/common'
import { PlayIcon } from '@/components/icons'
import { SkeletonText, SkeletonVideoList } from '@/components/loadings'
import { NO_POSTER } from '@/constants'
import { LanguagesParam } from '@/enums'
import { useOfficeVideos } from '@/hooks'
import { convertLinkImgYoutube } from '@/utils'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface IOfficeVideosProps {
    movieId: number
    className?: string
}

export function OfficeVideos({ movieId, className = '' }: IOfficeVideosProps) {
    const { data, isLoading } = useOfficeVideos({
        params: {
            language: LanguagesParam.EN,
        },
        movieId,
    })

    if (isLoading)
        return (
            <div className={`${className}`}>
                <SkeletonText className="h-8 mb-5 w-5/12" />
                <SkeletonVideoList />
            </div>
        )

    if (!data?.results?.length) return null

    return (
        <div className={`${className}`}>
            <h2 className="text-2xl font-medium mb-5">Office Videos</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={3.5}
                className="overflow-hidden cursor-pointer rounded-md"
            >
                {data?.results.map((video) => (
                    <SwiperSlide key={video.id} className="w-full">
                        <div className="w-full h-48 relative rounded-md overflow-hidden">
                            <Image
                                src={
                                    video.key
                                        ? convertLinkImgYoutube(video.key)
                                        : NO_POSTER
                                }
                                alt={video.name}
                                fill
                            />
                            <Overlay>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary z-40 p-3 hover:scale-110 ease-in-out duration-200">
                                    <PlayIcon
                                        className="text-red-700"
                                        fill="currentColor"
                                    />
                                </div>
                            </Overlay>
                        </div>
                        <span className="inline-block mt-2 capitalize font-medium text-sm px-2 line-camp-2 leading-normal">
                            {video.name}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
