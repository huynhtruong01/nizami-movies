import { Container } from '@/components/common'
import { TvShowDiscoverList } from '@/components/tv-show-discover-list'

export const metadata = {
    title: 'Explore TV Shows',
}

export default function TvPage() {
    return (
        <section className="pb-12 pt-28">
            <Container>
                <TvShowDiscoverList />
            </Container>
        </section>
    )
}
