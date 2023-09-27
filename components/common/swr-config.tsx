'use client'

import axiosClient from '@/api-client'
import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

export interface ISwrConfigProps {
    children: ReactNode
}

export function SwrConfig({ children }: ISwrConfigProps) {
    return (
        <SWRConfig
            value={{
                fetcher: (url) => axiosClient.get(url),
                shouldRetryOnError: false,
            }}
        >
            {children}
        </SWRConfig>
    )
}
