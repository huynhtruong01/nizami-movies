import { SkeletonCard, SkeletonText } from '.'

export interface ISkeletonCastListProps {
    quantities?: number
    className?: string
}

export function SkeletonCastList({
    quantities = 4,
    className = '',
}: ISkeletonCastListProps) {
    return (
        <div
            className={`grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ${className}`}
        >
            {Array.from({ length: quantities }, (_, idx) => idx + 1).map((idx) => (
                <div key={idx}>
                    <SkeletonCard />
                    <SkeletonText className="mt-2" />
                </div>
            ))}
        </div>
    )
}
