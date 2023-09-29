import axiosClient from '@/api-client'
import { LanguagesParam } from '@/enums'
import { IMovie } from '@/models'
import { create } from 'zustand'

export interface IMovieStore {
    movies: IMovie[]
    fetchMovieDiscover: () => Promise<void>
}

export const movieStore = create<IMovieStore>((set) => ({
    movies: [],
    async fetchMovieDiscover() {
        try {
            const res = await axiosClient.get('discover/movie', {
                params: {
                    page: 1,
                    language: LanguagesParam.EN,
                },
            })
            const data = res.data

            set(() => ({
                movies: data.results,
            }))
        } catch (error) {
            throw new Error(error as string)
        }
    },
}))
