import { MovieCard } from '@/components/common/movie-list/components'
import { SkeletonMovieList, SkeletonText } from '@/components/loadings'
import { LanguagesParam } from '@/enums'
import { useMovieListById } from '@/hooks'
import { IMovieListByIdType } from '@/models'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface IMovieListByIdProps {
    title: string
    movieId: number
    movieListByIdType: IMovieListByIdType
    className?: string
}

export function MovieListById({
    title,
    movieId,
    movieListByIdType,
    className = '',
}: IMovieListByIdProps) {
    const { data, isLoading } = useMovieListById({
        movieId,
        movieListByIdType,
        params: {
            page: 1,
            language: LanguagesParam.EN,
        },
    })

    if (isLoading)
        return (
            <div className={`${className}`}>
                <SkeletonText className="mb-6 w-1/5 h-7" />
                <SkeletonMovieList quantities={5} />
            </div>
        )

    if (!data?.results?.length) return null

    return (
        <div className={`${className}`}>
            <h3 className="text-2xl font-medium mb-5 capitalize">{title}</h3>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={4.5}
                    className="relative overflow-hidden rounded"
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
                    {data?.results.map((movie) => (
                        <SwiperSlide key={movie.id} className="mr-6 md:mr-0 w-full">
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
