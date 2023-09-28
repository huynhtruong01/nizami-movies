import { Overlay } from '@/components/common'
import { PlayIcon } from '@/components/icons'
import { SkeletonCard } from '@/components/loadings'
import { BASE_IMAGE_URL, NO_POSTER } from '@/constants'
import Image from 'next/image'

export interface IMoviePosterProps {
    url: string
    alt: string
    isLoading?: boolean
}

export function MoviePoster({ url, alt, isLoading = false }: IMoviePosterProps) {
    return (
        <div className="relative w-64 h-96 rounded-md overflow-hidden">
            {isLoading && <SkeletonCard className="!w-full !h-full" />}
            {!isLoading && (
                <>
                    <Image
                        src={url ? `${BASE_IMAGE_URL}${url}` : NO_POSTER}
                        alt={alt}
                        fill
                        sizes="(min-width: 1260px) 214px, calc(19.15vw - 23px)"
                    />
                    <Overlay>
                        <button className="w-3/5 !flex !bg-red-700 absolute bottom-6 left-1/2 -translate-x-1/2 text-sm !rounded-md hover:!bg-red-900">
                            <PlayIcon fill={'currentColor'} className="w-5 h-5 mr-2" />{' '}
                            <span className="inline-block">Watch Now</span>
                        </button>
                    </Overlay>
                </>
            )}
        </div>
    )
}
