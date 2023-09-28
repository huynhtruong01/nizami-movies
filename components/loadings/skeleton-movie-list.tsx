import { SkeletonMovieCard } from '.'

export interface ISkeletonMovieListProps {
    quantities?: number
    className?: string
}

export function SkeletonMovieList({
    quantities = 5,
    className = '',
}: ISkeletonMovieListProps) {
    return (
        <div className={`grid grid-cols-5 gap-6 ${className}`}>
            {Array.from({ length: quantities }, (_, idx) => idx + 1).map((idx) => (
                <SkeletonMovieCard key={idx} />
            ))}
        </div>
    )
}
