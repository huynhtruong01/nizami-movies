import { IMovie } from '@/models'
import { MovieCard } from '@/components/common/movie-list/components'

export interface IMovieListProps {
    movieList: IMovie[]
    className?: string
}

export function MovieList({ movieList, className = '' }: IMovieListProps) {
    return (
        <div className={`grid grid-cols-5 gap-x-6 gap-y-8 ${className}`}>
            {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
