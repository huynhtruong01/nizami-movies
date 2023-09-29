import { StarIcon } from '@/components/icons'
import { SkeletonText } from '@/components/loadings'
import { IMovie } from '@/models'
import { convertTime, getYear } from '@/utils'

export interface IMovieInfoHeaderProps {
    movie: IMovie
    className?: string
    isLoading?: boolean
}

export function MovieInfoHeader({
    movie,
    className = '',
    isLoading = false,
}: IMovieInfoHeaderProps) {
    if (isLoading)
        return (
            <div className={`${className}`}>
                <SkeletonText className="!h-10 mb-2" />
                <SkeletonText className="" />
            </div>
        )

    return (
        <div className={`${className}`}>
            <div className="flex items-center justify-between gap-4 mb-2">
                <h1 className="text-primary text-4xl font-bold">
                    {movie.title || movie.name}
                </h1>
                <div className="flex items-center gap-1">
                    <span className="text-2xl">{movie.vote_average.toFixed(1)}</span>
                    <StarIcon className="text-yellow-500" fill="currentColor" />
                </div>
            </div>
            <div className="text-sm">
                {movie.release_date && (
                    <>
                        <span>{getYear(movie.release_date)}</span>
                        <span className="mx-2">|</span>
                    </>
                )}
                {movie.runtime && (
                    <>
                        <span>{convertTime(movie.runtime)}</span>
                        <span className="mx-2">|</span>
                    </>
                )}
                <span>{movie.status}</span>
            </div>
        </div>
    )
}
