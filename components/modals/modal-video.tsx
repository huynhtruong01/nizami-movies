'use client'

import { Modal } from '.'
import { CloseIcon } from '@/components/icons'
import { videoStore } from '@/stores'
import ReactPlayer from 'react-player'

export function ModalVideo() {
    const isShow = videoStore((state) => state.isShow)
    const keyVideo = videoStore((state) => state.keyVideo)
    const setShowModal = videoStore((state) => state.setShowModal)

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <Modal isShow={isShow}>
            <div className="max-w-[800px] w-full">
                <div className="flex justify-end">
                    <CloseIcon
                        className="h-8 w-8 cursor-pointer hover:scale-125 text-button-color ease-in-out duration-200"
                        onClick={handleClose}
                    />
                </div>
                <div
                    className={`w-full mt-4 aspect-video rounded-lg overflow-hidden ${
                        isShow ? 'scale-100' : 'scale-0'
                    } duration-500 ease-in-out`}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${keyVideo}?autoplay=${
                            isShow ? 1 : 0
                        }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </Modal>
    )
}
