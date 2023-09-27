import { PlayIcon } from '@/components/icons'
import { BASE_IMAGE_URL } from '@/constants'
import { IMovie } from '@/models'
import { formatDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

export interface IMovieCardProps {
    // movie: IMovie
}

const movie = {
    adult: false,
    backdrop_path: '/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
    genre_ids: [28, 9648, 53, 80],
    id: 762430,
    original_language: 'en',
    original_title: 'Retribution',
    overview:
        "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
    popularity: 1847.972,
    poster_path: '/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg',
    release_date: '2023-08-23',
    title: 'Retribution',
    video: false,
    vote_average: 6.8,
    vote_count: 218,
}

export function MovieCard(props: IMovieCardProps) {
    return (
        <div className="relative w-full cursor-pointer">
            <Link href={`/movies/${movie.id}`} className="w-full">
                <div className="w-full h-80 relative rounded-md overflow-hidden group">
                    <Image
                        src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        sizes="(min-width: 1260px) 214px, calc(19.15vw - 23px)"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent opacity-0 hover:opacity-100 to-black duration-200 ease-in-out">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700 shadow-button-play z-40 p-3 group-hover:scale-110 ease-in-out duration-200">
                            <PlayIcon className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <h3 className="font-semibold text-lg">{movie.title}</h3>
                    <time className="text-sm text-secondary">
                        {formatDate(movie.release_date)}
                    </time>
                </div>
            </Link>
        </div>
    )
}
