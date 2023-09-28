export interface ISkeletonMovieCardProps {
    className?: string
}

export function SkeletonMovieCard({ className = '' }: ISkeletonMovieCardProps) {
    return (
        <div className={`w-full animate-pulse ${className}`}>
            <div className="w-full h-80 rounded-md bg-slate-800"></div>
            <div className="pt-4">
                <div className="w-full h-6 rounded bg-slate-800"></div>
                <div className="w-10/12 h-4 rounded mt-2 bg-slate-800"></div>
            </div>
        </div>
    )
}
