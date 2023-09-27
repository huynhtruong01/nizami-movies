import { Carousel, Container, MovieList } from '@/components/common'

export default function Home() {
    return (
        <section className="py-12">
            <Container>
                <div className="mb-14">
                    <Carousel title="Upcoming Soon" nextEl="next-1" prevEl="prev-1" />
                </div>
                <div className="mb-14">
                    <Carousel title="Latest" nextEl="next-2" prevEl="prev-2" />
                </div>
                <div className="mb-14">
                    <Carousel title="Popular" nextEl="next-3" prevEl="prev-3" />
                </div>
                <div className="mb-14">
                    <Carousel title="Top Rated" nextEl="next-4" prevEl="prev-4" />
                </div>
            </Container>
        </section>
    )
}
