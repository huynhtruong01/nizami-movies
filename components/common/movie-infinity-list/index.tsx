import { MovieCard } from '@/components/common/movie-list/components'
import { IResponseMovieList } from '@/models'

export interface IMovieInfinityListProps {
    movies: IResponseMovieList[]
    className?: string
    pathnameApi?: string
}

export function MovieInfinityList({
    movies,
    className = '',
    pathnameApi = 'movies',
}: IMovieInfinityListProps) {
    return (
        <div
            className={`grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-6 gap-y-8 ${className}`}
        >
            {movies.map((movieItemList: IResponseMovieList) => {
                return movieItemList.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} pathnameApi={pathnameApi} />
                ))
            })}
        </div>
    )
}
