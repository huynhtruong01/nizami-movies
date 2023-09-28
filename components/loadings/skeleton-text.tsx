export interface ISkeletonTextProps {
    className?: string
}

export function SkeletonText({ className = '' }: ISkeletonTextProps) {
    return <div className={`animate-pulse bg-slate-800 h-4 rounded ${className}`}></div>
}
