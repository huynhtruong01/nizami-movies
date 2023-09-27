import { IMovie } from '@/models'
import { MovieCard } from './components'

export interface IMovieListProps {
    // movieList: IMovie
    className?: string
}

export function MovieList({ className = '' }: IMovieListProps) {
    return (
        <div className={`grid grid-cols-5 gap-x-6 gap-y-8 ${className}`}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((movie) => (
                <MovieCard key={movie} />
            ))}
        </div>
    )
}
