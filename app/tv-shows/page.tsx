import { Container, MovieList } from '@/components/common'

export const metadata = {
    title: 'Explore TV Shows',
}

export default function TvPage() {
    return (
        <section className="py-12">
            <Container>
                <h2 className="text-2xl text-primary font-medium mb-6">
                    Explore TV Shows
                </h2>
                <MovieList />
            </Container>
        </section>
    )
}
