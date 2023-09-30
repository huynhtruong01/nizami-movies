import axiosClient from '@/api-client'
import { LanguagesParam } from '@/enums'
import { IMovie } from '@/models'
import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export interface IMovieStore {
    movies: IMovie[]
    fetchMovieDiscover: () => Promise<void>
}

export const movieStore = create(
    devtools(
        persist<IMovieStore>(
            (set) => ({
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
            }),
            {
                name: 'movie-discover',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
)
