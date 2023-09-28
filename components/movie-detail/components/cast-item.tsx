import { BASE_IMAGE_URL, NO_POSTER_USER } from '@/constants'
import { ICast } from '@/models'
import Image from 'next/image'

export interface ICastItemProps {
    cast: ICast
}

export function CastItem({ cast }: ICastItemProps) {
    return (
        <div>
            <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                    src={
                        cast.profile_path
                            ? `${BASE_IMAGE_URL}${cast.profile_path}`
                            : NO_POSTER_USER
                    }
                    alt={cast.name}
                    fill
                />
            </div>
            <p className="capitalize text-sm mt-2 font-medium text-center">{cast.name}</p>
        </div>
    )
}
