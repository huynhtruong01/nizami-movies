import { Carousel, Container } from '@/components/common'
import { BannerHome } from '@/components/home/components'
import { MovieListType } from '@/enums'

export default function Home() {
    return (
        <section className="pb-12">
            <BannerHome />
            <Container>
                <div className="mt-10">
                    <Carousel
                        title="Top Rated"
                        nextEl="next-4"
                        prevEl="prev-4"
                        movieListType={MovieListType.TOP_RATED}
                    />
                    <Carousel
                        title="Upcoming Soon"
                        nextEl="next-1"
                        prevEl="prev-1"
                        movieListType={MovieListType.UPCOMING}
                    />
                    <Carousel
                        title="Now Playing"
                        nextEl="next-2"
                        prevEl="prev-2"
                        movieListType={MovieListType.NOW_PLAYING}
                    />
                    <Carousel
                        title="Popular"
                        nextEl="next-3"
                        prevEl="prev-3"
                        movieListType={MovieListType.POPULAR}
                    />
                </div>
            </Container>
        </section>
    )
}
