import { create } from 'zustand'

export interface IVideoStore {
    isShow: boolean
    keyVideo: string | null
    setShowModal: (isShow: boolean, keyVideo?: string | null) => void
}

export const videoStore = create<IVideoStore>((set) => ({
    isShow: false,
    keyVideo: '',
    setShowModal: (isShow: boolean, keyVideo = null) =>
        set(() => {
            if (isShow && keyVideo) {
                return {
                    isShow,
                    keyVideo,
                }
            }

            return {
                isShow: false,
                keyVideo: null,
            }
        }),
}))
