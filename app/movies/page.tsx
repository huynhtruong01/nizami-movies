import { Container } from '@/components/common'
import { MovieDiscoverList } from '@/components/movie-discover-list'

export const metadata = {
    title: 'Explore Movies',
}

export default function MoviesPage() {
    return (
        <section className="pb-12 pt-28 md:pt-20">
            <Container>
                <MovieDiscoverList />
            </Container>
        </section>
    )
}
