export interface ISkeletonCardProps {
    className?: string
}

export function SkeletonCard({ className = '' }: ISkeletonCardProps) {
    return <div className={`animate-pulse bg-slate-800 h-48 rounded ${className}`}></div>
}
