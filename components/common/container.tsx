import { ReactNode } from 'react'

export interface IContainerProps {
    children: ReactNode
    className?: string
}

export function Container({ children, className = '' }: IContainerProps) {
    return <div className={`max-w-[1200px] m-auto px-4 ${className}`}>{children}</div>
}
