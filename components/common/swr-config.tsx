'use client'

import axiosClient from '@/api-client'
import { movieStore } from '@/stores'
import { ReactNode, useEffect } from 'react'
import { SWRConfig } from 'swr'

export interface ISwrConfigProps {
    children: ReactNode
}

export function SwrConfig({ children }: ISwrConfigProps) {
    const fetchMovieDiscover = movieStore((state) => state.fetchMovieDiscover)

    useEffect(() => {
        fetchMovieDiscover()
    }, [])

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
