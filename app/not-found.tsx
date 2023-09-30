import { Container } from '@/components/common'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <section className="h-screen w-full bg-transparent pt-[72px]">
            <Container>
                <div className="mt-16">
                    <div className="relative w-[400px] h-[300px] mx-auto">
                        <Image src={`/not-found.svg`} alt="not-found" fill />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mt-8 text-center max-w-[50%] mx-auto">
                            We&apos;re sorry, but the page you were trying to access
                            couldn&apos;t be found. It may have been moved, deleted, or
                            never existed in the first place. <br /> Please you can search
                            other page or exactly pathname.
                        </p>
                        <Link href={'/'} className="btn inline-block mt-4 text-sm">
                            Back to home
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
