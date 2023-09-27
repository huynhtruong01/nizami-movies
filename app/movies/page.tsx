import { Container, MovieList } from '@/components/common'

export const metadata = {
    title: 'Explore Movies',
}

export default function MoviesPage() {
    return (
        <section className="py-12">
            <Container>
                <h2 className="text-2xl text-primary font-medium mb-6">Explore Movies</h2>
                <MovieList />
            </Container>
        </section>
    )
}
