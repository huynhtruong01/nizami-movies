import { ReactNode } from 'react'
export * from '@/components/modals/modal-video'

export interface IModalProps {
    children: ReactNode
    isShow?: boolean
}

export function Modal({ children, isShow = false }: IModalProps) {
    return (
        <div
            className={`fixed inset-0 bg-header-color bg-opacity-70 flex justify-center items-center ${
                isShow
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            } ease-in-out duration-500 z-50`}
        >
            {children}
        </div>
    )
}
