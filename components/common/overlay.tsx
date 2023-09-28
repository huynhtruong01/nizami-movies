import { ReactNode } from 'react'

export interface IOverlayProps {
    children: ReactNode
}

export function Overlay({ children }: IOverlayProps) {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black duration-200 ease-in-out">
            {children}
        </div>
    )
}
