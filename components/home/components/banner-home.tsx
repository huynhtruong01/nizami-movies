'use client'

import { BASE_IMAGE_URL, INIT_BACKGROUND } from '@/constants'
import { IMovie } from '@/models'
import { movieStore } from '@/stores'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function BannerHome() {
    const movies = movieStore((state) => state.movies)
    const [movie, setMovie] = useState<IMovie>(movies[0])

    const handleSlideChange = (swiper: any) => {
        console.log(Array.from(swiper.slides).map((x: any) => x.className))
        const activeClass = [...swiper.slides].filter((x: any) => {
            return x.className.split(' ').includes('swiper-slide-active')
        })
        console.log(activeClass)
        // console.log(activeClass)
        // if (activeClass && activeClass.dataset.movieId) {
        //     const movie = movies.find((m) => m.id === +activeClass.dataset.movieId)
        //     console.log(movie?.title, +activeClass.dataset.movieId)
        //     if (movie) setMovie(movie)
        // }
    }

    const handleSlideClick = (movie: IMovie) => {
        setMovie(movie)
    }

    return (
        <div className="relative w-full min-h-screen md:min-h-[300px] h-full bg-header-color">
            <div
                className="absolute block md:hidden top-0 left-0 bg-center bg-cover bg-no-repeat w-full h-full before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-banner before:z-10"
                style={{
                    backgroundImage: `url(${
                        movie
                            ? `${BASE_IMAGE_URL}${movie.backdrop_path}`
                            : INIT_BACKGROUND
                    })`,
                }}
            ></div>
            <div className="hidden md:block h-auto before:content-[''] before:absolute before:inset-0 before:w-full before:h-[101%] before:bg-banner before:z-10">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={4}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="relative !w-full h-[300px]"
                >
                    {movies.map((movie) => (
                        <SwiperSlide
                            key={movie.id}
                            data-movie-id={movie.id}
                            className="banner w-full"
                            onClick={() => handleSlideClick(movie)}
                        >
                            <div
                                className="absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-full"
                                style={{
                                    backgroundImage: `url(${
                                        movie
                                            ? `${BASE_IMAGE_URL}${movie.backdrop_path}`
                                            : INIT_BACKGROUND
                                    })`,
                                }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="absolute bottom-8 left-0 w-full z-30 block md:hidden">
                <Swiper
                    // modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    slideToClickedSlide
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    className="relative"
                    // onSlideChange={handleSlideChange}
                    // centeredSlides
                >
                    {movies.map((movie) => (
                        <SwiperSlide
                            key={movie.id}
                            data-movie-id={movie.id}
                            className="!w-[159px] !flex items-center mr-6 rounded-md"
                            onClick={() => handleSlideClick(movie)}
                        >
                            <div className="relative w-full h-52 rounded-md overflow-hidden cursor-pointer">
                                <Image
                                    src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                                    alt={movie.title}
                                    fill
                                    sizes="(min-width: 1260px) 214px, calc(19.15vw - 23px)"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
