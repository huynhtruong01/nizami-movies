import { SkeletonCard, SkeletonText } from '.'

export interface ISkeletonVideoListProps {
    quantities?: number
    className?: string
    itemClassName?: string
}

export function SkeletonVideoList({
    quantities = 4,
    className = '',
    itemClassName = '',
}: ISkeletonVideoListProps) {
    return (
        <div className={`grid grid-cols-4 gap-4 ${className}`}>
            {Array.from({ length: quantities }, (_, idx) => idx + 1).map((idx) => (
                <div key={idx} className={`w-full ${itemClassName}`}>
                    <SkeletonCard className="h-48" />
                    <SkeletonText className="h-5 mt-2" />
                </div>
            ))}
        </div>
    )
}
