import { MovieCard } from '@/components/common/movie-list/components'
import { IResponseMovieList } from '@/models'

export interface IMovieInfinityListProps {
    movies: IResponseMovieList[]
    className?: string
}

export function MovieInfinityList({ movies, className = '' }: IMovieInfinityListProps) {
    return (
        <div className={`grid grid-cols-5 gap-x-6 gap-y-8 ${className}`}>
            {movies.map((movieItemList: IResponseMovieList) => {
                return movieItemList.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            })}
        </div>
    )
}
