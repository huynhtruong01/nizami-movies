import { MovieDetailInfo } from '@/components/movie-detail'
import { BASE_IMAGE_URL } from '@/constants'
import { IMovie } from '@/models'
import { Metadata } from 'next'

export interface IMovieDetailPageProps {
    params: {
        movieId: string
    }
}

export interface Props {
    params: { movieId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${params.movieId}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
            },
        }
    )
    const movie: IMovie = await res.json()

    return {
        title: movie.title || movie.name,
        openGraph: {
            images: [`${BASE_IMAGE_URL}${movie.poster_path}`],
        },
    }
}

export default function MovieDetailPage({ params }: IMovieDetailPageProps) {
    return (
        <section className="pb-14">
            <MovieDetailInfo movieId={+params.movieId} />
        </section>
    )
}
