import { Container, MovieList } from '@/components/common'

export const metadata = {
    title: 'Search results of ',
}

export default function SearchMoviePage() {
    return (
        <section className="py-12">
            <Container>
                <h2 className="text-2xl text-primary font-medium mb-6">
                    Search results of
                </h2>
                <MovieList />
            </Container>
        </section>
    )
}
