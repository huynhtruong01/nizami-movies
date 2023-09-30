import { Container, MovieList } from '@/components/common'
import { SearchMovies } from '@/components/search-movies'
import { Metadata } from 'next'

export interface ISearchMovieProps {
    searchParams: { q: string }
}

export async function generateMetadata({
    searchParams,
}: ISearchMovieProps): Promise<Metadata> {
    return {
        title: `Search for results ${searchParams.q}`,
    }
}

export default function SearchMoviePage({ searchParams }: ISearchMovieProps) {
    return (
        <section className="pb-14 pt-24 md:pt-20">
            <Container>
                <h2 className="text-2xl text-primary font-medium mb-6">
                    Search results of “
                    <span className="text-secondary">{searchParams.q}</span>”
                </h2>
                <SearchMovies query={searchParams.q} />
            </Container>
        </section>
    )
}
