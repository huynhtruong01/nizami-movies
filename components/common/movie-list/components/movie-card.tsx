'use client'

import { PlayIcon } from '@/components/icons'
import { BASE_IMAGE_URL, NO_POSTER } from '@/constants'
import { IMovie } from '@/models'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export interface IMovieCardProps {
    movie: IMovie
    pathnameApi?: string
}

export function MovieCard({ movie, pathnameApi = 'movies' }: IMovieCardProps) {
    return (
        <div className="relative w-full cursor-pointer">
            <Link href={`/${pathnameApi}/${movie.id}`} className="w-full">
                <div className="w-full h-80 xs:h-96 relative rounded-md overflow-hidden group">
                    <Image
                        src={
                            movie.poster_path
                                ? `${BASE_IMAGE_URL}${movie.poster_path}`
                                : NO_POSTER
                        }
                        alt={movie.title || movie.name}
                        fill
                        // sizes="(min-width: 1260px) 214px, calc(19.15vw - 23px)"
                        sizes="100%"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent opacity-0 hover:opacity-100 to-black duration-200 ease-in-out">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700 shadow-button-play z-40 p-3 group-hover:scale-110 ease-in-out duration-200">
                            <PlayIcon className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <h3 className="font-semibold text-lg line-clamp-1">
                        <span className="hover:underline hover:text-secondary">
                            {movie.title || movie.name}
                        </span>
                    </h3>
                    <time className="text-sm text-secondary">
                        {formatDate(movie.release_date)}
                    </time>
                </div>
            </Link>
        </div>
    )
}
