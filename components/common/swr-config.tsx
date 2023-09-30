'use client'

import axiosClient from '@/api-client'
import { movieStore } from '@/stores'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { SWRConfig } from 'swr'

export interface ISwrConfigProps {
    children: ReactNode
}

export function SwrConfig({ children }: ISwrConfigProps) {
    const fetchMovieDiscover = movieStore((state) => state.fetchMovieDiscover)
    const router = useRouter()

    useEffect(() => {
        fetchMovieDiscover()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [router])

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
